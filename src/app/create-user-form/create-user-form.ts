import { NgIf } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export function completedValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.trim().toLowerCase();
        if (value === 'да' || value ===   'нет') {
            return null;
        }
        return { invalidCompleted: true};
    };
}

@Component({
    selector: 'app-create-user-form',
    templateUrl: './create-user-form.html',
    styleUrl: './create-user-form.scss',    
    standalone: true,
    imports: [ReactiveFormsModule, NgIf],
})
export class CreateUserFormComponent {
    @Output()
    createUser = new EventEmitter();

    public readonly form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        website: new FormControl('', [Validators.required, Validators.minLength(3)]),
        company: new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(2)]),  
    })
    });

    public submitForm(): void {
        this.createUser.emit(this.form.value);
        this.form.reset();
    }
}