import { Component, OnInit } from '@angular/core';

import { Skills } from '../../shared/skills.model';
import { SkillsService } from '../../shared/skills.service';

/** Skills component */
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  /** Skills array in Skills Service */
  skills: Skills[];

  constructor(private skillsService: SkillsService) {
    this.skills = skillsService.skills;
  }

  ngOnInit() {}
}
