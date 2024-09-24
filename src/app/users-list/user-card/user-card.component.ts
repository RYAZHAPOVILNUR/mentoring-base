import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl:'./user-card.component.html',
  styleUrl:'./user-card.component.scss',
})

export class UserCardComponent{
  @Input()
  user: any
}
