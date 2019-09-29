import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

//Todo move to config
export enum RoutesContainer {
  HOME ='',
  ABOUT = 'about'
}

//todo make page not found

const routes: Routes = [
  {
    path: RoutesContainer.HOME,
    component: HomeComponent
  },
  {
    path: RoutesContainer.ABOUT,
    component: AboutComponent
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
