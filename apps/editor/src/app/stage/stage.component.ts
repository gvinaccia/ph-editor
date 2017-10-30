import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.sass']
})
export class StageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleMouseOver(event) {
    console.log(event);
  }
}
