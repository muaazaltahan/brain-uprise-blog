import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post";

export enum ActionTypes {
  set = '[SelectedPost] Set'
}

export const set = createAction(ActionTypes.set, props<{post: Post}>());
