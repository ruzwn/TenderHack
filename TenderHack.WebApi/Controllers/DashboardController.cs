using Microsoft.AspNetCore.Mvc;
using TenderHack.BLL.Requests.Statistics;
using TenderHack.BLL.Responses.Statistics;
using TenderHack.BLL.Services.Interfaces.Queries;

namespace TenderHack.Controllers;

/// <summary>
/// Контроллер для отображения данных в дэшборде.
/// </summary>
public class DashboardController : BaseController
{
    /// <summary>
    /// Получить статистику по количеству ошибок в день недели.
    /// </summary>
    /// <param name="request">Между датами должна быть неделя</param>
    [HttpGet]
    public async Task<ActionResult<StatisticsOfWeekResponse>> GetStatisticsByDaysOfWeek(
        [FromQuery] BaseStatisticsRequest request, 
        CancellationToken cancellationToken)
    {
        try
        {
            var result = await GetService<IGetStatisticsOfWeekRequest>().HandleAsync(request, cancellationToken);
            
            return Ok(result);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    /// <summary>
    /// Получить статистику по решенным кластерам задач по промежутку дат.
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<List<StatisticsOfSolvedClustersResponse>>> GetSolvedClustersByDates(
        [FromQuery] BaseStatisticsRequest request,
        CancellationToken cancellationToken)
    {
        try
        {
            var result = await GetService<IGetStatisticsOfSolvedClustersByDatesRequest>()
                .HandleAsync(request, cancellationToken);
            
            return Ok(result);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}