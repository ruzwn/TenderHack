using TenderHack.BLL.Repositories;
using TenderHack.BLL.Requests.Statistics;
using TenderHack.BLL.Responses.Statistics;
using TenderHack.BLL.Services.Interfaces.Queries;
using TenderHack.BLL.Specifications;
using TenderHack.Domain.Models;

namespace TenderHack.BLL.Services.Implementations.Queries;

public class GetStatisticsOfWeekRequest : IGetStatisticsOfWeekRequest
{
    private readonly IRepository<Error> _errorRepository;

    public GetStatisticsOfWeekRequest(IRepository<Error> errorRepository)
    {
        _errorRepository = errorRepository;
    }

    public async Task<List<StatisticsOfDayOfWeek>> HandleAsync(BaseStatisticsRequest request, CancellationToken cancellationToken = default)
    {
        if (request.StartDate.AddDays(6) != request.EndDate)
        {
            throw new ArgumentException("Interval between dates is not equal one week");
        }
        
        var errors = await _errorRepository
            .GetManyAsync(new Specification<Error>(x => x.Date > request.StartDate && x.Date < request.EndDate), 
                cancellationToken);

        return errors
            .GroupBy(x => x.Date.DayOfWeek)
            .Select(x => new StatisticsOfDayOfWeek
            {
                DayOfWeek = x.Key,
                ErrorCount = x.Count()
            })
            .ToList();
    }
}