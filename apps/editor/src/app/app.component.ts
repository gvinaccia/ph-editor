import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  selectedSprite: ISprite;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      if (state.stage.activeSpriteId !== null) {
        this.selectedSprite = state.sprites.filter(sp => sp.id === state.stage.activeSpriteId)[0];
      }
    });
  }

  handleShortcuts(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape':
        this.store.dispatch({ type: 'STAGE.UNSELECT_ALL' });
        break;
      case '-':
        if (this.selectedSprite == null) {
          return;
        }
        this.store.dispatch({
          type: 'STAGE.SPRITE_SCALE',
          payload: {
            sprite_id: this.selectedSprite.id,
            deltaX: -0.05,
            deltaY: -0.05
          }
        });
        break;
      case '+':
        if (this.selectedSprite == null) {
          return;
        }
        this.store.dispatch({
          type: 'STAGE.SPRITE_SCALE',
          payload: {
            sprite_id: this.selectedSprite.id,
            deltaX: 0.05,
            deltaY: 0.05
          }
        });
        break;
      case 'Delete':
        this.store.dispatch({
          type: 'STAGE.REMOVE_SPRITE',
          payload: {
            sprite_id: this.selectedSprite.id
          }
        });
        break;
      default:
    }
  }
}
