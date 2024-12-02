import {UserInterface} from "../../interfaces/user-interfaces";
import {createSelector} from "@ngrx/store";

interface UserState {
    users: UserInterface[]; // стейт редьюсера user.reducer.ts как мы писали раньше, в нем ключ users с массивом типа User (User[])
}

interface AppState {
    users: UserState; // стейт всего приложения, по идее должен лежать в другом файле, находится здесь для простоты.
}

// с помощью этого селектора мы получаем часть стейта, ответственного за юзеров.
export const selectUsersFeature: (state: AppState) => UserState = (state: AppState) => state.users;

// с помощью этого селектора получаем конкретный массив юзеров, который лежит по ключу users.
export const selectUser = createSelector(
    selectUsersFeature,
    (state: UserState) => state.users
);
