import { Component } from '@angular/core';

/** Home component */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Author's description */
  aboutMe = `I\'m a junior web developer and I enjoy creating stuff!
  My interests lie in frontend development and web design, where I can combine
  my previous skills in art and writng with coding.
  I pride myself on the ability to sit in front of a screen for hours on end in blissful solitude,
  as attested to by the blinding white bloom that is my face.
  I love learning new things, and aim to learn from those more experienced than myself as I pursue
  opportunities to bring creativity and passion to my code, team, and work environment.`;
}
