import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {catchError, exhaustMap, map, tap} from "rxjs/operators";
import {AuthActions, AuthApiActions} from "../actions";
import {UserAuthCredentilas} from "../models/user";
import {of} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthEffects {
  public login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      map(action => action.userAuthCredentials),
      exhaustMap((userAuthCredentilas: UserAuthCredentilas) => {
        alert('df');
        return this.authService.login(userAuthCredentilas).pipe(
          map(user => AuthApiActions.loginSuccess({user})),
          catchError(error => of(AuthApiActions.loginFailure({ error })))
        )
      })
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthApiActions.loginSuccess),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService
  ) {}
}
