using TenderHack.Domain.Models;

namespace TenderHack.BLL.Services.Interfaces.Commands
{
	public interface ITrainService
	{
		Task<long> Execute(Error? error, CancellationToken cancellationToken);
	}
}
