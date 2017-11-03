import {ChangeDetectionStrategy, Component, ElementRef, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {StageActions} from "../store/actions";

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StageComponent implements OnInit {
  sprites$: Observable<ISprite[]>;

  selectedSpriteId$: Observable<number | string>;

  width$: Observable<number>;
  height$: Observable<number>;
  zoom$: Observable<number>;

  constructor(
    store: Store<AppState>,
    private actions: StageActions,
    private el: ElementRef
  ) {
    this.sprites$ = store.select('sprites');
    this.selectedSpriteId$ = store.select('stage', 'activeSpriteId');
    this.width$ = store.select('stage', 'width');
    this.height$ = store.select('stage', 'height');
    this.zoom$ = store.select('stage', 'zoom');
  }

  ngOnInit() { }

  handleEmptyClick(event: MouseEvent) {
    if (event.target === this.el.nativeElement.firstChild) {
      this.actions.unselectAll();
    }
  }

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
      },
      anchor: {
        x: 0,
        y: 0
      }
    };

    this.actions.addSprite(sprite);
  }
}
