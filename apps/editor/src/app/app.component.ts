import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {StageActions} from "./store/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  selectedSprite: ISprite;
  stage: any;

  constructor(private store: Store<AppState>, public stageActions: StageActions) {}

  ngOnInit() {
    this.store.subscribe(state => {
      if (state.stage.activeSpriteId !== null) {
        this.selectedSprite = state.sprites.filter(sp => sp.id === state.stage.activeSpriteId)[0];
      }
      this.stage = { ...state.stage };
    });
  }

  handleShortcuts(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape':
        this.stageActions.unselectAll();
        break;
      case '-':
        if (this.selectedSprite == null) { return; }
        this.stageActions.scaleSprite(this.selectedSprite, -0.05);
        break;
      case '+':
        if (this.selectedSprite == null) { return; }
        this.stageActions.scaleSprite(this.selectedSprite, 0.05);
        break;
      case 'Delete':
        this.stageActions.removeSprite(this.selectedSprite);
        break;
      case 'ArrowLeft':
        if (this.selectedSprite == null) { return; }
        this.stageActions.moveSpriteDelta(this.selectedSprite, {x: -1, y: 0});
        break;
      case 'ArrowRight':
        if (this.selectedSprite == null) { return; }
        this.stageActions.moveSpriteDelta(this.selectedSprite, {x: 1, y: 0});
        break;
      case 'ArrowDown':
        if (this.selectedSprite == null) { return; }
        this.stageActions.moveSpriteDelta(this.selectedSprite, {x: 0, y: 1});
        break;
      case 'ArrowUp':
        if (this.selectedSprite == null) { return; }
        this.stageActions.moveSpriteDelta(this.selectedSprite, {x: 0, y: -1});
        break;
      default:
    }
  }
}
