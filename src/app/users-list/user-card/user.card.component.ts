import { Component, EventEmitter, inject, Input, input, Output } from "@angular/core";
import { User } from "../user-interface";

@Component({
  selector: 'app-user-card',
  templateUrl:'./user-card-component.html',
  styleUrl: './user-card-component.scss',
  standalone: true
})
export class UserCardComponent {
  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter()

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId)
  }

  readonly userDelete: string = 'Удалить пользователя'
}
