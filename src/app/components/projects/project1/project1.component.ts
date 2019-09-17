import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {
  /* Project description */
  mindstorm = `Group project MindStorm is a MEAN stack website geared toward writers
  for the purpose of providing a place to brainstorm ideas for stories
  and characters, while displaying stories for constructive criticism.`;

  /* List of tech used in Project */
  tech = `HTML5, CSS, Angular, TypeScript (TS), Angular Materials, MongoDB,
  Mongoose, JWT, Multer, mLab, Express, Node, NPM, REST, Compodoc, AWS,
  Visual Studio Code, Git and GitHub`;

  constructor() {}

  ngOnInit() {}
}
