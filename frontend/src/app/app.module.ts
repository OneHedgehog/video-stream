import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './core/containers/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";
import {MaterialModule} from "./material/material.module";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {metaReducers, ROOT_REDUCERS} from "./reducers";
import {RouterState, StoreRouterConnectingModule} from "@ngrx/router-store";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./auth/effects/auth.effects";


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // material
    MaterialModule,

    // angular
    SharedModule,
    CoreModule,
    AuthModule,

    // ngrx
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      }
    }),

    EffectsModule.forRoot([]),

    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
