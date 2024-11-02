import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { PhonePipe } from "../../pipes/phone.pipe";
import {MatButton, MatButtonModule} from '@angular/material/button';
import { YellowDirective } from '../../directives/yellow.directive';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [PhonePipe, MatButton, YellowDirective],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

}
