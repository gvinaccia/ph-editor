import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.sass']
})
export class AssetsComponent implements OnInit {
  isActive = false;

  constructor(public service: AssetsService) {}

  ngOnInit() {}

  onDragEnter(event: DragEvent) {
    this.isActive = true;
  }

  onDragLeave(event: DragEvent) {
    this.isActive = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();

    const files = event.dataTransfer.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.addEventListener('load',  e => this.service.registerImage(file.name, (e.target as any).result));
      reader.readAsDataURL(file);
    }

    this.isActive = false;
  }
}
