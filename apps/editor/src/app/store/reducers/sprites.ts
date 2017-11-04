import {StageActions} from "../actions";

function updateSpriteInIndex(idToFind: number | string, sprites: ISprite[], cb: (ISprite) => ISprite) {
  const index = sprites.findIndex(sp => sp.id === idToFind);
  const updatedSprite = cb(sprites[index]);

  return [...sprites.slice(0, index), updatedSprite, ...sprites.slice(index + 1)];
}

function swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
  return arr;
}

function pullSpriteUp(idToFind:  number | string, sprites: ISprite[]) {
  const index = sprites.findIndex(sp => sp.id === idToFind);

  if (index === sprites.length - 1) {
    return sprites;
  }

  return swap([...sprites], index, index + 1);
}

function pushSpriteDown(idToFind:  number | string, sprites: ISprite[]) {
  const index = sprites.findIndex(sp => sp.id === idToFind);

  if (index === 0) {
    return sprites;
  }

  return swap([...sprites], index, index - 1);
}

export function spritesReducer(state: ISprite[] = [], action) {
  const { type, payload } = action;

  switch (type) {
    case StageActions.ADD_SPRITE:
      return [...state, payload];
    case StageActions.REMOVE_SPRITE:
      const index = state.findIndex(sp => sp.id === payload.sprite_id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case StageActions.MOVE_SPRITE:
      return updateSpriteInIndex(payload.sprite_id, state, sprite => ({ ...sprite, x: payload.x, y: payload.y }));
    case StageActions.SCALE_SPRITE:
      return updateSpriteInIndex(payload.sprite_id, state, sprite => {
        const scale = {
          x: sprite.scale.x + payload.deltaX,
          y: sprite.scale.y + payload.deltaY
        };
        return { ...sprite, scale };
      });
    case StageActions.PULL_SPRITE_UP:
      return pullSpriteUp(payload.sprite_id, state);
    case StageActions.PUSH_SPRITE_DOWN:
      return pushSpriteDown(payload.sprite_id, state);
    default:
      return state;
  }
}
