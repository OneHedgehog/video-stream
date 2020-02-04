import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthActions} from "../../actions";
import * as fromAuth from '../../reducers/auth.reducer';
import {UserAuthCredentilas} from "../../models/user";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private store: Store<fromAuth.State>
  ) { }

  ngOnInit() {
  }

  onAuthFormSubmitted(userAuthCredentials: UserAuthCredentilas) {
    this.store.dispatch(AuthActions.login({ userAuthCredentials }));
  }

}
