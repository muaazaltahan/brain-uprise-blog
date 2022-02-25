import { Action, ActionReducer, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { set } from './actions';

const initialState: User = new User();

export const _reducer = createReducer(
  initialState,
  on(set, (state, {user}) => user)
);

export function persistStateReducer(_reducer: ActionReducer<User>) {
  const localStorageKey = "_selectedUser";
  return (state: User, action: Action) => {
    if (state === undefined) {
      const persisted = localStorage.getItem(localStorageKey);
      return persisted ? JSON.parse(persisted) : _reducer(state,action);
    }
    const nextState = _reducer(state,action);
    localStorage.setItem(localStorageKey, JSON.stringify(nextState));
    return nextState;
  };
}

export function updateStateReducer(_reducer: ActionReducer<User>) {
  return (state: User, action: Action) => {
    return _reducer(state, action);
  };
}

export function reducer(state: User, action: Action){
  return updateStateReducer(persistStateReducer(_reducer))(state,action);
}

// selectors

export const getSelectedUser = createFeatureSelector<User>('selectedUser');
