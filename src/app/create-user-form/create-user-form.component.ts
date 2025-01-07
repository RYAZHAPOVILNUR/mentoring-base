import { NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';


@Component({
	selector: 'app-create-user-form',
	templateUrl: './create-user-form.component.html',
	styleUrls: ['./create-user-form.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, MatButton, MatButtonModule, MatInputModule, MatIconModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserFormComponent {
	@Output()
	createUser = new EventEmitter()

	public form = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.minLength(3),]),
		email: new FormControl('', [Validators.required, Validators.minLength(3),Validators.email]),
		website: new FormControl('', [Validators.required, Validators.minLength(3)]),
		companyName: new FormControl('', [Validators.required, Validators.minLength(3)]),
	})
	public submitForm () {
		this.createUser.emit(this.form.value)
		this.form.reset()
	}
	constructor() {
		this.form.valueChanges.subscribe(
			item => console.log(item)
		)
	}
}