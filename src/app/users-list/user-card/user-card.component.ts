import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from '../../interfaces/user-itesrfaces';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input()
  user!: UserInterface; // "!" - означает что данные обязательно будут но по позже.

  @Output()
  deleteUser = new EventEmitter();

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }
}

