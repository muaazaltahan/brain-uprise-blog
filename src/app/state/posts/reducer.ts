import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as postActions from './actions';
import { Post } from 'src/app/models/post';

export interface State extends EntityState<Post> {
  error: any;
  selectId: (a: Post) => string;
  sortComparer: (a: Post, b: Post) => number;
}

export function selectItemId(a: Post): string {
  return a.id.toString();
}

export function sortByName(a: Post, b: Post): number {
  return a.title.localeCompare(b.title);
}

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const initialState = adapter.getInitialState({
  selectId: selectItemId,
  sortComparer: sortByName,
  error: ''
});

const testsReducer = createReducer(
  initialState,
  on(postActions.loadPostsSuccess, (state, {posts}) => adapter.setAll(posts, state)),
  on(postActions.loadPostsFailed, (state, {error}) => ({...state, error}))
);

export function reducer(state: State, action: Action) {
  return testsReducer(state, action);
}

// Selectors

const { selectAll } = adapter.getSelectors();

const feature = createFeatureSelector<State>('posts');

export const getPosts = createSelector(feature,selectAll);
