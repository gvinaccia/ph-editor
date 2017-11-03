import {StageActions} from "../actions";

const initialState = {
  activeSpriteId: null,
  width: 300,
  height: 300,
  zoom: 1
};

export function stageReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case StageActions.SELECT:
      return { ...state, activeSpriteId: payload.sprite_id };
    case StageActions.UNSELECT_ALL:
      return { ...state, activeSpriteId: null };
    case StageActions.ZOOM:
      return { ...state, zoom: state.zoom + payload.zoom };
    default:
      return state;
  }
}
