import { Injectable } from '@angular/core';

import { Skills } from './skills.model';

/**
 * Skills service for Skills component.
 * See {@link Skills} for model.
 */
@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  /** List of skills */
  skills: Skills[] = [
    { id: 0, name: 'HTML' },
    { id: 1, name: 'CSS' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Flexbox' },
    { id: 4, name: 'Angular' },
    { id: 5, name: 'TypeScript' },
    { id: 6, name: 'Express' },
    { id: 7, name: 'Node.js' },
    { id: 8, name: 'MongoDB' },
    { id: 9, name: 'mLab' },
    { id: 10, name: 'mLab' },
    { id: 11, name: 'NPM' },
    { id: 12, name: 'SQL' },
    { id: 13, name: 'NoSQL' },
    { id: 14, name: 'Ajax' },
    { id: 15, name: 'jQuery' },
    { id: 16, name: 'Boostrap' },
    { id: 17, name: 'JSON' },
    { id: 18, name: 'Es6' },
    { id: 19, name: 'Passport' },
    { id: 20, name: 'VS Code' },
    { id: 21, name: 'GitHub' },
    { id: 22, name: 'Git' },
    { id: 23, name: 'Ionic' },
    { id: 24, name: 'Cordova' },
    { id: 25, name: 'React' },
    { id: 26, name: 'PHP' }
  ];
}
