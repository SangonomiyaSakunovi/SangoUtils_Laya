const { regClass } = Laya;

@regClass()
export class LayaSingleton<T> extends Laya.Script 
{
    private static _instance: any;

    public static Instance<T>(classT: { new(): T}): T
    {
        if (this._instance == null)
        {
            this._instance = new classT();
            let singleton = new Laya.Sprite();
            Laya.stage.addChild(singleton);
            singleton.addComponent(this);
        }
        return this._instance;
    }    
}