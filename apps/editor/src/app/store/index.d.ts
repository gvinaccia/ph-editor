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

  // solo per l'interfaccia
  isSelected: boolean;
}

declare interface AppState {
  assets: {
    images: any[]
  };
  sprites: ISprite[];
  stage: {
    activeSpriteId: number | string;
  };
}
