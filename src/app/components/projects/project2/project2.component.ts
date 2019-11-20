import { Component } from '@angular/core';

/** 2nd project component */
@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component {
  /** Page-Turner project description */
  ionic = `An Android application which allows users to turn pages and navigate
  to any chapter from the Table of Contents (TOC), as well as navigate back to
  the TOC from any page. This project includes an experimental sample from one of my planned stories.
  The front page image was created by me, using Photoshop and a Wacom tablet.`;

  /** List of tech used in the Page-Turner project */
  tech = `HTML, CSS, Angular, TypeScript (TS), Cordova, Ionic, Node, Visual Studio Code, Photoshop, and GitHub`;
}
