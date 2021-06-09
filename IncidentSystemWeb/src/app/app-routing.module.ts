import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenIncidentPageComponent } from './open-incident-page/open-incident-page.component';

const routes: Routes = [{
  path:"",
  component: OpenIncidentPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
