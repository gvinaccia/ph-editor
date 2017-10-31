import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule as NGRXStoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {assetsReducer} from "./reducers/assets";
import {spritesReducer} from "./reducers/sprites";

import 'rxjs/add/operator/filter';

@NgModule({
  imports: [
    CommonModule,
    NGRXStoreModule.forRoot({assets: assetsReducer, sprites: spritesReducer}),
    StoreDevtoolsModule.instrument(),
  ],
  declarations: []
})
export class StoreModule {}
