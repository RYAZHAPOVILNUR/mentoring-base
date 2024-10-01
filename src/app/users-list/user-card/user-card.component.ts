import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "/Users/shokhrukhabdulakimov/Desktop/newfolderfornormalizecss/mentoring-base/src/app/users-list/user-interface";

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
})

export class UserCardComponent {
    @Input()
    user: User;

    @Output()
    deleteUser = new EventEmitter()

    onDeleteUser(userId: number) {
        this.deleteUser.emit(userId)
    }
}