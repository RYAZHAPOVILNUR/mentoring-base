import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    standalone: true,
    templateUrl: "./admin.component.html",
    styleUrl: "./admin.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AdminComponent{

}