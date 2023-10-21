using TenderHack.BLL.Requests;
using TenderHack.BLL.Responses;

namespace TenderHack.BLL.Services.Interfaces.Commands;

public interface ISendEmailService : IService<SendEmailRequest, EmptyResponse>
{
}
