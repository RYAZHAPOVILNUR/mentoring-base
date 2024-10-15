import { NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { User } from "../interfaces/user-interface";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component ({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.comonent.html',
  styleUrl: './edit-user-dialog.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule,NgIf, MatDialogClose]
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
    companyName: new FormControl(this.data.user.company.name, 
      [Validators.required, 
      Validators.minLength(3),
      ]),
  });

  public submitForm() {
    this.dialogRef.close(this.form.value);
    this.openSnackBar();
  }

  get userWithUpdatedFields () {
    return {
      ...this.form.value,
      id: this.data.user.id,
    }
  }

  openSnackBar(): void {
    this.snackBar.open('Пользователь отредактирован🐱', 'мяу', {
      duration: 2000
    });
  }
}