import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post";

export enum ActionTypes {
  loadPosts = "[Posts] Load",
  loadPostsSuccess = "[Posts] Load Success",
  loadPostsFailed = "[Posts] Load Failed",
  setSelectedPostId = "[Posts] Set Selected Id"
}

export const loadPosts = createAction(ActionTypes.loadPosts);
export const loadPostsSuccess = createAction(ActionTypes.loadPostsSuccess, props<{posts: Post[]}>());
export const loadPostsFailed = createAction(ActionTypes.loadPostsFailed, props<{error: any}>());
export const setSelectedPostId = createAction(ActionTypes.setSelectedPostId, props<{id: string}>());
