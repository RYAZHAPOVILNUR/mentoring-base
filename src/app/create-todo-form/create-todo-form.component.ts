import { Component, EventEmitter, Output } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, FormsModule, ValidationErrors, Validators, ValidatorFn } from "@angular/forms";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";

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
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule,
    ],
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

    private getCompletedValue(): boolean {
        const value = this.form.get('completed')?.value!.trim().toLowerCase();
        if (value === 'да')
            return true;
        else
            return false;
    }

    public SubmitForm(): void {
        this.CreateTodo.emit({ ...this.form.value, completed: this.getCompletedValue() });
        this.form.reset();
    }
}