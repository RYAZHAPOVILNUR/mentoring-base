import { User } from "./user-interface";

export interface UserState {
  users: User [];
}

export interface AppState {
  users: UserState;
}