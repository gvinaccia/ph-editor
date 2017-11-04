import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {StageActions} from "../store/actions";

@Component({
  selector: 'app-layer-tree',
  templateUrl: './layer-tree.component.html',
  styleUrls: ['./layer-tree.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayerTreeComponent implements OnInit {

  sprites$: Observable<ISprite[]>;
  activeSpriteId$: Observable<any>;

  constructor(private store: Store<AppState>, public actions: StageActions) {
    this.sprites$ = this.store
      .select('sprites')
      .map((sprites: ISprite[]) => [...sprites].reverse());
    this.activeSpriteId$ = this.store.select('stage', 'activeSpriteId');
  }

  ngOnInit() {}
}
