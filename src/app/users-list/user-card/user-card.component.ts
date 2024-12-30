import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog.component.ts/edit-user-dialog.component';

@Component({
  selector: 'user-card-root',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true,
})
export class UserCardComponent {
  @Input()
  userCard: any;

  @Output()
  deleteUserCard = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { userCard: this.userCard },
    });

    dialogRef.afterClosed().subscribe((editResult) => {
      if (editResult) {
        this.editUser.emit(editResult);
      }
    });
  }

  onDeleteUser(userCardId: number) {
    this.deleteUserCard.emit(userCardId);
  }
}
