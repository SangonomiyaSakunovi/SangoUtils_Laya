import { ActionSango } from "../00SangoCore/00Extensions/ActionSango";

import Sprite = Laya.Sprite;
import Vector2 = Laya.Vector2;
import LayaEvent = Laya.Event;

const { regClass } = Laya;

@regClass()
export class UIPointerListener extends Laya.Script 
{
    public listenerObject: Sprite;
    public commands: any[];

    public clickDownPosition: Vector2;
    public clickUpPosition: Vector2;

    public onPointerClickCallBack0: ActionSango<[Sprite, any[]]> = new ActionSango<[Sprite, any[]]>;
    public onPointerDownCallBack0: ActionSango<[Sprite, any[]]> = new ActionSango<[Sprite, any[]]>;
    public onPointerUpCallBack0: ActionSango<[Sprite, any[]]> = new ActionSango<[Sprite, any[]]>;
    public onPointerDragCallBack0: ActionSango<[Sprite, any[]]> = new ActionSango<[Sprite, any[]]>;

    public onPointerClickCallBack1: ActionSango<[LayaEvent, Sprite, any[]]> = new ActionSango<[LayaEvent, Sprite, any[]]>;
    public onPointerDownCallBack1: ActionSango<[LayaEvent, Sprite, any[]]> = new ActionSango<[LayaEvent, Sprite, any[]]>;
    public onPointerUpCallBack1: ActionSango<[LayaEvent, Sprite, any[]]> = new ActionSango<[LayaEvent, Sprite, any[]]>;
    public onPointerDragCallBack1: ActionSango<[LayaEvent, Sprite, any[]]> = new ActionSango<[LayaEvent, Sprite, any[]]>;

    public OnPointerClick(eventData: LayaEvent): void
    {
        this.onPointerClickCallBack0.Invoke(this.listenerObject, this.commands);
        this.onPointerClickCallBack1.Invoke(eventData, this.listenerObject, this.commands);
    }

    public OnPointerDown(eventData: LayaEvent): void
    {
        this.onPointerDownCallBack0.Invoke(this.listenerObject, this.commands);
        this.onPointerDownCallBack1.Invoke(eventData, this.listenerObject, this.commands);
    }

    public OnPointerUp(eventData: LayaEvent): void
    {
        this.onPointerUpCallBack0.Invoke(this.listenerObject, this.commands);
        this.onPointerUpCallBack1.Invoke(eventData, this.listenerObject, this.commands);
    }

    public OnDrag(eventData: LayaEvent): void
    {
        this.onPointerDragCallBack0.Invoke(this.listenerObject, this.commands);
        this.onPointerDragCallBack1.Invoke(eventData, this.listenerObject, this.commands);
    }
}