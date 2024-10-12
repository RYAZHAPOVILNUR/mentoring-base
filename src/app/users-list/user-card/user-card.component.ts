import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../users-list.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  imports: [],
})
export class UserCardComponent {
  @Input()
  user: User;

  @Output()
  deleteUser = new EventEmitter();

  onDeleteUser(id: number) {
    this.deleteUser.emit(id);
  }
}
