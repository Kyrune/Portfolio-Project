import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsPageComponent } from './components/projects/projects-page/projects-page.component';
import { Project1Component } from './components/projects/project1/project1.component';
import { Project2Component } from './components/projects/project2/project2.component';
import { Project3Component } from './components/projects/project3/project3.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/about',
    component: AboutComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'projects',
    component: ProjectsPageComponent
  },
  {
    path: 'projects/project1',
    component: Project1Component
  },
  {
    path: 'projects/project2',
    component: Project2Component
  },
  {
    path: 'projects/project3',
    component: Project3Component
  },
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
