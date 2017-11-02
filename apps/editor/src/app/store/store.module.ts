import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActionReducer, MetaReducer, StoreModule as NGRXStoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {localStorageSync} from "ngrx-store-localstorage";
import {assetsReducer} from "./reducers/assets";
import {spritesReducer} from "./reducers/sprites";
import {stageReducer} from "./reducers/stage";

import 'rxjs/add/operator/filter';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['sprites','assets', 'stage'], rehydrate: true})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

const reducers = {
  assets: assetsReducer,
  sprites: spritesReducer,
  stage: stageReducer
};

@NgModule({
  imports: [
    CommonModule,
    NGRXStoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument(),
  ],
  declarations: []
})
export class StoreModule {}
