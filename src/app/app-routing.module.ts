import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstSectionComponent } from './first-section/first-section.component';
import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';


const routes: Routes = [
  { path: '', component: FirstSectionComponent },
  { path: 'imprint', component: ImprintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
