import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from "@angular/material/dialog";
import { UserCreateButtonComponent } from "./create-user-dialog/user-create-button.component";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-user-create-dialog',
  templateUrl: './user-create-dialog.component.html',
  styleUrl: './user-create-dialog.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    
  ]
})

export class UserCreateDialogComponent {
  private snackBar = inject(MatSnackBar)
  readonly dialogRef = inject(MatDialogRef<UserCreateButtonComponent>)

  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl('', [Validators.required, Validators.minLength(3)]),
    company: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    })
  })

  public submitForm(): void {
    this.dialogRef.close(this.form.value)
    this.snackBar.open('Пользователь успешно добавлен', 'Закрыть')
    console.log(this.form.value)
  }
}
