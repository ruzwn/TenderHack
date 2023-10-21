using TenderHack.BLL.Repositories;
using TenderHack.BLL.Services.Interfaces.Queries;
using TenderHack.BLL.Specifications;
using TenderHack.Domain.Models;

namespace TenderHack.BLL.Services.Implementations.Queries;

public class GetLogsByIdsService : IGetLogsByIdsService
{
    private readonly IRepository<Log> _logRepository;

    public GetLogsByIdsService(IRepository<Log> logRepository)
    {
        _logRepository = logRepository;
    }

    public async Task<IReadOnlyList<Log>> HandleAsync(IEnumerable<Guid> request, CancellationToken cancellationToken = default)
    {
        var filter = LogSpecification.SearchByIds(request);
        IReadOnlyList<Log> result = await _logRepository.GetManyAsync(filter, cancellationToken);

        return result;
    }
}
