import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
    selector: 'app-auth-branch',
    imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle],
    templateUrl: './auth-branch.component.html',
    styleUrl: './auth-branch.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthBranchComponent {
  readonly dialogRef = inject(MatDialogRef<AuthBranchComponent>);

  isBranchAdmin(branch: boolean) {
    this.dialogRef.close(branch);
  }
}
