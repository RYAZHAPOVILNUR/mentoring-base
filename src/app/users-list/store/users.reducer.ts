import {createReducer, on} from "@ngrx/store";
import {UsersActions} from "./users.actions";
import {UserInterface} from "../../interfaces/user-interfaces";

// initialState это начальное значение которое будет лежать в, состояний NGRX. У нас это объект с ключом users, где будет лежать пустой массив
const initialState: { users: UserInterface[] } = {
    users: [],
}

// Создаем редьюсер с помощью createReducer первым аргументом кладем initialState а дальше через запятую вызовы функции on
export const userReducer = createReducer(
    initialState,
    // на .set мы просто кладем всех юзеров из action payload в users payload - данные, которые мы передали в экшен
    on(UsersActions.loadSuccess, (state: { users: UserInterface[] }, payload) => ({
        ...state,
        users: payload.users,
    })),


    // функция edit, обновляем с помощью метода .map если поле id соответствует, то подменяем юзера на отредактированного
    on(UsersActions.edit, (state: { users: UserInterface[] }, payload) => ({
        ...state,
        users: state.users.map((user: UserInterface) => {
            return user.id === payload.user.id ? payload.user : user;
            // if (user.id === payload.user.id) {
            //     return payload.user;
            // } else {
            //     return user;
            // }
        }),
    })),


    // функция create, создаем нового юзера с помощью деструктуризации массива
    on(UsersActions.create, (state: { users: UserInterface[] }, payload) => ({
        ...state,
        users: [...state.users, payload.user],
    })),


    // функция delete, удаляем юзера с помощью метода .filter
    on(UsersActions.delete, (state: { users: UserInterface[] }, payload) => ({
        ...state,
        users: state.users.filter((user: UserInterface) => user.id !== payload.id),
    })),
)
