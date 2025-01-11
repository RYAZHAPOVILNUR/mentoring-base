import { Component, EventEmitter, inject, Input, input, Output } from "@angular/core";
import { User } from "../user-interface";
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-user-card',
  templateUrl:'./user-card-component.html',
  styleUrl: './user-card-component.scss',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule]
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
