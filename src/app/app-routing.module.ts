import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
// import { WorkSectionComponent } from './work-section/work-section.component';
// import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  { path: './', component: HeaderComponent },
  // { path: 'work-section', component: WorkSectionComponent },
  // { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
