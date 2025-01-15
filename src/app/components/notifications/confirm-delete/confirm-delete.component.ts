import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
    selector: 'app-confirm-delete',
    imports: [
        MatButtonModule,
        MatDialogActions,
        MatDialogContent,
        MatDialogClose,
        MatDialogTitle,
    ],
    templateUrl: './confirm-delete.component.html',
    styleUrl: './confirm-delete.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDeleteComponent {
  readonly dialogRef = inject(MatDialogRef<ConfirmDeleteComponent>);

  confirmDelete(confirm: boolean) {
    this.dialogRef.close(confirm);
  }
}
