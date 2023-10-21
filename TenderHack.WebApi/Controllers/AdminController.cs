using Microsoft.AspNetCore.Mvc;
using TenderHack.BLL.Requests;
using TenderHack.BLL.Responses.Errors;
using TenderHack.BLL.Services.Interfaces.Queries;

namespace TenderHack.Controllers;

/// <summary>
/// Контроллер для взаимодействия с кластерами или отдельными логами.
/// </summary>
public class AdminController : BaseController
{
    [HttpGet]
    public async Task<List<ErrorListResponse>> List(
        ListRequest request,
        CancellationToken cancellationToken)
    {
        try
        {
            return await GetService<IListErrorRequest>().HandleAsync(request, cancellationToken);
        }
        catch (Exception ex)
        {
            return Enumerable.Empty<ErrorListResponse>().ToList();
        }
    }
}