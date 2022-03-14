import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { FormsModule } from "@angular/forms";

import { AngularScrollAnimationsModule } from "angular-scroll-animations";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkSectionComponent,
    ProjectsComponent,
    AboutComponent,
    FormSectionComponent,
    FooterComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularScrollAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
