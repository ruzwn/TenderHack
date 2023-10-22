using TenderHack.BLL.Requests;

namespace TenderHack.BLL.Services.Interfaces.Commands;

public interface ITrainService
{
	Task<long> Execute(ErrorRequest? error, CancellationToken cancellationToken);
}