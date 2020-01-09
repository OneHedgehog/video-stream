import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./containers/app/app.component";

import { RouterModule } from '@angular/router';
import {MaterialModule} from "../material/material.module";



@NgModule({
  declarations: [AppComponent],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule
  ],
  exports: [AppComponent]
})
export class CoreModule { }
