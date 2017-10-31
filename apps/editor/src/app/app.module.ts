import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { StageComponent } from './stage/stage.component';
import { SpriteComponent } from './sprite/sprite.component';
import { AssetsComponent } from './assets/assets.component';
import { AssetsService } from './assets.service';
import { AssetListItemComponent } from './asset-list-item/asset-list-item.component';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot()],
  declarations: [AppComponent, StageComponent, SpriteComponent, AssetsComponent, AssetListItemComponent],
  bootstrap: [AppComponent],
  providers: [AssetsService]
})
export class AppModule {}
