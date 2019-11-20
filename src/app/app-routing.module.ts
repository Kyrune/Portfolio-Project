import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsPageComponent } from './components/projects/projects-page/projects-page.component';
import { Project1Component } from './components/projects/project1/project1.component';
import { Project2Component } from './components/projects/project2/project2.component';
import { Project3Component } from './components/projects/project3/project3.component';

/** Component routes */
const routes: Routes = [
  /** Home page */
  {
    path: 'home',
    component: HomeComponent
  },
  /** About page */
  {
    path: 'home/about',
    component: AboutComponent
  },
  /** Skills page */
  {
    path: 'skills',
    component: SkillsComponent
  },
  /** Main Projects page */
  {
    path: 'projects',
    component: ProjectsPageComponent
  },
  /** 1st project page */
  {
    path: 'projects/project1',
    component: Project1Component
  },
  /** 2nd project page */
  {
    path: 'projects/project2',
    component: Project2Component
  },
  /** 3rd project page */
  {
    path: 'projects/project3',
    component: Project3Component
  },
  /** Default page set to Home */
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
