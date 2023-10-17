using TenderHack.BLL.Services.Interfaces.Queries;

namespace TenderHack.BLL.Services.Implementations.Queries;

public class GetService : IGetService
{
    public Task<int> HandleAsync(int request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
