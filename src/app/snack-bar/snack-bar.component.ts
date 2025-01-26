import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  standalone: true,
  imports: [],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackBarComponent {
  snackBarRef = inject(MatSnackBarRef);
}
