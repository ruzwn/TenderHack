using Microsoft.EntityFrameworkCore;

using TenderHack.BLL.Repositories;
using TenderHack.BLL.Specifications;
using TenderHack.Domain.Models;
using TenderHack.Infrastructure.Database;

namespace TenderHack.Infrastructure.Repositories;

public class ErrorRepository : IRepository<Error>
{
	private readonly TenderHackDbContext _dbContext;

	public ErrorRepository(TenderHackDbContext dbContext)
	{
		_dbContext = dbContext;
	}

	public async Task AddAsync(Error entity, CancellationToken cancellationToken)
	{
		await _dbContext.Errors.AddAsync(entity, cancellationToken);

		await _dbContext.SaveChangesAsync(cancellationToken);
	}

	public async Task AddRangeAsync(IEnumerable<Error> entities, CancellationToken cancellationToken)
	{
		await _dbContext.Errors.AddRangeAsync(entities, cancellationToken);

		await _dbContext.SaveChangesAsync(cancellationToken);
	}

	public async Task UpdateAsync(Error entity, CancellationToken cancellationToken)
	{
		if (_dbContext.Entry(entity).State == EntityState.Detached)
		{
			_dbContext.Update(entity);
		}

		await _dbContext.SaveChangesAsync(cancellationToken);
	}

	public async Task DeleteAsync(Error entity, CancellationToken cancellationToken)
	{
		_dbContext.Errors.Remove(entity);

		await _dbContext.SaveChangesAsync(cancellationToken);
	}

	public async Task<Error> GetOneAsync(Specification<Error> filter, CancellationToken cancellationToken)
	{
		var entity = await _dbContext.Errors
			.Include(x => x.Cluster)
			.FirstOrDefaultAsync(filter, cancellationToken)
			?? throw new ArgumentNullException("Entity was not found");

		return entity;
	}

	public async Task<List<Error>> GetManyAsync(Specification<Error> filter, CancellationToken cancellationToken)
	{
		var entities = _dbContext.Errors
			.Include(e => e.Cluster)
			.Include(e => e.Users)
			.Include(e => e.ErrorType)
			.AsQueryable();
		if (filter is not null)
		{
			entities = entities.Where(filter);
		}

		return await entities.ToListAsync(cancellationToken);
	}

	public Task SaveAsync()
	{
		return _dbContext.SaveChangesAsync();
	}
}