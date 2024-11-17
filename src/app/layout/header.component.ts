import {AsyncPipe, NgFor, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatDialog} from "@angular/material/dialog";
import {AuthComponent} from "../auth/auth.component";
import {UserService} from "../services/user-services/user.service";
import {MatButton} from "@angular/material/button";

const showCatalogCompany = (textMenu: string) => textMenu;
const text: string = showCatalogCompany('О компании');

const menuItems: string[] = ['Каталог', 'Стройматериалы', ' Инструменты', ' Электрика', ' Интерьер и одежда'];

const upperCaseMenuItems: string[] = menuItems.map(
    (item: string) => {
        return item.toUpperCase();
    }
)

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NgIf, NgFor, RouterLink, MatButton, AsyncPipe],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    title: string = 'mentoring-first-project';

    public readonly aboutCompany: string = text;
    private readonly dialog: MatDialog = inject(MatDialog);
    public readonly userService: UserService = inject(UserService);

    showCatalogCompany: boolean = false;

    isUpperCase: boolean = true;

    menuItems: string[] = upperCaseMenuItems;

    public changeMenuText() {
        this.menuItems = upperCaseMenuItems.map(
            (item: string) => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
        )
        this.isUpperCase = !this.isUpperCase;
    }

    readonly headerItem1 = 'Главная';
    readonly headerItem2 = 'О компании';
    readonly headerItem3 = 'Каталог';
    readonly header2Item4 = 'Дата:';

    public openDialog(): void {
        const dialogRef = this.dialog.open(AuthComponent, {
            width: '400px',
            height: '150px'
        });

        dialogRef.afterClosed().subscribe((result: string) => {
            if (result === 'admin') {
                this.userService.loginAsAdmin();
            } else if (result === 'user') {
                this.userService.loginAsUser();
            } else {
                return undefined;
            }
        });
    }

    public logout() {
        if (confirm('Вы точно хотите выйти?')) {
            return this.userService.logout();
        } else {
            return false;
        }
    }
}

