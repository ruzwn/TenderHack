using Microsoft.AspNetCore.SignalR;

namespace TenderHack.Hub;

/// <summary>
/// Точка подключения клиентов через SignalR.
/// </summary>
public class NotificationHub : Microsoft.AspNetCore.SignalR.Hub
{
    /// <summary>
    /// Отправить сообщение всем клиентам.
    /// </summary>
    /// <param name="message"></param>
    /// <returns></returns>
    public Task SendMessage(string message)
    {
        Clients.All.SendAsync("sendMessage", message);

        return Task.CompletedTask;
    }
}