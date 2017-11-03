import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";

@Injectable()
export class StageActions {

  static readonly SELECT = 'STAGE.SELECT_SPRITE';
  static readonly UNSELECT_ALL = 'STAGE.UNSELECT_ALL';
  static readonly ADD_SPRITE = 'STAGE.ADD_SPRITE';
  static readonly REMOVE_SPRITE = 'STAGE.REMOVE_SPRITE';
  static readonly SCALE_SPRITE = 'STAGE.SPRITE_SCALE';

  static readonly ZOOM = 'STAGE.ZOOM';

  constructor(private store: Store<AppState>) { }

  unselectAll() {
    this.store.dispatch({
      type: StageActions.UNSELECT_ALL
    });
  }

  select(sprite: ISprite) {
    this.store.dispatch({
      type: StageActions.SELECT,
      payload: { sprite_id: sprite.id }
    });
  }

  addSprite(sprite: ISprite) {
    this.store.dispatch({
      type: StageActions.ADD_SPRITE,
      payload: sprite
    });
  }

  removeSprite(sprite: ISprite) {
    this.store.dispatch({
      type: StageActions.REMOVE_SPRITE,
      payload: {
        sprite_id: sprite.id
      }
    });
  }

  scaleSprite(sprite: ISprite, factor: number) {
    this.store.dispatch({
      type: StageActions.SCALE_SPRITE,
      payload: {
        sprite_id: sprite.id,
        deltaX: factor,
        deltaY: factor
      }
    });
  }

  moveSprite(sprite: ISprite, newposition: IVector) {
    this.store.dispatch({
      type: 'STAGE.SPRITE_MOVE',
      payload: {
        sprite_id: sprite.id,
        x: newposition.x,
        y: newposition.y
      }
    });
  }

  moveSpriteDelta(sprite: ISprite, delta: IVector) {
    this.store.dispatch({
      type: 'STAGE.SPRITE_MOVE',
      payload: {
        sprite_id: sprite.id,
        x: sprite.x + delta.x,
        y: sprite.y + delta.y
      }
    });
  }

  zoomIn() {
    this.store.dispatch({
      type: StageActions.ZOOM,
      payload: { zoom: 0.1 }
    });
  }

  zoomOut() {
    this.store.dispatch({
      type: StageActions.ZOOM,
      payload: { zoom: -0.1 }
    });
  }

}
