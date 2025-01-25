import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  showNotification(notificationText: string) {
    this.snackBar.open(notificationText, 'Ок', { duration: 5000 });
  }
}
