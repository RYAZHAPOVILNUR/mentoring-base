import { Component, Input, Output, EventEmitter } from "@angular/core";
import { User } from '../user';
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true,
  imports: [NgFor]
})

export class UserCardComponent {
  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter();

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId)
  }
}
