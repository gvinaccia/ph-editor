import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sprite-properties',
  templateUrl: './sprite-properties.component.html',
  styleUrls: ['./sprite-properties.component.sass']
})
export class SpritePropertiesComponent implements OnInit {

  @Input() sprite: ISprite;

  constructor() {}

  get props() {
    return [];
    /*
    if (! this.sprite) {
      return [];
    }
    const ret = [];

    Object.keys(this.sprite).forEach(key => {
      ret.push({key, val: this.sprite[key]});
    });

    return ret;
    */
  }

  ngOnInit() {}
}
