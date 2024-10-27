import { NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { User } from "../interfaces/user-interface";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTooltipModule } from '@angular/material/tooltip';

@Component ({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule,NgIf, MatDialogModule, MatTooltipModule]
})

export class EditUserDialogComponent {
  readonly data = inject<{ user: User }>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>);
  readonly snackBar = inject(MatSnackBar);
  
  public form = new FormGroup ({
    name: new FormControl(this.data.user.name, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
    website: new FormControl(this.data.user.website, 
      [Validators.required, 
      Validators.minLength(4),
      ]),
      company:  new FormGroup ({
        name: new FormControl(this.data.user.company.name, 
          [Validators.required, 
          Validators.minLength(3),
          ]),
      })
  });

  public submitForm() {
    this.dialogRef.close({...this.form.value, id: this.data.user.id});
  }
}