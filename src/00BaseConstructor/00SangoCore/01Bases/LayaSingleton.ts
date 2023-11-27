const { regClass, property } = Laya;

@regClass()
export class LayaSingleton<T> extends Laya.Script 
{
    private static _instance: any;

    public static Instance<T>(c: { new(): T}): T
    {
        if (this._instance == null)
        {
            this._instance = new c();
            let singleton = new Laya.Sprite();
            Laya.stage.addChild(singleton);
            singleton.addComponent(this);
        }
        return this._instance;
    }

    onAwake(): void
    {
        this.OnAwakeLaya();
    }

    onUpdate(): void
    {
        this.OnUpdateLaya();
    }

    onDestroy(): void
    {
        this.OnDisposeLaya();
    }

    protected OnAwakeLaya(): void
    {

    }

    protected OnUpdateLaya(): void
    {

    }

    protected OnDisposeLaya(): void
    {

    }
}