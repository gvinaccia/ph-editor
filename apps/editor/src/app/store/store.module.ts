import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActionReducer, MetaReducer, StoreModule as NGRXStoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {localStorageSync} from "ngrx-store-localstorage";
import {assetsReducer} from "./reducers/assets";
import {spritesReducer} from "./reducers/sprites";

import 'rxjs/add/operator/filter';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['sprites','assets'], rehydrate: true})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  imports: [
    CommonModule,
    NGRXStoreModule.forRoot({assets: assetsReducer, sprites: spritesReducer}, {metaReducers}),
    StoreDevtoolsModule.instrument(),
  ],
  declarations: []
})
export class StoreModule {}
