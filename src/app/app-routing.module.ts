import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'', redirectTo:'home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
