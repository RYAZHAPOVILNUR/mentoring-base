import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'; 
import { NgIf } from "@angular/common";
import {MatTooltipModule} from '@angular/material/tooltip';

@Component ({
    selector: 'app-create-user-dialog',
    templateUrl: './create-user-dialog.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDialogClose, MatTooltipModule],

})
export class CreateUserDialogComponent {

    public form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(2)]), //обязательно к заполнению
        email: new FormControl('', [Validators.required, Validators.email]),
        website: new FormControl('', [Validators.required, Validators.minLength(3)]),
        company: new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        })
    })
    message = new FormControl('Создать данные пользователя');
}
  