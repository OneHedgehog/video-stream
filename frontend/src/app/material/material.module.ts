import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule} from "@angular/material";



const MODULES = [
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
