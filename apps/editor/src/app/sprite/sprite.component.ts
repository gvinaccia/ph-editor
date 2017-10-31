import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.sass']
})
export class SpriteComponent implements OnInit {
  private inDrag = false;
  private startCoords = null;

  @Input() spriteDef;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.moveToPoint(this.spriteDef.x, this.spriteDef.y);
  }

  get scaledWidth() {
    return this.spriteDef.width * this.spriteDef.scale.x;
  }

  get scaledHeight() {
    return this.spriteDef.width * this.spriteDef.scale.x;
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
  }

  private moveToPoint(x, y) {
    this.el.nativeElement.style.top = `${y}px`;
    this.el.nativeElement.style.left = `${x}px`;
  }

  handleKeys(event: KeyboardEvent) {
    if (event.key === '-') {
      this.spriteDef.scale.x -= .1;
      this.spriteDef.scale.y -= .1;
    }
    if (event.key === '+') {
      this.spriteDef.scale.x += .1;
      this.spriteDef.scale.y += .1;
    }

    console.log(event);
  }
}
