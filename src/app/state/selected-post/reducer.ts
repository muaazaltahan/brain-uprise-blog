import { Action, ActionReducer, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { set } from './actions';

const initialState: Post = new Post();

export const _reducer = createReducer(
  initialState,
  on(set, (state, {post}) => post)
);

export function persistStateReducer(_reducer: ActionReducer<Post>) {
  const localStorageKey = "_selectedPost";
  return (state: Post, action: Action) => {
    if (state === undefined) {
      const persisted = localStorage.getItem(localStorageKey);
      return persisted ? JSON.parse(persisted) : _reducer(state,action);
    }
    const nextState = _reducer(state,action);
    localStorage.setItem(localStorageKey, JSON.stringify(nextState));
    return nextState;
  };
}

export function updateStateReducer(_reducer: ActionReducer<Post>) {
  return (state: Post, action: Action) => {
    return _reducer(state, action);
  };
}

export function reducer(state: Post, action: Action){
  return updateStateReducer(persistStateReducer(_reducer))(state,action);
}

// selectors

export const getSelectedPost = createFeatureSelector<Post>('selectedPost');
