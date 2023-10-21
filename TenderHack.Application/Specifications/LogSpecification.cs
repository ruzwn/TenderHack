using TenderHack.Domain.Models;

namespace TenderHack.BLL.Specifications;

public static class LogSpecification
{
    public static Specification<Log> SearchByIds(IEnumerable<Guid> ids)
    {
        return new Specification<Log>(log => ids.Contains(log.Id));
    }
}
