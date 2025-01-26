import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../Material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../interfaces/users.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-create-edit-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './create-edit-user-form.component.html',
  styleUrl: './create-edit-user-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEditUserFormComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<CreateEditUserFormComponent>);
  readonly data = inject<User>(MAT_DIALOG_DATA);
  readonly _snackBar = inject(MatSnackBar);

  @Output() createUser = new EventEmitter();

  ngOnInit(): void {
    if (this.data) {
      this.createEditUserForm.patchValue(this.data);
    }
  }

  createEditUserForm = new FormGroup({
    id: new FormControl(this.data?.id || null),
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    website: new FormControl('', Validators.required),
  });

  submitForm() {
    const userId = Date.now();
    const userData = { ...this.createEditUserForm.value, id: userId };
    this.createUser.emit(userData);
    this.dialogRef.close(this.createEditUserForm.value);

    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
