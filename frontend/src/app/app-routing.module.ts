import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./auth/containers/login-page/login-page.component";

//Todo move to config
export enum RoutesContainer {
  LOGIN = 'login'
}

//todo make page not found

const routes: Routes = [
  {
    path: RoutesContainer.LOGIN,
    component: LoginPageComponent
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
