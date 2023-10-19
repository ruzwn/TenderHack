using Microsoft.AspNetCore.Mvc;
using MultilayerTemplate.BLL.Services.Interfaces.Commands;
using MultilayerTemplate.BLL.Services.Interfaces.Queries;

namespace MultilayerTemplate.Controllers;

[Route("api/[controller]/[action]")]
[ApiController]
public class BaseController : ControllerBase
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
