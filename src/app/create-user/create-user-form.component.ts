import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditUserDialogComponent } from '../users-list/create-edit-user-dialog/create-edit-user-dialog.component';
import { User } from '../interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['create-user-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
})
export class CreateUserFormComponent {
  @Input()
  user!: User;

  @Output()
  createUser = new EventEmitter();

  readonly dialog = inject(MatDialog)

  readonly snackbar = inject(MatSnackBar)
  openDialog() {
    const dialogRef = this.dialog.open(CreateEditUserDialogComponent, {
      data: {user: "", isEdit: false},
    });

    dialogRef.afterClosed().subscribe(createResult => {
      console.log('The dialog was closed. Result:', createResult);
      if (createResult) {
        this.createUser.emit(createResult)
        
      } 
      
    });
  }

  errorMessage = signal('');

  public form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    website: new FormControl(null, [Validators.required, Validators.minLength(2)]),
  });

  updateErrorMessage() {
    if (this.form.get('email')?.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.form.get('email')?.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }

    if (this.form.get('phone')?.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.form.get('phone')?.errors) {
      this.errorMessage.set('Not a valid phone');
    } else {
      this.errorMessage.set('');
    }
  }

  
  public submitForm() {
    this.createUser.emit(this.form.value);
    this.form.reset()
  }
}
