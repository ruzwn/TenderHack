using MultilayerTemplate.BLL.Services.Interfaces.Commands;

namespace MultilayerTemplate.BLL.Services.Implementations.Commands;

public class PostService : IPostService
{
    public Task<int> HandleAsync(int request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
