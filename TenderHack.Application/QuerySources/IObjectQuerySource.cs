namespace MultilayerTemplate.BLL.QuerySources;

public interface IObjectQuerySource
{
    Task<object> GetAsync(int id, CancellationToken cancellationToken);
}
