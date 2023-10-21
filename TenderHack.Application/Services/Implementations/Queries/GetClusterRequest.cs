using TenderHack.BLL.Repositories;
using TenderHack.BLL.Responses.Clusters;
using TenderHack.BLL.Responses.Statistics;
using TenderHack.BLL.Services.Interfaces.Queries;
using TenderHack.BLL.Specifications;
using TenderHack.Domain.Models;

namespace TenderHack.BLL.Services.Implementations.Queries;

public class GetClusterRequest : IGetClusterRequest
{
    private readonly IRepository<Cluster> _clusterRepository;

    public GetClusterRequest(IRepository<Cluster> clusterRepository)
    {
        _clusterRepository = clusterRepository;
    }

    public async Task<ClusterGetResponse> HandleAsync(long request, CancellationToken cancellationToken = default)
    {
        var entity = await _clusterRepository
            .GetOneAsync(new Specification<Cluster>(x => x.Id == request),
                cancellationToken)
            ?? throw new ArgumentNullException("Cluster not found");

        var currentDay = DateTime.Today;
        var currentDayErrors = entity.Errors
            .Where(x => x.Date.Date == currentDay.Date)
            .GroupBy(x => x.Date.Hour)
            .Select(x => new ErrorsByHourDto
            {
                Hour = x.Key,
                ErrorCount = x.Count()
            })
            .OrderBy(x => x.Hour)
            .ToList();

        var previousDayErrors = entity.Errors
            .Where(x => x.Date.Date == currentDay.AddDays(-1).Date)
            .GroupBy(x => x.Date.Hour)
            .Select(x => new ErrorsByHourDto
            {
                Hour = x.Key,
                ErrorCount = x.Count()
            })
            .OrderBy(x => x.Hour)
            .ToList();

        var lastErrors = entity.Errors
            .OrderByDescending(x => x.Date)
            .Take(10)
            .Select(x => new ErrorAbbreviatedDto
            {
                Id = x.Id, 
                Message = x.Log
            })
            .ToList();

        return new ClusterGetResponse
        {
            Id = entity.Id,
            DisplayName = entity.DisplayName,
            ErrorCount = entity.Errors.Count,
            ErrorByHourStatistics = currentDayErrors,
            PreviousErrorsByHourStatistics = previousDayErrors,
            LastErrors = lastErrors
        };
    }
}