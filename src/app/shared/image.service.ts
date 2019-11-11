import { Injectable } from '@angular/core';

const Imagesdetails = [
  { id: 1, name: 'The Main Page', url: 'assets/images/1-mainpage' }
];

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageGallery = [];

  constructor() {}

  getImages() {
    return (this.imageGallery = Imagesdetails.slice(0));
  }

  getImage(id: number) {
    return Imagesdetails.slice(0).find(Images => Images.id == id);
  }
}
