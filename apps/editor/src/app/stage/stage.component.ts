import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.sass']
})
export class StageComponent implements OnInit {
  sprites$: Observable<ISprite[]>;

  selectedSpriteId$: Observable<number | string>;

  constructor(private store: Store<AppState>) {
    this.sprites$ = store.select('sprites');
    this.selectedSpriteId$ = store.select('stage', 'activeSpriteId');
  }

  ngOnInit() {}

  onDrop(event: DragEvent) {
    const obj = JSON.parse(event.dataTransfer.getData('application/json'));

    const arr = new Uint32Array(1);

    window.crypto.getRandomValues(arr);

    const sprite: ISprite = {
      id: arr[0],
      width: obj.width,
      height: obj.height,
      x: 0,
      y: 0,
      sprite_id: obj.name,
      src: obj.data,
      scale: {
        x: 1,
        y: 1
      }
    };

    this.store.dispatch({
      type: 'STAGE.ADD_SPRITE',
      payload: sprite
    });
  }
}
