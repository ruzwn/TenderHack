using Microsoft.AspNetCore.Mvc;

using TenderHack.BLL.Requests;
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
		public async Task<IActionResult> TrainAndGetCluster(ErrorRequest? errorRequest, CancellationToken cancellationToken)
		{
			try
			{
				long clusterId = await GetService<ITrainService>().Execute(errorRequest, cancellationToken);
				return Ok(clusterId);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
	}
}
