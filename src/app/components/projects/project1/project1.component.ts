import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {
  mindstorm = `Group project MindStorm is a MEAN stack website geared toward writers
  for the purpose of providing a place to brainstorm ideas for stories
  and characters, while displaying stories for constructive criticism.`;

  constructor() {}

  ngOnInit() {}
}
