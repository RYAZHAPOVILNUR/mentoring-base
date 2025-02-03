import { NgIf } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from "@angular/forms";

function completedValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value !== 'да' && value !== 'нет') {
        return { invalidCompleted: true };
    }
    return null;
}

@Component({
    selector: 'app-create-todo-form',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf],
    templateUrl: './create-todo-form.component.html',
    styleUrl: './create-todo-form.component.scss'
})

export class CreateTodoForm {
    @Output()
    CreateTodo = new EventEmitter();

    public form = new FormGroup({
        userId: new FormControl('',
            [Validators.required, Validators.minLength(2)]),
        title: new FormControl('',
            [Validators.required, Validators.minLength(3)]),
        completed: new FormControl('',
            [Validators.required, completedValidator])
    })

    public SubmitForm(): void {
        this.CreateTodo.emit(this.form.value);
        this.form.reset();
    }
}