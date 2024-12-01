import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatError } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { User } from '../users-list.interface';



@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatFormFieldModule, MatInputModule, MatButtonModule, MatError, MatDialogClose],
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss'
})
export class EditUserDialogComponent {
  readonly data =inject<{ user: User }>(MAT_DIALOG_DATA);
  

  public formUser = new FormGroup ({
    name: new FormControl(this.data.user.name, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
    website: new FormControl(this.data.user.website, [Validators.required, Validators.minLength(3)]),
    company: new FormGroup ({
     name: new FormControl(this.data.user.company.name, [Validators.required, Validators.minLength(2)])
    }),
  });
  
  get userWithUpdatedFieilds() {
    return {
      ...this.formUser.value, 
      id: this.data.user.id
    };
  }
}
