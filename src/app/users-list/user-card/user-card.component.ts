import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true
})
export class UserCardComponent {
    @Input()
    user: any

    @Output()
    deleteUser = new EventEmitter()

    onDeleteUser(userID: number) {
        this.deleteUser.emit(userID)
    }
}