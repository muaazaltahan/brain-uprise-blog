import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as userActions from './actions';
import { User } from 'src/app/models/user';

export interface UserState extends EntityState<User> {
  error: any;
  selectedUserId: string | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState = adapter.getInitialState();

const testsReducer = createReducer(
  initialState,
  on(userActions.loadUsersSuccess, (state, {users}) => adapter.setAll(users, state)),
  on(userActions.loadUsersFailed, (state, {error}) => ({...state, error})),
  on(userActions.setSelectedUserId, (state, {id}) => ({...state, selectedUserId: id}))
);

export function reducer(state: UserState, action: Action) {
  return testsReducer(state, action);
}

// Selectors

const { selectAll, selectEntities } = adapter.getSelectors();

const feature = createFeatureSelector<UserState>('users');

export const getUsers = createSelector(feature,selectAll);

export const getSelectedUserId = createSelector(
  feature,
  (state)=>state.selectedUserId
)

export const selectUserEntities = createSelector(feature, selectEntities);

export const getUserById = (id: string) => createSelector(
  selectUserEntities,
  entities => entities[id]
);
