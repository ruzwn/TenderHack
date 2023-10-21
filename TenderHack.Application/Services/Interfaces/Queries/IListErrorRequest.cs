using TenderHack.BLL.Requests;
using TenderHack.BLL.Responses.Errors;

namespace TenderHack.BLL.Services.Interfaces.Queries;

public interface IListErrorRequest : IService<ListRequest, List<ErrorListResponse>>
{
}