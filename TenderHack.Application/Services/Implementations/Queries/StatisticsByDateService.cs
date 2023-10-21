using TenderHack.BLL.Repositories;
using TenderHack.BLL.Requests.Statistics;
using TenderHack.BLL.Responses.Statistics;
using TenderHack.BLL.Services.Interfaces.Queries;
using TenderHack.BLL.Specifications;
using TenderHack.Domain.Models;

namespace TenderHack.BLL.Services.Implementations.Queries;

public class StatisticsByDateService : IStatisticByDateService
{
    private readonly IRepository<Error> _errorRepository;
    private readonly IRepository<Cluster> _clusterRepository;

    public StatisticsByDateService(
        IRepository<Error> errorRepository, 
        IRepository<Cluster> clusterRepository)
    {
        _errorRepository = errorRepository;
        _clusterRepository = clusterRepository;
    }

    public async Task<StatisticByDateResponse> HandleAsync(
        BaseStatisticsRequest request, CancellationToken cancellationToken)
    {
        var clustersWithErrorsInDates = await _clusterRepository
            .GetManyAsync(new Specification<Cluster>(x => x.Errors
                    .Any(error => error.Date > request.StartDate && error.Date < request.EndDate)),
                cancellationToken);

        var result = clustersWithErrorsInDates
            .Select(x =>
            {
                var errorInDateCount = x.Errors
                    .Count(error => error.Date > request.StartDate && error.Date < request.EndDate);

                return new ClusterWithAbbreviatedErrorsDto
                {
                    Id = x.Id,
                    DisplayName = x.DisplayName,
                    ErrorCount = errorInDateCount
                };
            })
            .ToList();

        return new StatisticByDateResponse
        {
            TotalClusterCount = clustersWithErrorsInDates.Count,
            TotalErrorCount = result.Sum(x => x.ErrorCount),
            Clusters = result
        };

    }
}