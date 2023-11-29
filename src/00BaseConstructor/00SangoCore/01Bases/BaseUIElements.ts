import { ResourceService } from "../../04ResourceSystem/ResourceService";
import Sprite = Laya.Sprite;
import Image = Laya.Image;

const { regClass, property } = Laya;

@regClass()
export class BaseUIElements extends Laya.Script 
{
    //declare owner : Laya.Sprite3D;
    declare owner: Laya.Sprite;

    //@property({type: Node})
    public SetWindowState(isActive: boolean = true): void
    {
        if (this.owner.visible != isActive)
        {
            this.owner.visible = isActive;
        }
        if (isActive)
        {
            this.OnInit();
        }
        else
        {
            this.OnDispose();
        }
    }

    protected OnInit(): void { }
    protected OnDispose(): void { }

    protected SetSprite(image: Image, spritePath: string, isCache: boolean = false): void
    {
        image.skin = spritePath;
    }

}