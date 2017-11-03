import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-layer-tree',
  templateUrl: './layer-tree.component.html',
  styleUrls: ['./layer-tree.component.sass']
})
export class LayerTreeComponent implements OnInit {

  sprites$: Observable<ISprite[]>;

  constructor(private store: Store<AppState>) {
    this.sprites$ = this.store.select('sprites');
  }

  ngOnInit() {}

}
