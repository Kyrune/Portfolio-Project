import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NavComponent } from './components/nav/nav.component';
import { SkillsService } from './shared/skills.service';
import { AboutComponent } from './components/about/about.component';
import { Project1Component } from './components/projects/project1/project1.component';
import { ProjectsPageComponent } from './components/projects/projects-page/projects-page.component';
import { Project2Component } from './components/projects/project2/project2.component';
import { Project3Component } from './components/projects/project3/project3.component';
import { FooterComponent } from './components/footer/footer.component';

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
    Project3Component,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgxGalleryModule],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
