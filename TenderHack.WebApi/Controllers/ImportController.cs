using Microsoft.AspNetCore.Mvc;
using TenderHack.BLL.Services.Interfaces.Commands;

namespace TenderHack.Controllers;

/// <summary>
/// Импорт данных из файлов.
/// </summary>
public class ImportController : BaseController
{
    /// <summary>
    /// Загрузка данных из CSV.
    /// </summary>
    [HttpPost]
    public async Task<IActionResult> ImportCsvFile(IFormFile file, CancellationToken cancellationToken)
    {
        try
        {
            using var memoryStream = new MemoryStream();
            await file.CopyToAsync(memoryStream, cancellationToken);
            var fileBytes = memoryStream.ToArray();

            await GetService<IImportService>().Execute(fileBytes, cancellationToken);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
