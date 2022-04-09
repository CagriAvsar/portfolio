import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { FormsModule } from "@angular/forms";
import {MatSidenavModule} from '@angular/material/sidenav';

import { AngularScrollAnimationsModule } from "angular-scroll-animations";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstSectionComponent } from './first-section/first-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    FormSectionComponent,
    FooterComponent,
    SkillsComponent,
    FirstSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularScrollAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
