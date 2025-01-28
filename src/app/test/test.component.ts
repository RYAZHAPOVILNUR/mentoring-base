import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


@Component ({
  selector: 'app-test',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})

export class TestComponent {

}