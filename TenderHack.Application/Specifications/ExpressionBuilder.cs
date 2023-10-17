using System.Linq.Expressions;

namespace TenderHack.BLL.Specifications;

// https://petemontgomery.wordpress.com/2011/02/10/a-universal-predicatebuilder/
public static class ExpressionBuilder
{
    public static Expression<Func<T, bool>> And<T>(
        this Expression<Func<T, bool>> first,
        Expression<Func<T, bool>> second)
    {
        return CollapseBooleanConstants(first, second) ?? first.Compose<Func<T, bool>>(second, Expression.AndAlso);
    }

    public static Expression<Func<T, bool>> Or<T>(
        this Expression<Func<T, bool>> first,
        Expression<Func<T, bool>> second)
    {
        return CollapseBooleanConstants(first, second) ?? first.Compose<Func<T, bool>>(second, Expression.OrElse);
    }

    public static Expression<Func<T, bool>> Not<T>(this Expression<Func<T, bool>> expression)
    {
        UnaryExpression negated = Expression.Not(expression.Body);
        return Expression.Lambda<Func<T, bool>>(negated, expression.Parameters);
    }

    public static Expression<T> Compose<T>(
        this LambdaExpression first,
        LambdaExpression second,
        Func<Expression, Expression, Expression> merge)
    {
        var map = first.Parameters
           .Select((f, i) => new { f, s = second.Parameters[i] })
           .ToDictionary(p => p.s, p => p.f);

        Expression secondBody = ParameterRebinder.ReplaceParameters(map, second.Body);

        return Expression.Lambda<T>(merge(first.Body, secondBody), first.Parameters);
    }

    private static Expression<Func<T, bool>> CollapseBooleanConstants<T>(
        Expression<Func<T, bool>> left,
        Expression<Func<T, bool>> right)
    {
        if (right.Body is ConstantExpression { Value: true or 1 or false or 0 }) return left;

        if (left.Body is ConstantExpression { Value: true or 1 or false or 0 }) return right;

        return null;
    }

    private sealed class ParameterRebinder : ExpressionVisitor
    {
        private readonly Dictionary<ParameterExpression, ParameterExpression> _map;

        private ParameterRebinder(Dictionary<ParameterExpression, ParameterExpression> map)
        {
            _map = map ?? new Dictionary<ParameterExpression, ParameterExpression>();
        }

        public static Expression ReplaceParameters(
            Dictionary<ParameterExpression, ParameterExpression> map,
            Expression exp)
        {
            return new ParameterRebinder(map).Visit(exp);
        }

        protected override Expression VisitParameter(ParameterExpression node)
        {
            if (_map.TryGetValue(node, out ParameterExpression replacement)) node = replacement;

            return base.VisitParameter(node);
        }
    }
}
