import { Injectable } from '@angular/core';

@Injectable()
export class AssetsService {
  images = [];

  constructor() {}

  registerImage(name: string, data: string) {
    const img = new Image();

    img.onload = e => {
      this.images.push({
        name,
        data,
        width: img.width,
        height: img.height,
      });
    };

    img.src = data;
  }
}
