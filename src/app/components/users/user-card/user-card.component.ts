import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../users.component";

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true
})
export class UserCardComponent {
  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter<number>();

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }
}