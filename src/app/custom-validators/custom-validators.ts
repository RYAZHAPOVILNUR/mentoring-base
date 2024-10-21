import { AbstractControl, ValidationErrors } from '@angular/forms';

export function customNumberValidator(
  control: AbstractControl
): ValidationErrors | null {
  const enteredValue = control.value;
  const regex = /^\d+$/;
  if (!regex.test(enteredValue)) {
    return { isNotNumber: true };
  }
  return null;
}

export function customYesNoValidator(
  control: AbstractControl
): ValidationErrors | null {
  const enteredValue = control.value?.trim().toLowerCase();
  if (enteredValue === 'да' || enteredValue === 'нет') {
    return null;
  } else {
    return { invalidAnswer: true };
  }
}
