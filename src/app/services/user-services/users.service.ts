import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CreateUserInterface, UserInterface} from '../../interfaces/user-interfaces';
import {LocalStorageService} from "../local-storage.service";
import {UsersApiService} from "./users-api.service";


@Injectable({providedIn: 'root'}) // Паттерн singleton это паттерн проектирования, гарантирующий, что у класса будет только один экземпляр для всего приложения.
export class UsersService {
    private usersSubject$: BehaviorSubject<UserInterface[]> = new BehaviorSubject<UserInterface[]>([]); // [] — начальное значение пустой массив, переданное в BehaviorSubject.
    public readonly users$: Observable<UserInterface[]> = this.usersSubject$.asObservable();
    private readonly localStorageService: LocalStorageService = inject(LocalStorageService);
    private readonly usersApiService: UsersApiService = inject(UsersApiService);
    private readonly localStorageUsersKey = 'users';

    public loadUsers(): void {
        const localStorageUsers: UserInterface[] | null =
            this.localStorageService.getLocalStorage<UserInterface[]>('users');

        if (localStorageUsers) {
            this.usersSubject$.next(localStorageUsers);
        } else {
            this.usersApiService.getUsers().subscribe((users: UserInterface[]) => {
                this.setUsers(users);
            });
        }
    }

    private setUsers(usersData: UserInterface[]) {
        this.localStorageService.saveLocalStorage<UserInterface[]>(
            this.localStorageUsersKey, usersData
        );

        this.usersSubject$.next(usersData);
    }

    public editUser(user: UserInterface): void {
        const index: number = this.usersSubject$.value.findIndex((el: UserInterface) => el.id === user.id);

        this.usersSubject$.value[index] = user;
        this.setUsers(this.usersSubject$.value);
    }

    public createUser(user: CreateUserInterface) {
        const userExisting: UserInterface | undefined = this.usersSubject$.value.find(
            (currentElement: UserInterface) => currentElement.email === user.email
        );
        if (userExisting === undefined) {
            const newUser: CreateUserInterface[] = [...this.usersSubject$.value, user];
            this.setUsers(newUser);
            // ,,,spread создает новый массив, который включает все элементы из this.users$ и добавляет в конец новый объект user.
            // ...rest используется для сбора оставшихся элементов, а ...spread используется для раскрытия элементов.
        } else alert('Такой Email уже есть');
    }

    public deleteUser(userId: number): void {
        const newArrayUsers: UserInterface[] = this.usersSubject$.value.filter(
            (user: UserInterface) => user.id !== userId // Условие: оставляем только тех пользователей, чей id не равен userId
        );
        const findUser: UserInterface | undefined = this.usersSubject$.value.find(
            (user: UserInterface) => user.id === userId // Условие: ищем пользователя с id равным userId
        );

        if (findUser) {
            this.setUsers(newArrayUsers);
        }

        if (!localStorage.getItem(this.localStorageUsersKey)) {
            this.localStorageService.removeLocalStorage(this.localStorageUsersKey);
        }
    }
}
