export function stageReducer(state = { activeSpriteId: null }, action) {
  const { type, payload } = action;

  switch (type) {
    case 'STAGE.SELECT_SPRITE':
      return { ...state, activeSpriteId: payload.sprite_id };
    case 'STAGE.UNSELECT_ALL':
      return { ...state, activeSpriteId: null };
    default:
      return state;
  }
}
