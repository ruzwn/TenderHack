namespace TenderHack.Models;

public class BaseResponse<T>
{
    public T Data { get; set; }
}

public class BaseListResponse<T>
{
    public IEnumerable<T> Data { get; set; }
    
    public int TotalCount { get; set; }
}