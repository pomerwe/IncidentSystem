import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { OpenIncidentPageComponent } from './open-incident-page/open-incident-page.component';

const routes: Routes = [{
  path:"", redirectTo:"login", pathMatch: "full"
},{
  path:"incidents",
  component: OpenIncidentPageComponent
},{
  path:"login",
  component:LoginpageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
