import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
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
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserFormComponent {
  @Output() createUser = new EventEmitter();

  readonly dialogRef = inject(MatDialogRef<CreateUserFormComponent>);

  public form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    website: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),
  });

  public submitForm(): void {
    this.dialogRef.close(this.form.value);
    this.form.reset();
  }
}
