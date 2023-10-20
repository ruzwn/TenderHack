namespace TenderHack.BLL.Services.Interfaces.Commands;

/// <summary>
/// Сервис импорта данных из файлов.
/// </summary>
public interface IImportService
{
    /// <summary>
    /// Выполнить импорт файла csv.
    /// </summary>
    public Task Execute(byte[] fileData, CancellationToken cancellationToken);
}