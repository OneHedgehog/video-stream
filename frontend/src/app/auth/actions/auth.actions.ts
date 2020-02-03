import {createAction, props} from '@ngrx/store';
import {UserAuthCredentilas} from "../models/user";

export const login = createAction(
  '[Auth] Login',
  props<{ userAuthCredentials: UserAuthCredentilas }>()
);

export const logout = createAction('[Auth] Logout');

export const logoutConfirmation = createAction('[Auth] Logout Confirmation');

export const logoutConfirmationDismiss = createAction(
  '[Auth] Logout Confirmation Dismiss'
);
