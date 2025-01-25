import { Component, EventEmitter, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule }  from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateUserFormComponent implements OnInit {
  @Output()
  createUser = new EventEmitter();
  
  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl('', [Validators.required, Validators.minLength(2)]),
    companyName: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })
  
  public submitForm(): void {
    this.createUser.emit(this.form.value)
    this.form.reset()
  }
  
  ngOnInit(): void {
    
  }
}
