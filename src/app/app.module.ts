import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { NavComponent } from './nav/nav.component';
import { SkillsService } from './skills/skills.service';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    NavComponent,
    AboutComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
