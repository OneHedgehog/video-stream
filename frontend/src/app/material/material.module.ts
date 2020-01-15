import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatMenuModule, MatFormFieldModule} from "@angular/material";


const MODULES = [
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
