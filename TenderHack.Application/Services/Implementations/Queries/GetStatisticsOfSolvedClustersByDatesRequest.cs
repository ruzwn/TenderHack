using TenderHack.BLL.Repositories;
using TenderHack.BLL.Requests.Statistics;
using TenderHack.BLL.Responses.Statistics;
using TenderHack.BLL.Services.Interfaces.Queries;
using TenderHack.BLL.Specifications;
using TenderHack.Domain.Models;

namespace TenderHack.BLL.Services.Implementations.Queries;

public class GetStatisticsOfSolvedClustersByDatesRequest : IGetStatisticsOfSolvedClustersByDatesRequest
{
    private readonly IRepository<Cluster> _clusterRepository;

    public GetStatisticsOfSolvedClustersByDatesRequest(IRepository<Cluster> clusterRepository)
    {
        _clusterRepository = clusterRepository;
    }

    public async Task<List<StatisticsOfSolvedClustersResponse>> HandleAsync(
        BaseStatisticsRequest request, CancellationToken cancellationToken = default)
    {
        var clusters = await _clusterRepository
            .GetManyAsync(new Specification<Cluster>(x => x.ResolvedDate != DateTime.MinValue
                && request.StartDate <= x.ResolvedDate && x.ResolvedDate <= request.EndDate),
            cancellationToken);

        return clusters
            .GroupBy(x => x.ResolvedDate)
            .Select(x => new StatisticsOfSolvedClustersResponse
            {
                Date = DateOnly.FromDateTime(x.Key),
                SolvedClustersCount = x.Count()
            })
            .ToList();
    }
}