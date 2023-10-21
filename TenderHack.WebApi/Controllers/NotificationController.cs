using Microsoft.AspNetCore.Mvc;
using TenderHack.BLL.Requests;
using TenderHack.BLL.Services.Interfaces.Commands;

namespace TenderHack.Controllers;

/// <summary>
/// Сервис уведомлений пользователей
/// </summary>
public class NotificationController : BaseController
{
    /// <summary>
    /// Отправка сообщения пользователям по почте
    /// </summary>
    [HttpPost]
    public async Task<IActionResult> SendEmailAsync(SendEmailRequest request, CancellationToken cancellationToken)
    {
        await GetService<ISendEmailService>().HandleAsync(request, cancellationToken);

        return Ok();
    }
}
