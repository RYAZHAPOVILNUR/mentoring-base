import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Luser } from '../users-list.component';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true
})

export class UserCardComponent {
  @Input()
  user: Luser[] = [];

  @Output()
  deleteUser = new EventEmitter()

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId)
  }
}
