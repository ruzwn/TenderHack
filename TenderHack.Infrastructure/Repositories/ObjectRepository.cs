using TenderHack.BLL.Repositories;
using TenderHack.BLL.Specifications;

namespace TenderHack.Infrastructure.Repositories;

public class ObjectRepository : IRepository<object>
{
    public Task AddAsync(object entity, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task UpdateAsync(object entity, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync(object entity, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<object> GetOneAsync(Specification<object> filter, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyList<object>> GetManyAsync(Specification<object> filter, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
