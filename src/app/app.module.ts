import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { NavComponent } from './nav/nav.component';
import { SkillsService } from './skills/skills.service';
import { AboutComponent } from './about/about.component';
import { Project1Component } from './projects/project1/project1.component';
import { ProjectsPageComponent } from './projects/projects-page/projects-page.component';
import { Project2Component } from './projects/project2/project2.component';
import { Project3Component } from './projects/project3/project3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    NavComponent,
    AboutComponent,
    ProjectsPageComponent,
    Project1Component,
    Project2Component,
    Project3Component
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
