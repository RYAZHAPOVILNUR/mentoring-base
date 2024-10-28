import { NgIf } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'app-create-todo-form',
    templateUrl: './create-todo-form.html',
    styleUrl: './create-todo-form.scss',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf]
})
export class CreateTodoFormComponent {
    @Output()
    createTodo = new EventEmitter();

    public form = new FormGroup({
        userId : new FormControl('', [Validators.required, Validators.minLength(1)]),
        title: new FormControl('', [Validators.required, Validators.minLength(3)]),
        completed: new FormControl('', [Validators.required, Validators.minLength(2)]),
    })

    public submitForm(): void {
        this.createTodo.emit(this.form.value);
        this.form.reset();
    }

    constructor() {
        this.form.valueChanges.subscribe((formValue) => console.log(formValue));
    }
}