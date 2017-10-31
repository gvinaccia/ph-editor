import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.sass']
})
export class StageComponent implements OnInit {
  sprites = [];

  constructor() {}

  ngOnInit() {}

  onDrop(event: DragEvent) {
    const obj = JSON.parse(event.dataTransfer.getData('application/json'));

    this.sprites.push({
      width: obj.width,
      height: obj.height,
      x: 0,
      y: 0,
      sprite_id: obj.name,
      src: obj.data,
      scale: {
        x: 1,
        y: 1
      }
    });
  }
}
