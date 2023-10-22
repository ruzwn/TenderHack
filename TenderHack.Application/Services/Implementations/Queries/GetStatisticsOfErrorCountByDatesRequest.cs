using TenderHack.BLL.Repositories;
using TenderHack.BLL.Requests.Statistics;
using TenderHack.BLL.Responses.Statistics;
using TenderHack.BLL.Services.Interfaces.Queries;
using TenderHack.Domain.Models;

namespace TenderHack.BLL.Services.Implementations.Queries;

public class GetStatisticsOfErrorCountByDatesRequest
    : IGetStatisticsOfErrorCountByDatesRequest
{
    private readonly IRepository<Error> _errorRepository;

    public GetStatisticsOfErrorCountByDatesRequest(IRepository<Error> errorRepository)
    {
        _errorRepository = errorRepository;
    }

    public async Task<List<ErrorCountByDateResponse>> HandleAsync(BaseStatisticsRequest request, CancellationToken cancellationToken = default)
    {
        var baseQuery = await _errorRepository
                .GetManyAsQueryableAsync();

        var errors = baseQuery
            .Where(x => x.Date > request.StartDate && x.Date < request.EndDate)
            .GroupBy(x => x.Date.Day)
            .Select(x => new ErrorCountByDateResponse
            {
                Date = DateOnly.FromDateTime(x.FirstOrDefault().Date),
                Count = x.Count()
            })
            .OrderBy(x => x.Date)
            .ToList();
        
        return errors;
    }
}