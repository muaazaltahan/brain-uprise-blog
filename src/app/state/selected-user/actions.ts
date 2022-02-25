import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user";

export enum ActionTypes {
  set = '[SelectedUser] Set'
}

export const set = createAction(ActionTypes.set, props<{user: User}>());
