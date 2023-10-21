using Microsoft.EntityFrameworkCore;

using System.Linq;

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
			await _dbContext.Cluters.AddAsync(entity, cancellationToken);

			await _dbContext.SaveChangesAsync(cancellationToken);
		}

		public async Task AddRangeAsync(IEnumerable<Cluster> entities, CancellationToken cancellationToken)
		{
			await _dbContext.Cluters.AddRangeAsync(entities, cancellationToken);

			await _dbContext.SaveChangesAsync(cancellationToken);
		}

		public Task DeleteAsync(Cluster entity, CancellationToken cancellationToken)
		{
			throw new NotImplementedException();
		}

		public async Task<IReadOnlyList<Cluster>> GetManyAsync(Specification<Cluster> filter, CancellationToken cancellationToken)
		{
			var entities = _dbContext.Cluters.AsQueryable();
			if (filter is not null)
			{
				entities = entities.Where(filter);
			}
			var entitiesList = await entities.ToListAsync(cancellationToken);

			return entitiesList;
		}

		public async Task<Cluster> GetOneAsync(Specification<Cluster> filter, CancellationToken cancellationToken)
		{
			var entity = await _dbContext.Cluters
				.FirstOrDefaultAsync(filter, cancellationToken)
				?? throw new ArgumentNullException("Entity was not found");

			return entity;
		}

		public Task UpdateAsync(Cluster entity, CancellationToken cancellationToken)
		{
			throw new NotImplementedException();
		}
	}
}
