import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { StageComponent } from './stage/stage.component';
import { SpriteComponent } from './sprite/sprite.component';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot()],
  declarations: [AppComponent, StageComponent, SpriteComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
