using TenderHack.BLL.Repositories;
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

		public async Task<int> Execute(Error? error, CancellationToken cancellationToken)
		{
			await _errorRepository.AddAsync(error, cancellationToken);
			var errors = await _errorRepository.GetManyAsync(null, cancellationToken);
			//KMeans(error);
			return 0;
		}

		private void KMeans(List<Error> errors, List<Cluster> clusters)
		{
			// Итерационный процесс
			bool changed;
			do
			{
				// Очистка кластеров
				foreach (var cluster in clusters)
				{
					cluster.Errors.Clear();
				}

				// Присвоение ошибок к ближайшим кластерам
				foreach (var error in errors)
				{
					var closestCluster = clusters.MinBy(c => CalculateDistance(c.Centroid, error));

					if (closestCluster.Centroid == null)
					{
						clusters.Add(new Cluster());
						closestCluster.Centroid = error;
					}
					closestCluster.Errors.Add(error);
				}

				// Пересчет центроидов
				changed = false;
				foreach (var cluster in clusters)
				{
					var newCentroid = cluster.Errors.MinBy(e => CalculateSumDistance(e, cluster));
					if (cluster.Centroid != newCentroid)
					{
						changed = true;
					}
				}
			}
			while (changed);
		}

		private double CalculateSumDistance(Error e, Cluster cluster)
		{
			return cluster.Errors.Sum(error => CalculateDistance(error, e));
		}

		private double CalculateDistance(Error error1, Error error2)
		{
			var log1 = error1.Log;
			var log2 = error2.Log;

			if (log1 == string.Empty)
			{
				return (double)1 / 2 * Math.Sqrt(log2.Length);
			}
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
			if (error1.Id == error2.Id)
			{
				return dist *= 0.1;
			}
			return dist;
		}
	}
}

