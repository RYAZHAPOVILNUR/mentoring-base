import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Auth } from '../../../interfaces/auth.interface';

@Component({
  selector: 'app-auth-form',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent implements OnInit {
  @Output() createUser = new EventEmitter();

  private readonly dialogRef = inject(MatDialogRef<AuthFormComponent>);
  public readonly data: { user: Auth } = inject(MAT_DIALOG_DATA);

  public get messageTooltip(): string {
    return this.data.user
      ? 'Редактировать данные пользователя'
      : 'Добавить пользователя';
  }

  public form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    website: new FormControl('', [Validators.required]),
    company: new FormGroup({
      name: new FormControl('', [Validators.required]),
    }),
    phone: new FormControl('', [Validators.required]),
    id: new FormControl(new Date().getTime(), [Validators.required]),
  });

  public ngOnInit(): void {
    if (this.data.user) {
      this.form.patchValue(this.data.user);
    }
  }

  public applayChangesForm(): void {
    this.dialogRef.close(this.form.value);
    this.form.reset();
  }
}
