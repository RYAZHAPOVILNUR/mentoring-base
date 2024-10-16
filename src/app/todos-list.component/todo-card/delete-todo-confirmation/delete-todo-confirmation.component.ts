import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-todo-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './delete-todo-confirmation.component.html',
  styleUrl: './delete-todo-confirmation.component.scss'
})
export class DeleteTodoConfirmationComponent implements OnInit{
  constructor(
    public dialogo: MatDialogRef<DeleteTodoConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }
    readonly snackBar = inject(MatSnackBar);

    cancelDialog(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
      this.openSnackBar()
    }

    openSnackBar(): void {
      this.snackBar.open('ЗАДАЧА удалёна🐒', 'Закрыть', {
        duration: 2000
      });
    }

  ngOnInit() {
  }
}
