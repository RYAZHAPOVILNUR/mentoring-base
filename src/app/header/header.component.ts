import { NgFor, } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PhonePipe } from "../pipe/phone.pipe";
import { BackgroundKorzinaDirective } from "../directives/backgroundKorzina.directive";
import { UserService } from "../user.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [NgFor, RouterModule, PhonePipe, BackgroundKorzinaDirective,NgFor],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  value = new Date();
  tel = "+7 (965) 084-29-29"

  readonly catalogItems = ["Каталог","Стройматериалы","Инструменты","Электрика","Интерьер и одежда"];
  readonly headerItems = ["Главная","О компании","Каталог"]

  private readonly userService = inject(UserService)

  changeMenuText() {
    return  this.catalogItems.map((item: string) => item.toUpperCase())
  }

  loginAsAdmin() {
    this.userService.loginAsAdmin()
  }

  loginAsUser() {
    this.userService.loginAsUser()
  }

  logout() {
    this.userService.logout
  }

}
