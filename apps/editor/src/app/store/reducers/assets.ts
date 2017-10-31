export function assetsReducer(state = {images: []}, action) {
  switch (action.type) {
    case 'ASSETS.ADD_IMAGE':
      return {...state, images: [...state.images, action.payload]};
    default:
      return state;
  }
}
