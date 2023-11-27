import { BaseService } from "../00SangoCore/01Bases/BaseService";
import Image = Laya.Image;

const { regClass, property } = Laya;

@regClass()
export class ResourceService extends BaseService<ResourceService> 
{
    private _spriteDict: Map<string, Laya.Sprite> = new Map();

    public LoadSprite(spritePath: string, isCache: boolean): Laya.Sprite
    {
        if (!this._spriteDict.has(spritePath))
        {
            this.LoadSpriteAsync(spritePath).then((loadedSprite) =>
            {                
                if (isCache)
                {
                    this._spriteDict.set(spritePath, loadedSprite);
                }
                console.log("We get new sprite then returned");
                return loadedSprite;
            });
        }
        else
        {
            return this._spriteDict.get(spritePath);
        }
    }

    private async LoadSpriteAsync(spritePath: string): Promise<Laya.Sprite>
    {
        let sprite;
        await Laya.loader.load(spritePath, Laya.Handler.create(this, () =>
        {
            sprite = Laya.loader.getRes(spritePath) as Laya.Sprite;        
            console.log("We get new sprite");
        }));
        return sprite;
    }
}