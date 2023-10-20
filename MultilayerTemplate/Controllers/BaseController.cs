using Microsoft.AspNetCore.Mvc;

namespace MultilayerTemplate.Controllers;

/// <summary>
/// Базовый контроллер (дефолтные аттрибуты и прочее
/// </summary>
[Route("api/[controller]/[action]")]
[ApiController]
public abstract class BaseController : ControllerBase
{
}
