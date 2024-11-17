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
import {FixPhoneNumberPipe} from "../../pipes/fix-phone-number.pipe";
import {RedDirective} from "../../directives/red.directive";
import {ShadowDirective} from "../../directives/shadow.directive";
import {MatTooltip} from "@angular/material/tooltip";

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
    MatButton,
    FixPhoneNumberPipe,
    RedDirective,
    ShadowDirective,
    MatTooltip
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  readonly dialog = inject(MatDialog);

  @Input()
  public user!: User

  @Output()
  public deleteUser = new EventEmitter<number>();

  @Output()
  public editUser = new EventEmitter<User>();

  public deleteUserDialog(id: number) {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUser.emit(id);
      }
    });
  }

  public editUserDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: this.user,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.editUser.emit(result);
      }
    });
  }
}
