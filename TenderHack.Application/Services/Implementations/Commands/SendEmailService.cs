using System.Net;
using System.Net.Mail;
using TenderHack.BLL.Requests;
using TenderHack.BLL.Responses;
using TenderHack.BLL.Services.Interfaces.Commands;

namespace TenderHack.BLL.Services.Implementations.Commands;

public class SendEmailService : ISendEmailService
{
    // todo: из конфига брать...

    private const string EmailHost = "smtp.mail.ru";
    private const int EmailHostPort = 587;

    private const string EmailSender = "noreply.ddv@mail.ru";
    private const string EmailSenderPassword = "DwwXgaKYjt3iFwBpwUgc";
    private const string EmailReceiver = "domashevd@list.ru"; // todo: заменить на получение email-ов пользователей

    public Task<EmptyResponse> HandleAsync(SendEmailRequest request, CancellationToken cancellationToken = default)
    {
        var message = new MailMessage();
        message.From = new MailAddress(EmailSender);
        message.To.Add(new MailAddress(EmailReceiver));
        message.Subject = request.Message.Subject;
        message.Body = request.Message.Body;

        var client = new SmtpClient();
        client.Host = EmailHost;
        client.Port = EmailHostPort;
        client.EnableSsl = true;
        client.Credentials = new NetworkCredential(EmailSender, EmailSenderPassword);
        client.Send(message);

        return Task.FromResult(new EmptyResponse());
    }
}
