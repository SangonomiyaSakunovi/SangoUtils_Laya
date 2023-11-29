const { regClass } = Laya;

type ActionSangoCallBackType<T extends any[]> = (...args: T) => void;
type FuncSangoCallBackType<T extends any[], TResult> = (...args: T) => TResult;

@regClass()
export class ActionSango<T extends any[]>
{
    private actionSangoCallBack: ActionSangoCallBackType<T> | null = null;

    public Invoke(...args: T): void
    {
        if (this.actionSangoCallBack)
        {
            this.actionSangoCallBack(...args);
        }
    }

    public AddListener(actionCallBack: ActionSangoCallBackType<T>): void
    {
        this.actionSangoCallBack = actionCallBack;
    }

    public RemoveListener(): void
    {
        this.actionSangoCallBack = null;
    }
}

@regClass()
export class FuncSango<T extends any[], TResult>
{
    private funcSangoCallBack: FuncSangoCallBackType<T, TResult> | null = null;

    public Invoke(...args: T): TResult | undefined
    {
        if (this.funcSangoCallBack)
        {
            return this.funcSangoCallBack(...args);
        }
        return undefined;
    }

    public AddListener(funcCallBack: FuncSangoCallBackType<T, TResult>): void
    {
        this.funcSangoCallBack = funcCallBack;
    }

    public RemoveListener(): void
    {
        this.funcSangoCallBack = null;
    }
}