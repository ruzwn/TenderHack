using TenderHack.BLL.Repositories;
using TenderHack.BLL.Services.Interfaces.Queries;
using TenderHack.BLL.Specifications;
using TenderHack.Domain.Models;

namespace TenderHack.BLL.Services.Implementations.Queries;

public class GetLogsByIdsService : IGetLogsByIdsService
{
    private readonly IRepository<Error> _logRepository;

    public GetLogsByIdsService(IRepository<Error> logRepository)
    {
        _logRepository = logRepository;
    }

    public async Task<IReadOnlyList<Error>> HandleAsync(IEnumerable<Guid> request, CancellationToken cancellationToken = default)
    {
        var filter = LogSpecification.SearchByIds(request);
        IReadOnlyList<Error> result = await _logRepository.GetManyAsync(filter, cancellationToken);

        return result;
    }
}
