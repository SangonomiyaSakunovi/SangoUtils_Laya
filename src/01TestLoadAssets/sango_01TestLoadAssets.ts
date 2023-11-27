import { BaseWindow } from "../00BaseConstructor/00SangoCore/01Bases/BaseWindow";
import Image = Laya.Image;
import { SangoAction } from "../00BaseConstructor/00SangoCore/00Extensions/SangoAction";

const { regClass, property } = Laya;

@regClass()
export class sango_01TestLoadAssets extends BaseWindow
{
    //declare owner : Laya.Sprite3D;
    //declare owner: Laya.Sprite;

    @property({ name: "ImgTest", tips: "Test", type: Image })
    public imgTest: Image;    

    onStart(): void
    {
        this.SetSprite(this.imgTest, "res/imgs/Kokomi-removebg-preview.png");
        const sangoAction = new SangoAction<[string, number]>();
        sangoAction.Add(this.TestAction);
        sangoAction.Invoke("test",1);
    }

    private TestAction(str: string, num: number): void
    {
        console.log("We get the string: " + str);
        console.log("We get the numer: " + num);
        console.log("A new test over");
    }
}