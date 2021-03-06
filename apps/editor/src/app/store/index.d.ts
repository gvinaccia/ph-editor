declare interface IVector {
  x: number;
  y: number;
}

declare interface ISprite {
  id: string | number;
  x: number;
  y: number;
  width: number;
  height: number;
  src: string;
  sprite_id: string;
  scale: IVector;
  anchor: IVector;
}

declare interface AppState {
  assets: {
    images: any[];
  };
  sprites: ISprite[];
  stage: {
    activeSpriteId: number | string;
    width: number;
    height: number;
    zoom: 1;
  };
}
