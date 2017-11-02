export function spritesReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case 'STAGE.ADD_SPRITE':
      return [...state, payload];
    case 'STAGE.SPRITE_MOVE': {
      const index = state.findIndex(sp => sp.id === payload.sprite_id);
      const updatedSprite = { ...state[index], x: payload.x, y: payload.y };

      console.log('index', index);

      return [
        ...state.slice(0, index),
        updatedSprite,
        ...state.slice(index + 1)
      ];
    }
    case 'STAGE.SPRITE_SCALE': {
      const index = state.findIndex(sp => sp.id === payload.sprite_id);
      if (index === -1) {
        return state;
      }
      const updatedSprite = {...state[index], scale: payload.scale};

      console.log('index', index);

      return [
        ...state.slice(0, index),
        updatedSprite,
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
}
