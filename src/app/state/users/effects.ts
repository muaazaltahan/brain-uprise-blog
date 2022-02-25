import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ActionTypes } from "./actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@NgModule()
export class UsersEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.loadUsers),
    mergeMap(() => this.http.get('http://localhost:3000/users').pipe(
      map(users => ({type: ActionTypes.loadUsersSuccess, users})),
      catchError(error => of({type: ActionTypes.loadUsersFailed, error}))
    ))
  ));

  constructor(
    private http: HttpClient,
    private actions$: Actions){}

}
