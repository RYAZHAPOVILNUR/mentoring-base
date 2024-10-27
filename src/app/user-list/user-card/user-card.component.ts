import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { User } from "../../interfaces/user-interface";
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from "../../edit-user/edit-user-dialog.component";
import { DialogDeleteUser } from "../../delete-user-dialog/delete-user-dialog.component";
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component ({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatCardModule],
})

export class UserCardComponent {
  @Input ()
  user!: User;

  @Output ()
  deleteUser = new EventEmitter<number> ();

  @Output ()
  editUser = new EventEmitter ();

  readonly dialog = inject(MatDialog);
  readonly snackBar = inject(MatSnackBar);
  

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((editResult) => {
      if (editResult) {
        this.editUser.emit(editResult);
        this.snackBar.open('Пользователь отредактирован🐱', 'мяу', {
          duration: 2000
        });
      }
      else { 
        this.snackBar.open('Отмена редактирования', ' ', {
          duration: 2000
        });
      }
    });
  }

  onDeleteUser (userId: number) {
    this.deleteUser.emit(userId);
  }

  OpenDeleteDialog(userId: number): void {
    const dialogRef = this.dialog.open(DialogDeleteUser);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDeleteUser(userId);
        {
          this.deleteUser.emit(userId);
        }
      }
    });
  }
}