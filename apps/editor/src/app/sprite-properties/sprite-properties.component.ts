import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprite-properties',
  templateUrl: './sprite-properties.component.html',
  styleUrls: ['./sprite-properties.component.sass']
})
export class SpritePropertiesComponent implements OnInit {
  @Input() sprite: ISprite;

  get props() {
    if (!this.sprite) {
      return [];
    }

    return Object.keys(this.sprite)
      .filter(key => ['src'].indexOf(key) === -1)
      .reduce((acc, key) => {
        const rawVal = this.sprite[key];
        const val = typeof rawVal === 'object' ? `{x: ${rawVal.x.toFixed(2)}, y: ${rawVal.y.toFixed(2)}}` : rawVal;

        return [...acc, { key, val }];
      }, []);
  }

  ngOnInit() {}
}
