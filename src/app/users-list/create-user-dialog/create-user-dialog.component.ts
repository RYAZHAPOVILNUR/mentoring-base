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
    imports: [ReactiveFormsModule, NgIf, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDialogClose, MatTooltipModule],

})
export class CreateUserDialogComponent {
    // readonly data = inject<{ user: User }>(MAT_DIALOG_DATA);
    // readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>);
    // @Output()
    // createModalUser = new EventEmitter();

    public form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(2)]), //обязательно к заполнению
        email: new FormControl('', [Validators.required, Validators.email]),
        website: new FormControl('', [Validators.required, Validators.minLength(3)]),
        companyName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        // message: new FormControl("Edit user's data")
    })
    message = new FormControl('Создать данные пользователя');


    // public submitForm() {
        // this.createModalUser.emit(this.form.value);
        // return this.form.value
        // console.log(this.form.value)
        // this.form.reset();
    // }
}
// export class TooltipMessageExample {
//     message = new FormControl('Редактировать данные пользователя');
//   }
  