import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ActionTypes } from "./actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@NgModule()
export class PostsEffects {

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.load),
    mergeMap(() => this.http.get('http://localhost:3000/posts').pipe(
      map(posts => ({type: ActionTypes.loadSuccess, posts})),
      catchError(error => of({type: ActionTypes.loadFailed, error}))
    ))
  ));

  constructor(
    private http: HttpClient,
    private actions$: Actions){}

}
