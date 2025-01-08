import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from "@angular/router";






@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButtonModule, MatIcon, RouterLink]
})

export class AdminComponent {

}