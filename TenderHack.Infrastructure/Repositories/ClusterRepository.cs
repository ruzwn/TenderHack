using Microsoft.EntityFrameworkCore;
using TenderHack.BLL.Repositories;
using TenderHack.BLL.Specifications;
using TenderHack.Domain.Models;
using TenderHack.Infrastructure.Database;

namespace TenderHack.Infrastructure.Repositories
{
	public class ClusterRepository : IRepository<Cluster>
	{
		private readonly TenderHackDbContext _dbContext;
		public ClusterRepository(TenderHackDbContext context)
		{
			_dbContext = context;
		}

		public async Task AddAsync(Cluster entity, CancellationToken cancellationToken)
		{
			await _dbContext.Clusters.AddAsync(entity, cancellationToken);

			//await _dbContext.SaveChangesAsync(cancellationToken);
		}

		public async Task AddRangeAsync(IEnumerable<Cluster> entities, CancellationToken cancellationToken)
		{
			await _dbContext.Clusters.AddRangeAsync(entities, cancellationToken);

			await _dbContext.SaveChangesAsync(cancellationToken);
		}

		public Task DeleteAsync(Cluster entity, CancellationToken cancellationToken)
		{
			throw new NotImplementedException();
		}

		public async Task<List<Cluster>> GetManyAsync(Specification<Cluster> filter, CancellationToken cancellationToken)
		{
			var entities = _dbContext.Clusters
				.Include(c => c.Errors)
				.AsQueryable();
			if (filter is not null)
			{
				entities = entities.Where(filter);
			}
			
			return await entities.ToListAsync(cancellationToken);
		}

		public async Task<Cluster> GetOneAsync(Specification<Cluster> filter, CancellationToken cancellationToken)
		{
			var entity = await _dbContext.Clusters
				.Include(x => x.Errors)
				.FirstOrDefaultAsync(filter, cancellationToken)
				?? throw new ArgumentNullException("Entity was not found");

			return entity;
		}

		public Task SaveAsync()
		{
			return _dbContext.SaveChangesAsync();
		}

		public async Task UpdateAsync(Cluster entity, CancellationToken cancellationToken)
		{
			if (_dbContext.Entry(entity).State == EntityState.Detached)
			{
				_dbContext.Update(entity);
			}

			await _dbContext.SaveChangesAsync(cancellationToken);
		}
	}
}
