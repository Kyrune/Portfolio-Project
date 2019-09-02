import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component implements OnInit {
  ionic = `An Android application that allows users to turn pages and navigate
  to any chapter from the Table of Contents (TOC), as well as navigate back to
  the TOC from any page. This project includes an experimental sample from one of my stories.`;

  constructor() {}

  ngOnInit() {}
}