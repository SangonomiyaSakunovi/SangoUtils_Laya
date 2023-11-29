import { BaseCache } from "./BaseCache";

const { regClass } = Laya;

@regClass()
export class BaseData extends BaseCache
{
    protected _dataCode: DataCode;

    public get DataCode(): DataCode
    {
        return this._dataCode;
    }
}

export enum DataCode
{

}