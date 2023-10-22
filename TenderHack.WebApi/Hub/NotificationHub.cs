using Microsoft.AspNetCore.SignalR;

namespace TenderHack.Hub;

public class NotificationHub : Microsoft.AspNetCore.SignalR.Hub
{
    public Task SendMessage(string message)
    {
        Clients.All.SendAsync("sendMessage", message);

        return Task.CompletedTask;
    }
}