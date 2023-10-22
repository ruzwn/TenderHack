using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using TenderHack.BLL.Requests;
using TenderHack.BLL.Requests.Clusters;
using TenderHack.BLL.Responses.Clusters;
using TenderHack.BLL.Services.Interfaces.Commands;
using TenderHack.BLL.Services.Interfaces.Queries;
using TenderHack.Hub;

namespace TenderHack.Controllers;

/// <summary>
/// Взаимодействие с кластером ошибок.
/// </summary>
public class ClusterController : BaseController
{
    private readonly IHubContext<NotificationHub> _hubContext;
    
    public ClusterController(IHubContext<NotificationHub> hubContext)
    {
        _hubContext = hubContext;
    }

    /// <summary>
    /// Получить информацию по кластеру.
    /// </summary>
    /// <param name="clusterId"></param>
    /// <param name="cancellationToken"></param>
    /// <returns></returns>
    [HttpGet("{clusterId:long}")]
    public async Task<ActionResult<ClusterGetResponse>> Get(
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
    /// Редактировать кластер.
    /// </summary>
    [HttpPost]
    public async Task<ActionResult> Update(
        ClusterUpdateRequest request,
        CancellationToken cancellationToken
    )
    {
        try
        {
            var result= await GetService<IClusterUpdateRequest>().HandleAsync(request, cancellationToken);

            if (!result.IsResolved)
            {
                return Ok();
            }
            
            await _hubContext.Clients.All
                .SendAsync("sendMessage", $"Ошибка '{result.DisplayName}' исправлена", 
                    cancellationToken);

            var sendEmailRequest = new SendEmailRequest(
                Enumerable.Empty<Guid>().ToList(),
                new EmailMessage
                {
                    Subject = "Ошибка исправлена", 
                    Body = $"{result.DisplayName} исправлена: {result.Description}"
                }
            );
                
            await GetService<ISendEmailService>()
                .HandleAsync(sendEmailRequest, cancellationToken);

            return Ok();
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
    public async Task<ActionResult<List<ClusterListResponse>>> List(
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