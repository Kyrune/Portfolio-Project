import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  mindstorm = `Group project MindStorm is a MEAN stack website geared toward writers
  for the purpose of providing a place to brainstorm ideas for stories
  and characters, while displaying stories for constructive criticism.`;

  constructor() {}

  ngOnInit() {}
}
