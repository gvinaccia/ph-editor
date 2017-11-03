import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit} from '@angular/core';
import {StageActions} from "../store/actions";

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpriteComponent implements OnInit {
  private inDrag = false;
  private startCoords = null;
  private coordsToDispatch = null;

  @Input() spriteDef: ISprite;

  @Input() isSelected = false;

  constructor(
    private el: ElementRef,
    private actions: StageActions
  ) {}

  ngOnInit() {
    this.moveToPoint(this.spriteDef.x, this.spriteDef.y);
  }

  get scaledWidth() {
    return this.spriteDef.width * this.spriteDef.scale.x;
  }

  get scaledHeight() {
    return this.spriteDef.height * this.spriteDef.scale.y;
  }

  startDragging(event: MouseEvent) {
    this.inDrag = true;
    this.startCoords = {
      x: event.clientX,
      y: event.clientY
    };
  }

  stopDragging() {
    this.inDrag = false;
    this.startCoords = null;
    if (this.coordsToDispatch != null) {
      this.actions.moveSprite(this.spriteDef, this.coordsToDispatch);
      this.coordsToDispatch = null;
    }
  }

  drag(event: MouseEvent) {
    if (!this.inDrag) {
      return;
    }

    const x = this.startCoords.x - event.clientX;
    const y = this.startCoords.y - event.clientY;

    this.startCoords.x = event.clientX;
    this.startCoords.y = event.clientY;

    const newTop = this.el.nativeElement.offsetTop - y;
    const newLeft = this.el.nativeElement.offsetLeft - x;

    this.moveToPoint(newLeft, newTop);
    this.coordsToDispatch = { x: newLeft, y: newTop };
  }

  private moveToPoint(x, y) {
    this.el.nativeElement.style.top = `${y}px`;
    this.el.nativeElement.style.left = `${x}px`;
  }

  markSelected() {
    this.actions.select(this.spriteDef);
  }
}
