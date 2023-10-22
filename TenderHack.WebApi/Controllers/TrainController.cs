using Microsoft.AspNetCore.Mvc;

using TenderHack.BLL.Requests;
using TenderHack.BLL.Services.Interfaces.Commands;

namespace TenderHack.Controllers;

/// <summary>
/// Контроллер для обработки логов.
/// </summary>
public class TrainController : BaseController
{
	/// <summary>
	/// Обучение нейросети
	/// </summary>
	[HttpPost]
	public async Task<IActionResult> TrainAndGetCluster(ErrorRequest? errorRequest, CancellationToken cancellationToken)
	{
		try
		{
			var clusterId = await GetService<ITrainService>().Execute(errorRequest, cancellationToken);
			return Ok(clusterId);
		}
		catch (Exception ex)
		{
			return BadRequest(ex.Message);
		}
	}
}