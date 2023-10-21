using Microsoft.EntityFrameworkCore;
using TenderHack.BLL.Repositories;
using TenderHack.BLL.Specifications;
using TenderHack.Domain.Models;
using TenderHack.Infrastructure.Database;

namespace TenderHack.Infrastructure.Repositories;

public class LogRepository : IRepository<Log>
{
    private readonly TenderHackDbContext _dbContext;

    public LogRepository(TenderHackDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task AddAsync(Log entity, CancellationToken cancellationToken)
    {
        await _dbContext.Logs.AddAsync(entity, cancellationToken);

        await _dbContext.SaveChangesAsync(cancellationToken);
    }

    public async Task AddRangeAsync(IEnumerable<Log> entities, CancellationToken cancellationToken)
    {
        await _dbContext.Logs.AddRangeAsync(entities, cancellationToken);

        await _dbContext.SaveChangesAsync(cancellationToken);
    }

    public async Task UpdateAsync(Log entity, CancellationToken cancellationToken)
    {
        if (_dbContext.Entry(entity).State == EntityState.Detached)
        {
            _dbContext.Update(entity);
        }

        await _dbContext.SaveChangesAsync(cancellationToken);
    }

    public async Task DeleteAsync(Log entity, CancellationToken cancellationToken)
    {
        _dbContext.Logs.Remove(entity);

        await _dbContext.SaveChangesAsync(cancellationToken);
    }

    public async Task<Log> GetOneAsync(Specification<Log> filter, CancellationToken cancellationToken)
    {
        var entity = await _dbContext.Logs
            .FirstOrDefaultAsync(filter, cancellationToken)
            ?? throw new ArgumentNullException("Entity was not found");

        return entity;
    }

    public async Task<IReadOnlyList<Log>> GetManyAsync(Specification<Log> filter, CancellationToken cancellationToken)
    {
        var entities = await _dbContext.Logs
            .Where(filter)
            .ToListAsync(cancellationToken);

        return entities;
    }
}