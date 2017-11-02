import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  selectedSprite: ISprite;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      if (state.stage.activeSpriteId !== null) {
        this.selectedSprite = state.sprites
          .filter(sp => sp.id === state.stage.activeSpriteId)[0];
      }
    });
  }

  handleShortcuts(event: KeyboardEvent) {
    switch (event.key) {
      case "Escape":
        this.store.dispatch({type: 'STAGE.UNSELECT_ALL'});
        break;
      default:
    }
  }
}
