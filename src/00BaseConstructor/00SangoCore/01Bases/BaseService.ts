import { LayaSingleton } from "./LayaSingleton";

const { regClass } = Laya;

@regClass()
export class BaseService<T> extends LayaSingleton<T>
{        
    onUpdate()
    {
        this.OnUpdateLaya();
    }

    public OnInitService(): void
    {
        
    }

    protected OnUpdateLaya(): void
    {
        
    }

    public OnDisposeService(): void
    {

    }
}