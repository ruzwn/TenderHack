using TenderHack.BLL.Repositories;
using TenderHack.BLL.Requests.Statistics;
using TenderHack.BLL.Responses.Statistics;
using TenderHack.BLL.Services.Interfaces.Queries;
using TenderHack.Domain.Models;

namespace TenderHack.BLL.Services.Implementations.Queries;

public class GetStatisticsOfWeekRequest : IGetStatisticsOfWeekRequest
{
    public readonly IRepository<Error> _errorRepository;

    public GetStatisticsOfWeekRequest(IRepository<Error> errorRepository)
    {
        _errorRepository = errorRepository;
    }

    public Task<StatisticsOfWeekResponse> HandleAsync(BaseStatisticsRequest request, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}