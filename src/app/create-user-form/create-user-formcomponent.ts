import { NgIf } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
    selector: 'app-create-user-form',
    templateUrl: './create-user-form.component.html',
    styleUrl: './create-user-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, MatButtonModule, MatFormFieldModule, MatInputModule],
})
export class CreateUserFormComponent {
    @Output()
    createUser = new EventEmitter();

    public form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        website: new FormControl('', [Validators.required, Validators.minLength(3)]),
        companyName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    })

    public submitForm(): void{
        this.createUser.emit(this.form.value)
        this.form.reset()
    }
}