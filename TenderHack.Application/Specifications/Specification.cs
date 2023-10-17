using System.Linq.Expressions;

namespace TenderHack.BLL.Specifications;

public class Specification<TEntity>
{
    private readonly Expression<Func<TEntity, bool>> _expression;

    public Specification(Expression<Func<TEntity, bool>> expression)
    {
        _expression = expression ?? throw new ArgumentNullException(nameof(expression));
    }

    public static bool operator false(Specification<TEntity> _)
    {
        return false;
    }

    public static bool operator true(Specification<TEntity> _)
    {
        return false;
    }

    public static Specification<TEntity> operator &(Specification<TEntity> spec1, Specification<TEntity> spec2)
    {
        return new Specification<TEntity>(spec1._expression.And(spec2._expression));
    }

    public static Specification<TEntity> operator |(Specification<TEntity> spec1, Specification<TEntity> spec2)
    {
        return new Specification<TEntity>(spec1._expression.Or(spec2._expression));
    }

    public static Specification<TEntity> operator !(Specification<TEntity> spec)
    {
        return new Specification<TEntity>(spec._expression.Not());
    }

    public static implicit operator Expression<Func<TEntity, bool>>(Specification<TEntity> spec)
    {
        return spec._expression;
    }

    public static implicit operator Specification<TEntity>(Expression<Func<TEntity, bool>> expression)
    {
        return new Specification<TEntity>(expression);
    }

    public override string ToString()
    {
        return _expression.ToString();
    }

    public bool ContainsOnly(bool verifiableConstant)
    {
        Stack<Expression> nodes = new();

        nodes.Push(_expression.Body);

        var flag = true;

        while (nodes.TryPop(out Expression node))
        {
            if (node is BinaryExpression be)
            {
                nodes.Push(be.Right);
                nodes.Push(be.Left);
            }
            else
            {
                var validResult = node switch
                {
                    ConstantExpression { Value: bool b } when b == verifiableConstant => true,
                    _ => false
                };

                if (!validResult)
                {
                    flag = false;
                    break;
                }
            }
        }

        return flag;
    }

    public static Specification<TEntity> AddAnd(Specification<TEntity> first, Specification<TEntity> added)
    {
        if (added is null) return first;
        if (first is null) return added;
        return first && added;
    }

    public static Specification<TEntity> AddOr(Specification<TEntity> first, Specification<TEntity> added)
    {
        if (added is null) return first;
        if (first is null) return added;
        return first || added;
    }
}
