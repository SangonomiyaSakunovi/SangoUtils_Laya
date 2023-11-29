import { BaseCache } from "./BaseCache";

const { regClass } = Laya;

@regClass()
export class BaseInfo extends BaseCache
{
    protected _infoCode: InfoCode;

    public get InfoCode(): InfoCode
    {
        return this._infoCode;
    }
}

export enum InfoCode
{

}