import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-create-user-form',
    standalone: true,
    imports: [ReactiveFormsModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule],
    templateUrl: './create-user-form.component.html',
    styleUrl: './create-user-form.component.scss'
})

export class CreateUserForm {
    @Output()
    CreateUser = new EventEmitter();

    public form = new FormGroup({
        name: new FormControl('',
            [Validators.required, Validators.minLength(2)]),
        email: new FormControl('',
            [Validators.required, Validators.email]),
        website: new FormControl('',
            [Validators.required, Validators.minLength(3)]),
        companyName: new FormControl('',
            [Validators.required, Validators.minLength(2)])
    });

    public SubmitForm(): void {
        this.CreateUser.emit(this.form.value);
        this.form.reset();
    }
}