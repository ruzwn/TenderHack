using Microsoft.AspNetCore.Mvc;
using TenderHack.BLL.Requests;
using TenderHack.BLL.Services.Interfaces.Queries;

namespace TenderHack.Controllers;

/// <summary>
/// Взаимодействие с кластером ошибок.
/// </summary>
public class ClusterController : BaseController
{
    /// <summary>
    /// Получить информацию по кластеру.
    /// </summary>
    /// <param name="clusterId"></param>
    /// <param name="cancellationToken"></param>
    /// <returns></returns>
    [HttpGet("{clusterId:long}")]
    public async Task<IActionResult> Get(
        long clusterId,
        CancellationToken cancellationToken)
    {
        try
        {
            var result = await GetService<IGetClusterRequest>()
                .HandleAsync(clusterId, cancellationToken);

            return Ok(result);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    /// <summary>
    /// Получить список кластеров.
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<IActionResult> List(
        [FromQuery] ListRequest request,
        CancellationToken cancellationToken)
    {
        try
        {
            var result = await GetService<IListClusterRequest>()
                .HandleAsync(request, cancellationToken);

            return Ok(result);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}