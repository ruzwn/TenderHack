namespace TenderHack.Domain.Common;

public static class StringExtensions
{
    public static string ThrowIfNullOrEmpty(this string data)
    {
        if (string.IsNullOrEmpty(data))
        {
            throw new ArgumentException("Data was null");
        }

        return data;
    }
}