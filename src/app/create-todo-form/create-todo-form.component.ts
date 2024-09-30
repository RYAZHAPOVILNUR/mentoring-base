import { NgIf } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'app-create-todo-form',
    templateUrl: './create-todo-form.component.html',
    styleUrl: './create-todo-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf]
})
export class CreateTodoForm {
    @Output()
    createTodo = new EventEmitter();

    public formTodo = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(10)]),
        userId: new FormControl('', [Validators.required]),
        completed: new FormControl('', [Validators.required]),
    })

    public submitForm(): void{
        this.createTodo.emit(this.formTodo.value)
        this.formTodo.reset()
    }
}