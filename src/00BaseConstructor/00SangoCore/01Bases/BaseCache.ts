const { regClass } = Laya;

@regClass()
export class BaseCache
{
    protected _cacheId: string;
    protected _id: string;
    protected _cacheLevelCode: CacheLevelCode;

    public get CacheId(): string
    {
        return this._cacheId;
    }
    public get Id(): string
    {
        return this._id;
    }
    public get CacheLevelCode(): CacheLevelCode
    {
        return this._cacheLevelCode;
    }
}

export enum CacheLevelCode
{
    Root,
}