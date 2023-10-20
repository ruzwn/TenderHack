using Microsoft.AspNetCore.Mvc;
using TenderHack.BLL.Services.Interfaces.Commands;

namespace TenderHack.Controllers;

/// <summary>
/// Импорт данных из файлов.
/// </summary>
public class ImportController : BaseController
{
    private readonly IImportService _importService;

    public ImportController(IImportService importService)
    {
        _importService = importService;
    }

    /// <summary>
    /// Загрузка данных из CSV.
    /// </summary>
    [HttpPost("csv")]
    public async Task<IActionResult> ImportCsvFile(IFormFile file, CancellationToken cancellationToken)
    {
        try
        {
            using var memoryStream = new MemoryStream();
            await file.CopyToAsync(memoryStream, cancellationToken);
            var fileBytes = memoryStream.ToArray();
            
            await _importService.Execute(fileBytes, cancellationToken);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}