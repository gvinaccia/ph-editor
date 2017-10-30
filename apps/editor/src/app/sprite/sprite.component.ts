import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.sass']
})
export class SpriteComponent implements OnInit {

  private inDrag = false;
  private startCoords = null;

  constructor(private el: ElementRef) {
    console.log(el);
  }

  ngOnInit() {}

  startDragging(event: MouseEvent) {
    this.inDrag = true;
    this.startCoords = {
      x: event.clientX,
      y: event.clientY,
    };

    console.log("start", this.startCoords);
  }

  stopDragging() {
    this.inDrag = false;
    this.startCoords = null;

    console.log("stop");
  }

  drag(event: MouseEvent) {

    if(!this.inDrag) {
        return;
    }

    const x = this.startCoords.x - event.clientX;
    const y = this.startCoords.y - event.clientY;

    this.startCoords.x = event.clientX;
    this.startCoords.y = event.clientY;

    const newTop = this.el.nativeElement.offsetTop - y;
    const newLeft = this.el.nativeElement.offsetLeft - x;

    this.el.nativeElement.style.top = `${newTop}px`;
    this.el.nativeElement.style.left = `${newLeft}px`;
  }
}
