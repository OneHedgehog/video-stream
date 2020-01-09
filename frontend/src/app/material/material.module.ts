import { NgModule } from '@angular/core';
import {MatButtonModule, MatMenuModule} from "@angular/material";
import {AppRoutingModule} from "../app-routing.module";


const MODULES = [
  MatMenuModule,
  MatButtonModule,
  AppRoutingModule,
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
