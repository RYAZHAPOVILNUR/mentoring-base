import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {User} from "../../interfaces/user.interface";
import {MatDialog} from "@angular/material/dialog";
import {EditUserDialogComponent} from "../edit-user-dialog/edit-user-dialog.component";
import {DeleteUserDialogComponent} from "../delete-user-dialog/delete-user-dialog.component";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardActions,
    MatCardSubtitle,
    MatButton
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  readonly dialog = inject(MatDialog);

  @Input()
    user!: User

  @Output()
  deleteUser = new EventEmitter();

  @Output()
  updateUser = new EventEmitter();

  onDeleteUser(id: number) {

    const dialogRef = this.dialog.open(DeleteUserDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUser.emit(id);
      }
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: {
        name: this.user.name,
        email: this.user.email,
        company: {name:  this.user.company.name},
        id: this.user.id
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.updateUser.emit(result);
      }
    });
  }

}
