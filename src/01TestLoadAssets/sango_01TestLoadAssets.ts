import { BaseWindow } from "../00BaseConstructor/00SangoCore/01Bases/BaseWindow";
import Image = Laya.Image;
import { ActionSango, FuncSango } from "../00BaseConstructor/00SangoCore/00Extensions/ActionSango";

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
        const action = new ActionSango<[string, number]>();
        action.AddListener(this.TestAction);
        action.Invoke("testAction", 1);
        const func = new FuncSango<[string, number], boolean>();
        func.AddListener(this.TestFunc);
        let bool = func.Invoke("testFunc", 2);
        console.log("Can we get the FuncReturn? " + bool);
    }

    private TestAction(str: string, num: number): void
    {
        console.log("We get the Action string: " + str);
        console.log("We get the Action numer: " + num);
        console.log("A new test Action over");
    }

    private TestFunc(str: string, num: number): boolean
    {
        console.log("We get the Func string: " + str);
        console.log("We get the Func numer: " + num);
        console.log("A new test Func over");
        return true;
    }
}