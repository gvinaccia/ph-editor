import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-asset-list-item',
  templateUrl: './asset-list-item.component.html',
  styleUrls: ['./asset-list-item.component.sass']
})
export class AssetListItemComponent implements OnInit {

  @Input() item;

  constructor() {}

  ngOnInit() {}

  startDrag(event: DragEvent) {
    event.dataTransfer.setData('application/json', JSON.stringify(this.item));
  }
}
