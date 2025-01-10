import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [MatSnackBarModule, MatFormFieldModule, NgIf],
  templateUrl: './snackbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarComponent {
    public snackBarRef = inject(MatSnackBarRef);
    private data = inject(MAT_SNACK_BAR_DATA);

    public isCreateUser = false;
    public isEditUser = false;
    public isDeleteUser = false;
    public isCreateTodo = false;
    public isEditTodo = false;
    public isDeleteTodo = false;

  constructor() {
    if (this.data.isCreateUser) {
      this.isCreateUser= true
    }
    if (this.data.isEditUser) {
      this.isEditUser= true
    }
    if (this.data.isDeleteUser) {
      this.isDeleteUser= true
    }
    if (this.data.isCreateTodo) {
      this.isCreateTodo= true
    }
    if (this.data.isEditTodo) {
      this.isEditTodo= true
    }
    if (this.data.isDeleteTodo) {
      this.isDeleteTodo= true
    }
  }
}
