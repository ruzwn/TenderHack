using Microsoft.AspNetCore.Mvc;
using TenderHack.Models;
using TenderHack.Models.Responses;

namespace TenderHack.Controllers;

/// <summary>
/// Контроллер для теста фронта.
/// </summary>
public class TestController : BaseController
{
    /// <summary>
    /// Получить тестовые записи.
    /// </summary>
    [HttpGet]
    public BaseListResponse<TestResponse> GetLogs(int page)
    {
        return new BaseListResponse<TestResponse>
        {
            Data = Enumerable.Repeat(new TestResponse
            {
                Id = Guid.NewGuid(),
                MetaId = Guid.NewGuid(),
                Date = DateTime.Now,
                Message =
                    "Ошибка обработки запроса на регистрацию/изменение данных компании id: 23264576 type: 'Customer'\nc3a26e908605084180b05f77c367a8a0;2023-10-09 00:00:09;\"System.InvalidOperationException: У прямой закуки id=$14101044 отстуствует ФЗ\n   at Granit.Cssp.Orm.Interceptors.PurchaseRequestInterceptor.Validate(PurchaseRequest purchaseRequest) in D:\\pp2\\source\\Pp\\Granit.Cssp\\Orm\\Interceptors\\PurchaseRequestInterceptor.cs:line 55\n   at Granit.Cssp.Orm.Interceptors.PurchaseRequestInterceptor.OnFlushDirty(Object entity, Object id, Object[] currentState, Object[] previousState, String[] propertyNames, IType[] types) in D:\\pp2\\source\\Pp\\Granit.Cssp\\Orm\\Interceptors\\PurchaseRequestInterceptor.cs:line 26\n   at Granit.Core.Data.NHibernate.Interceptors.CompositeInterceptor.<>c__DisplayClass3_0.<OnFlushDirty>b__0(IInterceptor inter) in D:\\pp2\\source\\Granit\\Granit.Core\\Data\\NHibernate\\Interceptors\\CompositeInterceptor.cs:line 38\n   at System.Linq.Enumerable.Any[TSource](IEnumerable`1 source, Func`2 predicate)\n   at Granit.Core.Data.NHibernate.Interceptors.CompositeInterceptor.OnFlushDirty(Object entity, Object id, Object[] currentState, Object[] previousState, String[] propertyNames, IType[] types) in D:\\pp2\\source\\Granit\\Granit.Core\\Data\\NHibernate\\Interceptors\\CompositeInterceptor.cs:line 43\n   at NHibernate.Event.Default.DefaultFlushEntityEventListener.InvokeInterceptor(ISessionImplementor session, Object entity, EntityEntry entry, Object[] values, IEntityPersister persister)\n   at NHibernate.Event.Default.DefaultFlushEntityEventListener.HandleInterception(FlushEntityEvent event)\n   at NHibernate.Event.Default.DefaultFlushEntityEventListener.ScheduleUpdate(FlushEntityEvent event)\n   at NHibernate.Event.Default.DefaultFlushEntityEventListener.OnFlushEntity(FlushEntityEvent event)\n   at NHibernate.Event.Default.AbstractFlushingEventListener.FlushEntities(FlushEvent event)\n   at NHibernate.Event.Default.AbstractFlushingEventListener.FlushEverythingToExecutions(FlushEvent event)\n   at NHibernate.Event.Default.DefaultFlushEventListener.OnFlush(FlushEvent event)\n   at NHibernate.Impl.SessionImpl.Flush()\n   at NHibernate.Impl.SessionImpl.BeforeTransactionCompletion(ITransaction tx)\n   at NHibernate.Transaction.AdoTransaction.Commit()"
            }, 105).Skip(page * 25).Take(25),
            TotalCount = 105
        };
    }

    /// <summary>
    /// Получить тестовые записи.
    /// </summary>
    [HttpGet]
    public BaseListResponse<TestResponse> GetLogsType()
    {
        return new BaseListResponse<TestResponse>
        {
            Data = Enumerable.Repeat(new TestResponse
            {
                Id = Guid.NewGuid(),
                Name = Guid.NewGuid().ToString()
            }, 300),
            TotalCount = 300
        };
    }   
}
