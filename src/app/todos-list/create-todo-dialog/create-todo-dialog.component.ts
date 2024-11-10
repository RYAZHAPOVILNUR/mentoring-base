import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'; 
import { NgIf } from "@angular/common";
import { completedValidator } from "../../create-todo-form/create-todo-form.component";

@Component ({
    selector: 'app-create-todo-dialog',
    templateUrl: './create-todo-dialog.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDialogClose],

})
export class CreateTodoDialogComponent {

    public form = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(3)]), //обязательно к заполнению
        userId: new FormControl('', [Validators.required, Validators.minLength(2)]),
        completed: new FormControl('', [Validators.required, completedValidator()]),
    })

}