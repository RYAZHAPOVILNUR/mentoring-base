import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { User } from "../users-list/users-list.component";
import { Form } from "../create-todo-form/form-types";
import { СreateUser } from "../users-list/users-list.component";

@Component({
    selector: 'app-create-user-form',
    templateUrl:'./create-user-form.component.html',
    styleUrl: './create-user-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule]
})


export class CreateUserFormComponent {
    @Output()
    createUser = new EventEmitter<СreateUser>();


    public form = new FormGroup<Form<СreateUser>>({
        name: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
        email: new FormControl<string>('', { validators: [Validators.required, Validators.minLength(5)], nonNullable: true }),
        website: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
        company: new FormGroup({
            name: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
        })
    });
  


    public submitForm(): void {
        const user: User = this.form.getRawValue();
        this.createUser.emit(user);
        this.form.reset();

    }
}