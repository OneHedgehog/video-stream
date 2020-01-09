import { Component } from '@angular/core';

import  { RoutesContainer } from "../../../app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public readonly loginRoute: string = `/${RoutesContainer.LOGIN}`;
}
