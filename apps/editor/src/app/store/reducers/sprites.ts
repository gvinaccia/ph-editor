function updateSpriteInIndex(idToFind: number | string, sprites: ISprite[], cb: (ISprite) => ISprite) {
  const index = sprites.findIndex(sp => sp.id === idToFind);
  const updatedSprite = cb(sprites[index]);

  return [...sprites.slice(0, index), updatedSprite, ...sprites.slice(index + 1)];
}

export function spritesReducer(state: ISprite[] = [], action) {
  const { type, payload } = action;

  switch (type) {
    case 'STAGE.ADD_SPRITE':
      return [...state, payload];
    case 'STAGE.REMOVE_SPRITE':
      const index = state.findIndex(sp => sp.id === payload.sprite_id);
      return [...state.slice(0, index), ...state.slice(index+1)];
    case 'STAGE.SPRITE_MOVE':
      return updateSpriteInIndex(payload.sprite_id, state, sprite => ({ ...sprite, x: payload.x, y: payload.y }));
    case 'STAGE.SPRITE_SCALE':
      return updateSpriteInIndex(payload.sprite_id, state, sprite => {
        const scale = {
          x: sprite.scale.x + payload.deltaX,
          y: sprite.scale.y + payload.deltaY
        };
        return { ...sprite, scale };
      });
    default:
      return state;
  }
}
