import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

//Todo move to config
export enum RoutesContainer {
  LOGIN = 'login'
}

//todo make page not found

const routes: Routes = [
  {
    path: RoutesContainer.LOGIN,
    component: HomeComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
