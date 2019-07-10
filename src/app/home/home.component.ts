import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  city = 'Where I live: Cashton, Wisconsin';
  aboutMe = `I\'m a junior full stack developer and I enjoy creating stuff! I pride myself on a sense of humor
  and the ability to sit in front of a screen for hours on end in blissful solitude. I love learning new things,
  honing my coding skills, and designing websites for optimal user experience, creativity, and efficiency.`;

  constructor() { }

  ngOnInit() {
  }

}
