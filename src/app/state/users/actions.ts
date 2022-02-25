import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user";

export enum ActionTypes {
  loadUsers = "[Users] Load Users",
  loadUsersSuccess = "[Users] Load Users Success",
  loadUsersFailed = "[Users] Load Users Failed"
}

export const loadUsers = createAction(ActionTypes.loadUsers);
export const loadUsersSuccess = createAction(ActionTypes.loadUsersSuccess, props<{users: User[]}>());
export const loadUsersFailed = createAction(ActionTypes.loadUsersFailed, props<{error: any}>());
