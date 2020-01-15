import { NgModule } from '@angular/core';
import {AppComponent} from "./containers/app/app.component";

import {MaterialModule} from "../material/material.module";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    MaterialModule,
    RouterModule.forChild([])
  ],
  exports: [AppComponent]
})
export class CoreModule { }
