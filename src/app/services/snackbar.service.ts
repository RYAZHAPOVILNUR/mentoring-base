import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private readonly _snackBar: MatSnackBar = inject(MatSnackBar);

  public showMessage(message: string) {
    this._snackBar.open(message, 'Close', { duration: 3000 });
  }
}
