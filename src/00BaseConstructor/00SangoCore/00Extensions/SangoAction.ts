const { regClass, property } = Laya;

type ActionCallBack<T extends any[]> = (...args: T) => void;

@regClass()
export class SangoAction<T extends any[]>
{
    private actionCallBack: ActionCallBack<T> | null = null;

    public Invoke(...args: T): void
    {
        if (this.actionCallBack)
        {
            this.actionCallBack(...args);
        }
    }

    public Add(actionCallBack: ActionCallBack<T>): void
    {
        this.actionCallBack = actionCallBack;
    }

    public Remove(): void
    {
        this.actionCallBack = null;
    }
}