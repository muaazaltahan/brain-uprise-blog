import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user";

export enum ActionTypes {
  loadUsers = "[Users] Load",
  loadUsersSuccess = "[Users] Load Success",
  loadUsersFailed = "[Users] Load Failed",
  setSelectedUserId = "[Users] Set Selected Id"
}

export const loadUsers = createAction(ActionTypes.loadUsers);
export const loadUsersSuccess = createAction(ActionTypes.loadUsersSuccess, props<{users: User[]}>());
export const loadUsersFailed = createAction(ActionTypes.loadUsersFailed, props<{error: any}>());
export const setSelectedUserId = createAction(ActionTypes.setSelectedUserId, props<{id: number}>());
