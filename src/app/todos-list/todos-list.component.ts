import {AsyncPipe, NgFor} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TodoCardComponent} from './todo-card/todo-card.component';
import {TodosApiService} from '../services/todo-services/todos-api.service';
import {TodosService} from '../services/todo-services/todos.service';
import {CreateTodoFormComponent} from '../create-todo-form/create-todo-form.component';
import {TodoInterface} from '../interfaces/todo-interfaces';
import {TodoCreateButtonComponent} from './todo-create-button/todo-create-button.component';
import {EditTodoDialogComponent} from './edit-todo-dialog/edit-todo-dialog.component';
import {Store} from "@ngrx/store";
import {selectTodo} from "./store/todos.selectors";
import {TodosActions} from "./store/todos.actions";

@Component({
    selector: 'app-todos-list',
    standalone: true,
    imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent, TodoCreateButtonComponent, EditTodoDialogComponent],
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    // changeDetection: ChangeDetectionStrategy.OnPush делает работу с данными намного быстрее
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent {
    readonly todosApiService: TodosApiService = inject(TodosApiService);
    readonly todosService: TodosService = inject(TodosService);
    private readonly store = inject(Store);
    public readonly todos$ = this.store.select(selectTodo)

    constructor() {
        // this.todosService.loadTodos();
        this.store.dispatch(TodosActions.load());
    }

    deleteTodo(id: number) {
        // this.todosService.deleteTodo(id,);
        this.store.dispatch(TodosActions.delete({id}));
    }

    createTodo(formData: TodoInterface) {
        // this.todosService.createTodo({
        //     userId: formData.userId,
        //     id: new Date().getTime(),
        //     title: formData.title,
        //     completed: formData.completed,
        // });
        this.store.dispatch(
            TodosActions.create({
                todo: {
                    userId: formData.userId,
                    id: new Date().getTime(),
                    title: formData.title,
                    completed: formData.completed,
                }
            })
        );
    }

    editTodo(todo: TodoInterface) {
        // this.todosService.editTodo({
        //     ...todo
        // });
        this.store.dispatch(TodosActions.edit({todo}));
    }
}
