import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/project1/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { NavComponent } from './nav/nav.component';
import { SkillsService } from './skills/skills.service';
import { AboutComponent } from './about/about.component';
import { Project2Component } from './projects/project2/project2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    NavComponent,
    AboutComponent,
    Project2Component
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
