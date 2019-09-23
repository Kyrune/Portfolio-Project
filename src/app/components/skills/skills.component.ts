import { Component } from '@angular/core';

import { Skills } from '../../shared/skills.model';
import { SkillsService } from '../../shared/skills.service';

/** Skills component */
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  /** Skills array in Skills Service */
  skills: Skills[];

  /** Constructor connects to {@link SkillsService} */
  constructor(private skillsService: SkillsService) {
    this.skills = skillsService.skills;
  }
}
