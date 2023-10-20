using Microsoft.AspNetCore.Mvc;

namespace TenderHack.Controllers;

/// <summary>
/// Базовый контроллер (дефолтные аттрибуты и прочее)
/// </summary>
[Route("api/[controller]/[action]")]
[ApiController]
public abstract class BaseController : ControllerBase
{
    /// <summary>
    /// Получение сервиса из контейнера внедрения зависимостей
    /// </summary>
    protected TService GetService<TService>()
        where TService : class
    {
        return HttpContext.RequestServices.GetRequiredService<TService>();
    }
}
