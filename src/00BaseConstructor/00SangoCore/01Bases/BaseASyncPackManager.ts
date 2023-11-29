const { regClass } = Laya;

@regClass()
export abstract class BaseASyncPackManager
{
    protected _packId: number = 1;

    public abstract RemovePack(packId: number): boolean;

    public abstract RemovePackCallBack(packId: number): boolean;

    protected abstract GeneratePackId(): number;
}