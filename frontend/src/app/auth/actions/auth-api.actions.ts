import { props, createAction } from '@ngrx/store';
import {User, UserAuthCredentilas} from "../models/user";


export const loginSuccess = createAction(
  '[Auth/API] Login Success',
  // todo add user typing
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth/API] Login Failure',
  // TODO add err hierachy
  props<{ error: any }>()
);

export const loginRedirect = createAction('[Auth/API] Login Redirect');
