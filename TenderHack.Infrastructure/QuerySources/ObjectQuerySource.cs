using TenderHack.BLL.QuerySources;

namespace TenderHack.Infrastructure.QuerySources;

public class ObjectQuerySource : IObjectQuerySource
{
    public Task<object> GetAsync(int id, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
