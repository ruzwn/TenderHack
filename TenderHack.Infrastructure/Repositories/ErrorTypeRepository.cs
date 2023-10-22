using Microsoft.EntityFrameworkCore;
using TenderHack.BLL.Repositories;
using TenderHack.BLL.Specifications;
using TenderHack.Domain.Models;
using TenderHack.Infrastructure.Database;

namespace TenderHack.Infrastructure.Repositories;
public class ErrorTypeRepository : IRepository<ErrorType>
{
	private readonly TenderHackDbContext _dbContext;

	public ErrorTypeRepository(TenderHackDbContext dbContext)
	{
		_dbContext = dbContext;
	}

	public async Task AddAsync(ErrorType entity, CancellationToken cancellationToken)
	{
		await _dbContext.ErrorTypes.AddAsync(entity, cancellationToken);
	}

	public async Task AddRangeAsync(IEnumerable<ErrorType> entities, CancellationToken cancellationToken)
	{
		await _dbContext.ErrorTypes.AddRangeAsync(entities, cancellationToken);
	}

	public Task DeleteAsync(ErrorType entity, CancellationToken cancellationToken)
	{
		throw new NotImplementedException();
	}

	public async Task<List<ErrorType>> GetManyAsync(Specification<ErrorType> filter, CancellationToken cancellationToken)
	{
		var entities = await _dbContext.ErrorTypes
			.Include(e => e.Errors)
			.Where(filter)
			.ToListAsync(cancellationToken);

		return entities;
	}

	public Task<IQueryable<ErrorType>> GetManyAsQueryableAsync()
	{
		throw new NotImplementedException();
	}

	public async Task<ErrorType> GetOneAsync(Specification<ErrorType> filter, CancellationToken cancellationToken)
	{
		var entity = await _dbContext.ErrorTypes
			.FirstOrDefaultAsync(filter, cancellationToken)
			?? throw new ArgumentNullException($"{nameof(ErrorType)}");

		return entity;
	}

	public Task SaveAsync()
	{
		return _dbContext.SaveChangesAsync();
	}

	public Task UpdateAsync(ErrorType entity, CancellationToken cancellationToken)
	{
		if (_dbContext.Entry(entity).State == EntityState.Detached)
		{
			_dbContext.Update(entity);
		}

		return Task.CompletedTask;
	}
}
