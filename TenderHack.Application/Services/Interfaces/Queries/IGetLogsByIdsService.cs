using TenderHack.Domain.Models;

namespace TenderHack.BLL.Services.Interfaces.Queries;

public interface IGetLogsByIdsService : IService<IEnumerable<Guid>, IReadOnlyList<Error>>
{
}

