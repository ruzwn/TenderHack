using System.Security.AccessControl;
using TenderHack.BLL.Repositories;
using TenderHack.BLL.Requests.Statistics;
using TenderHack.BLL.Responses.Statistics;
using TenderHack.BLL.Services.Interfaces.Queries;
using TenderHack.BLL.Specifications;
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
        var errors = await _errorRepository
            .GetManyAsync(new Specification<Error>(x =>
                request.StartDate < x.Date && x.Date < request.EndDate), 
            cancellationToken);

        return errors
            .GroupBy(x => x.Date)
            .Select(x => new ErrorCountByDateResponse
            {
                Date = DateOnly.FromDateTime(x.Key),
                Count = x.Count()
            })
            .ToList();
    }
}