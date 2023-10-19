using MultilayerTemplate.BLL.Specifications;

namespace MultilayerTemplate.BLL.Repositories;

public interface IRepository<TEntity>
    where TEntity : class
{
    Task AddAsync(TEntity entity, CancellationToken cancellationToken);
    Task UpdateAsync(TEntity entity, CancellationToken cancellationToken);
    Task DeleteAsync(TEntity entity, CancellationToken cancellationToken);
    Task<TEntity> GetOneAsync(Specification<TEntity> filter, CancellationToken cancellationToken);
    Task<IReadOnlyList<TEntity>> GetManyAsync(Specification<TEntity> filter, CancellationToken cancellationToken);
}
