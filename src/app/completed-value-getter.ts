import { FormGroup } from '@angular/forms';

export class CompletedValueGetter {
  constructor(private formTodo: FormGroup) {}

  getCompletedValue(): boolean {
    const value = this.formTodo.get('completed')?.value!.trim().toLowerCase();
    return value === 'да';
  }
}