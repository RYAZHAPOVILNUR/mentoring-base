import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Todo } from "../todos-list/todos-list.component";
import { Form } from "./form-types";
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-create-todo-form',
    templateUrl:'./create-todo-form.component.html',
    styleUrl: './create-todo-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule
        ]
})


export class CreateTodoFormComponent {
    @Output()
    createTodo = new EventEmitter<Todo>();


    public form = new FormGroup<Form<Todo>>({
        userId: new FormControl<number>(0, { validators: [Validators.required], nonNullable: true }),
        title: new FormControl<string>('', { validators: [Validators.required, Validators.minLength(5)], nonNullable: true }),
        completed: new FormControl<boolean>(false, { validators: [Validators.required], nonNullable: true }),
        id: new FormControl<number>(new Date().getTime(), {nonNullable: true})
    });


    public submitForm(): void {
        const todo: Todo = this.form.getRawValue();
        this.createTodo.emit(todo);
        this.form.reset();

    }
}