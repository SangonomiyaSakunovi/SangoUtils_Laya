import { BaseService } from "./00BaseConstructor/00SangoCore/00Bases/BaseService";

const { regClass, property } = Laya;

@regClass()
export class Main extends Laya.Script {

    onStart() {
        console.log("Game start");
    }
}