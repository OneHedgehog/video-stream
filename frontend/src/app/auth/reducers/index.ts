import * as fromAuth from '../reducers/auth.reducer';
import * as fromRoot from '../../reducers';
import {Action, combineReducers, createFeatureSelector, createSelector} from "@ngrx/store";

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromAuth.statusFeatureKey]: fromAuth.State;
}


export interface State extends fromRoot.State {
  [authFeatureKey]: AuthState;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromAuth.statusFeatureKey]: fromAuth.reducer
  })
}

export const selectAuthState = createFeatureSelector<State, AuthState>(
  authFeatureKey
);

export const selectAuthStatusState = createSelector(
  selectAuthState,
  state => state.status
);


export const selectUser = createSelector(
  selectAuthStatusState,
  fromAuth.getUser
);

export const selectLoggedIn = createSelector(selectUser, user => !!user);

// export const selectLoginState = createSelector(
// //   selectAuthState,
// //   state => state.
// // );

