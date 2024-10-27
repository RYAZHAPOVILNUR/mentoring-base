import { NgFor } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { User } from '../../interfaces/user-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../../dialogs/user-dialogs/edit-user-dialog/edit-user-dialog.component';
import { DeleteUserDialogComponent } from '../../dialogs/user-dialogs/delete-user-dialog/delete-user-dialog.component';
import {MatCardModule} from '@angular/material/card';
import { ShadowDirective } from '../../directives/shadow.directive';
import { EditPhonePipe } from "../../pipes/edit-phone.pipe";
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatCardModule, ShadowDirective, EditPhonePipe ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input()
  user!: User;

  @Output()
  editUser = new EventEmitter();

  @Output()
  deleteUser = new EventEmitter();

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog
      .open(EditUserDialogComponent, {
        data: { user: this.user },
      })
      .afterClosed()
      .subscribe((editResult) => {
        if (editResult) {
          this.editUser.emit(editResult);
        }
      });
  }

  openDeleteUserDialog(): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteUser.emit(this.user.id);
      }
    });
  }
}