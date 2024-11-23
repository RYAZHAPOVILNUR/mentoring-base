import { User } from '../interfaces/user-interfaces';

export interface UserState {
  users: User[];
}

export interface AppState {
  users: UserState;
}