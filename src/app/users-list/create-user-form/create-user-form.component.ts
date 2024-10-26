import { NgIf } from "@angular/common";
import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { User } from "../../user-interface";
import { MAT_DIALOG_DATA, MatDialogClose } from "@angular/material/dialog";

@Component({
    selector: 'app-create-user-form',
    templateUrl: './create-user-form.component.html',
    styleUrl: './create-user-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogClose],
})
export class CreateUserFormComponent {
    readonly data = inject<{user: User}>(MAT_DIALOG_DATA);

    public form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        website: new FormControl('', [Validators.required, Validators.minLength(3)]),
        phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
        company: new FormGroup({name: new FormControl('', [Validators.required, Validators.minLength(2)])}) ,
    })
}
