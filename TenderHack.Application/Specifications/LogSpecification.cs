using TenderHack.Domain.Models;

namespace TenderHack.BLL.Specifications;

public static class LogSpecification
{
    public static Specification<Error> SearchByIds(IEnumerable<Guid> ids)
    {
        return new Specification<Error>(log => ids.Contains(log.Id));
    }
}
