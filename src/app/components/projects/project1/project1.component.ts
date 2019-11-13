import { Component, OnInit } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';

/** 1st project component */
@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  /** Project description */
  mindstorm = `Group project MindStorm is a MEAN stack website geared toward writers
  for the purpose of providing a place to brainstorm ideas for stories
  and characters, while displaying stories for constructive criticism.`;

  /** List of tech used in Project MindStorm */
  tech = `HTML5, CSS, Angular, TypeScript (TS), Angular Materials, MongoDB,
  Mongoose, JWT, Multer, mLab, Express, Node, NPM, REST, Compodoc, AWS,
  Visual Studio Code, Git and GitHub`;

  constructor() {}

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '90%',
        height: '400px',
        thumbnailsColumns: 4,
        previewCloseOnClick: true,
        imageAnimation: NgxGalleryAnimation.Zoom
      },
      /** Max-width 800 */
      {
        breakpoint: 800,
        width: '90%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      /** Max-width 400 */
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '../assets/images/1-mainpage.jpg',
        medium: '../assets/images/1-mainpage.jpg',
        big: '../assets/images/1-mainpage.jpg'
      },
      {
        small: '../assets/images/2-mainpage.jpg',
        medium: '../assets/images/2-mainpage.jpg',
        big: '../assets/images/2-mainpage.jpg'
      }
    ];
  }
}
