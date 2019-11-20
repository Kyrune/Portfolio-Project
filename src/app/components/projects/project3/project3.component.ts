import { Component } from '@angular/core';

/** 3rd project component */
@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.css']
})
export class Project3Component {
  /** Portfolio project description */
  portfolio = `This is my personal Portfolio website, which you are currently perusing.
  It was built from scratch using the Angular framework, and you are welcome to look
  at the code used in its construction (GitHub link below).
  I will continue to work on it as my coding skills grow,
  and plan to build it in different frameworks/libraries.`;

  /** Cyborg logo description of who made it pretty */
  royal = `My cyborg logo, derived from the team logo I made for Project MindStorm,
  was made even cooler by Cameron Schilling, the lead Graphic Designer at
  Royal Branding. Check out his website below!`;

  /** List of tech used in the portfolio project */
  tech = `HTML, CSS, Flexbox, Angular, TypeScript (TS), Node, NPM, Visual Studio Code, Photoshop, Git, and GitHub`;
}
