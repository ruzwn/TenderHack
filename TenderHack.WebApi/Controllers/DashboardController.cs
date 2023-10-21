using Microsoft.AspNetCore.Mvc;
using TenderHack.BLL.Requests.Statistics;

namespace TenderHack.Controllers;

/// <summary>
/// Контроллер для отображения данных в дэшборде.
/// </summary>
public class DashboardController : BaseController
{
    [HttpGet]
    public async Task<IActionResult> GetStatisticsByDaysOfWeek(
        [FromQuery] BaseStatisticsRequest request, 
        CancellationToken cancellationToken)
    {
        try
        {
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest();
        }
    }
}