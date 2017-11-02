export function spritesReducer(state = [], action) {
  const {type, payload} = action;

  switch (type) {
    case 'STAGE.ADD_SPRITE':
      return [...state, payload];
    case 'STAGE.SPRITE_MOVE':
    {
      const index = state.findIndex(sp => sp.id === payload.sprite_id);
      const updatedSprite = {...state[index], x: payload.x, y: payload.y};

      return [
        ...state.slice(0, index),
        updatedSprite,
        ...state.slice(index + 1)
      ];
    }
    case 'STAGE.SELECT_SPRITE':
    {
      const index = state.findIndex(sp => sp.id === payload.sprite_id);
      const updatedSprite = {...state[index], isSelected: true};

      return [
        ...state.slice(0, index).map(i => { console.log(i); return {...i, isSelected: false}; }),
        updatedSprite,
        ...state.slice(index + 1).map(i => { return {...i, isSelected: false}; })
      ];
    }
    default:
      return state;
  }
}
