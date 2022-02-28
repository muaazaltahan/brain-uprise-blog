import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as postActions from './actions';
import { Post } from 'src/app/models/post';

export interface PostState extends EntityState<Post> {
  error: any;
  selectedPostId: string | null;
}

export function selectUserId(a: Post): string {
  return a.id;
}

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>({
  selectId: selectUserId,
  sortComparer: false
});

export const initialState = adapter.getInitialState({error: null,selectedPostId: null});

const testsReducer = createReducer(
  initialState,
  on(postActions.loadPostsSuccess, (state, {posts}) => adapter.setAll(posts, state)),
  on(postActions.loadPostsFailed, (state, {error}) => ({...state, error})),
  on(postActions.setSelectedPostId, (state, {id}) => ({...state, selectedPostId: id}))
);

export function reducer(state: PostState, action: Action) {
  return testsReducer(state, action);
}

// Selectors

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

const feature = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(feature,selectAll);

export const getSelectedPostId = (state: PostState) => state.selectedPostId;

export const selectPostEntities = createSelector(feature, selectEntities);

export const selectPostId = createSelector(
  feature,
  getSelectedPostId
);

export const selectPostById = (id: string) => createSelector(
  selectPostEntities,
  entities => entities[id]
);
