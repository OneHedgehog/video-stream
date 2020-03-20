import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent} from "./containers/login-page/login-page.component";
import { LoginFormComponent } from './components/login-form/login-form.component';
import {MaterialModule} from "../material/material.module";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./effects/auth.effects";
import {StoreModule} from "@ngrx/store";
import * as fromAuth from "./reducers";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    EffectsModule.forFeature([AuthEffects]),
    // StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers),
  ]
})
export class AuthModule { }
