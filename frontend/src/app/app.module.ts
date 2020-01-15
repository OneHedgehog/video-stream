import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './core/containers/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";
import {MaterialModule} from "./material/material.module";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    //material
    MaterialModule,

    //angular
    SharedModule,
    CoreModule,
    AuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
