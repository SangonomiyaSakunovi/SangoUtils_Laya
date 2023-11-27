import { LayaSingleton } from "./LayaSingleton";

const { regClass, property } = Laya;

@regClass()
export class BaseService<T> extends LayaSingleton<T>
{        
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