const { regClass } = Laya;

@regClass()
export class BaseUdpEvent
{
    private _udpEventPortId: number;

    public get UdpEventPortId(): number
    {
        return this._udpEventPortId;
    }
}