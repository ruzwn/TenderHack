using TenderHack.BLL.Specifications;

namespace TenderHack.BLL.Repositories;

public interface IRepository<TEntity>
    where TEntity : class
{
    Task AddAsync(TEntity entity, CancellationToken cancellationToken);

    Task AddRangeAsync(IEnumerable<TEntity> entities, CancellationToken cancellationToken);
    
    Task UpdateAsync(TEntity entity, CancellationToken cancellationToken);

    Task<TEntity> GetOneAsync(Specification<TEntity> filter, CancellationToken cancellationToken);
    
    Task<List<TEntity>> GetManyAsync(Specification<TEntity> filter, CancellationToken cancellationToken);

    Task<IQueryable<TEntity>> GetManyAsQueryableAsync();
    
	Task SaveAsync();
}
