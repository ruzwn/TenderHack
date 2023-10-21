using System.Text.RegularExpressions;

using TenderHack.BLL.Repositories;
using TenderHack.BLL.Requests;
using TenderHack.BLL.Services.Interfaces.Commands;
using TenderHack.Domain.Models;

namespace TenderHack.BLL.Services.Implementations.Commands
{
	public class TrainService : ITrainService
	{
		private readonly IRepository<Cluster> _clusterRepository;
		private readonly IRepository<Error> _errorRepository;
		public TrainService(IRepository<Cluster> clusterRepository, IRepository<Error> errorRepository)
		{
			_clusterRepository = clusterRepository;
			_errorRepository = errorRepository;
		}

		public async Task<long> Execute(ErrorRequest? errorRequest, CancellationToken cancellationToken)
		{
			var error = new Error(errorRequest.Id, errorRequest.Date.ToString(), errorRequest.Log);

			await _errorRepository.AddAsync(error, cancellationToken);
			var errors = await _errorRepository.GetManyAsync(new Specifications.Specification<Error>(e => e.Cluster == null), cancellationToken);
			var clusters = await _clusterRepository.GetManyAsync(null, cancellationToken);

			clusters.Add(new Cluster());
			int count = 0;

			foreach (var e in errors.Take(5))
			{
				count++;
				await KMeans(e, clusters);
			}

			await _clusterRepository.SaveAsync();
			return error.Cluster.Id;
		}

		private async Task KMeans(Error error, List<Cluster> clusters)
		{
			var closestCluster = clusters.AsParallel().MinBy(c => CalculateDistance(c.Centroid, error));
			closestCluster.Errors.Add(error);
			error.Cluster = closestCluster;

			var newCentroid = closestCluster.Errors.AsParallel().MinBy(e => CalculateSumDistance(e, closestCluster));

			if (closestCluster.Centroid == null)
			{
				await _clusterRepository.AddAsync(closestCluster, CancellationToken.None);
				clusters.Add(new Cluster());
				closestCluster.Centroid = error;
				closestCluster.CentroidId = error.Id;
			}
			closestCluster.Centroid = newCentroid;
		}

		private double CalculateSumDistance(Error e, Cluster cluster)
		{
			return cluster.Errors.Sum(error => CalculateDistance(error, e));
		}

		private double CalculateDistance(Error error1, Error error2)
		{
			if (error1 == null)
			{
				return Math.Sqrt(error2.ProcessedLog.Length);
			}
			SetPreprocessedLog(error1);
			SetPreprocessedLog(error2);
			var log1 = error1.ProcessedLog;
			var log2 = error2.ProcessedLog;
			
			int[,] distance = new int[log1.Length + 1, log2.Length + 1];

			for (int i = 0; i <= log1.Length; i++)
			{
				distance[i, 0] = i;
			}

			for (int j = 0; j <= log2.Length; j++)
			{
				distance[0, j] = j;
			}

			for (int i = 1; i <= log1.Length; i++)
			{
				for (int j = 1; j <= log2.Length; j++)
				{
					int cost = (log1[i - 1] == log2[j - 1]) ? 0 : 1;

					distance[i, j] = Math.Min(
						Math.Min(distance[i - 1, j] + 1, distance[i, j - 1] + 1),
						distance[i - 1, j - 1] + cost);
				}
			}

			double dist = distance[log1.Length, log2.Length];
			if (error1.MetaId == error2.MetaId)
			{
				return dist *= 0.7;
			}
			return dist;
		}

		private void SetPreprocessedLog(Error e)
		{
			if (e.ProcessedLog is not null)
			{
				return;
			}

			e.ProcessedLog = Regex.Replace(e.Log, @"[\d\s()\[\]{};.@""'\n\r\t,]", "").ToLower();
		}
	}
}

