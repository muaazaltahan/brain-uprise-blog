import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as userActions from './actions';
import { User } from 'src/app/models/user';

export interface State extends EntityState<User> {
  error: any;
  selectId: (a: User) => string;
  sortComparer: (a: User, b: User) => number;
}

export function selectItemId(a: User): string {
  return a.id.toString();
}

export function sortByName(a: User, b: User): number {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState = adapter.getInitialState({
  selectId: selectItemId,
  sortComparer: sortByName,
  error: ''
});

const testsReducer = createReducer(
  initialState,
  on(userActions.loadUsersSuccess, (state, {users}) => adapter.setAll(users, state)),
  on(userActions.loadUsersFailed, (state, {error}) => ({...state, error}))
);

export function reducer(state: State, action: Action) {
  return testsReducer(state, action);
}

// Selectors

const { selectAll, selectEntities } = adapter.getSelectors();

const feature = createFeatureSelector<State>('Users');

export const getUsers = createSelector(feature,selectAll);

export const getUserById = (id: string) => createSelector(
  selectEntities,
  entities => entities[id]
);
