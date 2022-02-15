import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post";

export enum ActionTypes {
  load = "[Posts] Load",
  loadSuccess = "[Posts] Load Success",
  loadFailed = "[Posts] Load Failed"
}

export const load = createAction(ActionTypes.load);
export const loadSuccess = createAction(ActionTypes.loadSuccess, props<{posts: Post[]}>());
export const loadFailed = createAction(ActionTypes.loadFailed, props<{error: any}>());
