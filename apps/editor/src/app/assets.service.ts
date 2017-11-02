import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AssetsService {
  images$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.images$ = store.select('assets', 'images');
  }

  registerImage(name: string, data: string) {
    const img = new Image();

    img.onload = e => {
      const image = {
        name,
        data,
        width: img.width,
        height: img.height
      };

      this.store.dispatch({
        type: 'ASSETS.ADD_IMAGE',
        payload: image
      });
    };

    img.src = data;
  }
}
