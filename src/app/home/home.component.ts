import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  aboutMe = `I\'m a junior full stack developer and I enjoy creating stuff! I pride myself with the ability to sit in
  front of a screen for hours on end in blissful solitude. I love learning new things,
  and aim to learn from those more experienced than myself as I pursue opportunities to bring creativity
  and passion to my code, team, and work environment.`;

  constructor() {}

  ngOnInit() {}
}
