import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post";

export enum ActionTypes {
  loadPosts = "[Posts] Load Posts",
  loadPostsSuccess = "[Posts] Load Posts Success",
  loadPostsFailed = "[Posts] Load Posts Failed"
}

export const loadPosts = createAction(ActionTypes.loadPosts);
export const loadPostsSuccess = createAction(ActionTypes.loadPostsSuccess, props<{posts: Post[]}>());
export const loadPostsFailed = createAction(ActionTypes.loadPostsFailed, props<{error: any}>());
