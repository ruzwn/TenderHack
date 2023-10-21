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
		public async Task<IActionResult> TrainAndGetCluster(Error? error, CancellationToken cancellationToken)
		{
			try
			{
				int cluster = await GetService<ITrainService>().Execute(error, cancellationToken);
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
	}
}
