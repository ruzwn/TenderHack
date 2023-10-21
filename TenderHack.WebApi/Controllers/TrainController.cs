using Microsoft.AspNetCore.Mvc;

using TenderHack.BLL.Services.Interfaces.Commands;
using TenderHack.Domain.Models;

namespace TenderHack.Controllers
{
	public class TrainController : BaseController
	{
		/// <summary>
		/// Обучение нейросети
		/// </summary>
		[HttpPost]
		public async Task<IActionResult> TrainAndGetCluster(ErrorDto? error, CancellationToken cancellationToken)
		{
			try
			{
				long clusterId = await GetService<ITrainService>().Execute(error, cancellationToken);
				return Ok(clusterId);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
	}
}
