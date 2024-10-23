import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../users-list.component";

@Component({
    selector: 'app-user-card',
    standalone: true,
    imports: [],
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
    @Input()
    user!: User

    @Output()
    deleteUser = new EventEmitter<number>()

    onDeleteUser(userId: number) {
        this.deleteUser.emit(userId)
    }
}