import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.sass']
})
export class StageComponent implements OnInit {

  sprites$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.sprites$ = store.select('sprites');
  }

  ngOnInit() {}

  onDrop(event: DragEvent) {
    const obj = JSON.parse(event.dataTransfer.getData('application/json'));

    const sprite = {
      id: Math.floor(Math.random() * 1000),
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
