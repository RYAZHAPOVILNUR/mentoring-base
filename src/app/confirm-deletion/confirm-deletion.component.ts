import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MaterialModule } from '../Material.module';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-deletion',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './confirm-deletion.component.html',
  styleUrl: './confirm-deletion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDeletionComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDeletionComponent);
  }
}
