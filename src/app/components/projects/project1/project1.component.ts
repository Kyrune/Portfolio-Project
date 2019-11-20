import { Component, OnInit } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
  NgxGalleryImageSize
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
  Visual Studio Code, Git, and GitHub`;

  /** Gallery Options */
  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '90%',
        height: '400px',
        thumbnailsColumns: 4,
        previewCloseOnClick: true,
        previewSwipe: true,
        imageSize: NgxGalleryImageSize.Contain,
        imageAnimation: NgxGalleryAnimation.Zoom
      },
      /** Max-width 800 */
      {
        breakpoint: 800,
        width: '90%',
        height: '300px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      /** Max-width 400 */
      {
        breakpoint: 400,
        height: '200px'
      }
    ];

    /** Gallery Images */
    this.galleryImages = [
      {
        small: '../assets/images/11-lightmode.jpg',
        medium: '../assets/images/11-lightmode.jpg',
        big: '../assets/images/11-lightmode.jpg',
        description: 'Team Page with Light-mode Option'
      },
      {
        small: '../assets/images/10-darkmode.jpg',
        medium: '../assets/images/10-darkmode.jpg',
        big: '../assets/images/10-darkmode.jpg',
        description: 'Team Page with Dark-mode Option'
      },
      {
        small: '../assets/images/1-mainpage.jpg',
        medium: '../assets/images/1-mainpage.jpg',
        big: '../assets/images/1-mainpage.jpg',
        description: 'The Main Page'
      },
      {
        small: '../assets/images/2-mainpage.jpg',
        medium: '../assets/images/2-mainpage.jpg',
        big: '../assets/images/2-mainpage.jpg',
        description: 'The Main Page with Open Story Tab'
      },
      {
        small: '../assets/images/3-create story.jpg',
        medium: '../assets/images/3-create story.jpg',
        big: '../assets/images/3-create story.jpg',
        description: 'Create Your Story and Upload an Image'
      },
      {
        small: '../assets/images/4-edit story.jpg',
        medium: '../assets/images/4-edit story.jpg',
        big: '../assets/images/4-edit story.jpg',
        description: 'Edit Your Story and Image'
      },
      {
        small: '../assets/images/5-warning.jpg',
        medium: '../assets/images/5-warning.jpg',
        big: '../assets/images/5-warning.jpg',
        description: 'A Warning'
      },
      {
        small: '../assets/images/6-character traits.jpg',
        medium: '../assets/images/6-character traits.jpg',
        big: '../assets/images/6-character traits.jpg',
        description: 'List of Your Character Traits'
      },
      {
        small: '../assets/images/7-create character trait.jpg',
        medium: '../assets/images/7-create character trait.jpg',
        big: '../assets/images/7-create character trait.jpg',
        description: 'Add Traits to Your Character'
      },
      {
        small: '../assets/images/8-signup.jpg',
        medium: '../assets/images/8-signup.jpg',
        big: '../assets/images/8-signup.jpg',
        description: 'Signup Page'
      },
      {
        small: '../assets/images/9-login.jpg',
        medium: '../assets/images/9-login.jpg',
        big: '../assets/images/9-login.jpg',
        description: 'Login Page'
      }
    ];
  }
}
