import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IUser } from "../users-list.component";

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true
})

export class UserCardComponent {
    @Input()
    user: IUser = {
        "id": 0,
        "name": '',
        "username": '',
        "email": '',
        "address": {
            "street": '',
            "suite": '',
            "city": '',
            "zipcode": '',
            "geo": {
                "lat": '',
                "lng": ''
            }
        },
        "phone": '',
        "website": '',
        "company": {
            "name": '',
            "catchPhrase": '',
            "bs": ''
        }
    }

    @Output()
    deleteUser = new EventEmitter()

    onDeleteUser(userId: number) {
        this.deleteUser.emit(userId)
    }
}