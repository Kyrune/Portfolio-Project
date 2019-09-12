import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { Project1Component } from './projects/project1/project1.component';
import { AboutComponent } from './about/about.component';

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
    component: Project1Component
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
