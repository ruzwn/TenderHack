using Microsoft.AspNetCore.Mvc;
using TenderHack.BLL.Services.Interfaces.Commands;
using TenderHack.BLL.Services.Interfaces.Queries;

namespace TenderHack.Controllers;

/// <summary>
/// Пример контроллера
/// </summary>
public class MultilayerTemplateController : BaseController
{
    /// <summary>
    /// Метод Get контроллера Base
    /// </summary>
    /// <param name="id">get Идентификатор сущности</param>
    /// <returns></returns>
    [HttpGet]
    public async Task<IActionResult> GetAsync(int id)
    {
        await HttpContext.RequestServices.GetRequiredService<IGetService>().HandleAsync(id);
        return Ok(id);
    }

    /// <summary>
    /// Метод Post контроллера Base
    /// </summary>
    /// <param name="id">post Идентификтор сущности</param>
    /// <returns></returns>
    [HttpPost]
    public async Task<IActionResult> PostAsync(int id)
    {
        await HttpContext.RequestServices.GetRequiredService<IPostService>().HandleAsync(id);
        return Ok(id);
    }
}
