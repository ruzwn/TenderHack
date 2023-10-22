using Microsoft.AspNetCore.Mvc;
using TenderHack.BLL.Repositories;
using TenderHack.BLL.Responses.Clusters;
using TenderHack.BLL.Specifications;
using TenderHack.Domain.Models;

namespace TenderHack.Controllers;

public class DemoController : BaseController
{
    /// <summary>
    /// Получить ошибку для тестов.
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<ClusterGetResponse>> GetRawError(
        [FromQuery] Guid logId,
        CancellationToken cancellationToken)
    {
        var result = await GetService<IRepository<Error>>()
            .GetOneAsync(new Specification<Error>(x => x.Id == logId), 
                cancellationToken);

        return Ok(result.Cluster.ToDto());
    }
}