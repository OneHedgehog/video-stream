import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

const MODULES = [RouterModule];


@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: MODULES
})
export class SharedModule { }
