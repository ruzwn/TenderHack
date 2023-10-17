using TenderHack.BLL.Services.Interfaces.Commands;

namespace TenderHack.BLL.Services.Implementations.Commands;

public class PostService : IPostService
{
    public Task<int> HandleAsync(int request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
