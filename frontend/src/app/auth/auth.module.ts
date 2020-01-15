import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent} from "./containers/login-page/login-page.component";
import { LoginFormComponent } from './components/login-form/login-form.component';
import {MaterialModule} from "../material/material.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [
    SharedModule,
    MaterialModule,
    CommonModule
  ]
})
export class AuthModule { }
