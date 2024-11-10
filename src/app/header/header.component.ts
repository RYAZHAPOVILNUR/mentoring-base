// import { HttpClient } from "@angular/common/http";
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from "@angular/core";
import { Router, RouterLink, } from '@angular/router';
import { CustomDatePipe } from '../pipes/date.pipe';
import { YellowDirective } from '../directives/yellow.directive';
import { MatSnackBar } from "@angular/material/snack-bar";
import { UserService } from "../user.service";
import { MatDialog } from '@angular/material/dialog';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NgIf, NgFor, RouterLink, CustomDatePipe, YellowDirective, DatePipe, AsyncPipe],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})

export class Header {
    title = 'mentoring-first-project';
    readonly headerItem1: string = 'Главная';
    headerItem2 = aboutCompany;
    readonly headerItem3: string = 'Каталог';

    private readonly dialog = inject(MatDialog);
    public readonly userService = inject(UserService);
    router = inject(Router)
    snackbar = inject(MatSnackBar);

    isShowCatalog = true;

    isShowBanner = true;

    menuItems = upperCaseMenuItems;

    readonly newPages = [5, 4, 3, 2, 1];

    isUpperCase = true;
    changeMenuText() {
        this.menuItems = menuItems.map(
        item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
        )
        this.isUpperCase = !this.isUpperCase
    }

    // constructor() {}

    dateObject: Date = new Date();
    constructor(){
        console.log(this.dateObject)
    }
    // timestamp: number = Date.now();
    // dateString: string = '2024-10-27';

    private openSnackBar(message: string, action: string) {
        this.snackbar.open(message, action, { duration: 3000 });
    }

    public checkIsAdmin() {
        if (!this.userService.isAdmin) {
            this.openSnackBar('Page only for admin', '')
        }
    }

    public openDialog() {
        const dialogRef = this.dialog.open(AdminDialogComponent, {
            // width: 400px,
            // height: 200px
        });

        dialogRef.afterClosed().subscribe((res: string) => {
            console.log(res)
            if (res === 'user') {
                this.userService.loginAsUser();
                this.router.navigate(['users']);
            } else if(res === 'admin') {
                this.userService.loginAsAdmin();
                this.router.navigate(['admin']);
            } else {
                return undefined
            }
        })
    }

    public logout() {
        if (confirm('EXIT?')){
            console.log('logout')
            this.router.navigate(['']);
            return this.userService.logout();
        } else return false
    }
    
}

const headerItems = ['Главная', 'О компании', 'Каталог']
const upperCaseHeaderItems = headerItems.map((item) => item.toUpperCase())

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']
const upperCaseMenuItems = menuItems.map((item) => item.toUpperCase())

const headerItem2 = ['О компании'];
const aboutCompany = headerItem2.map((item) => item[0].toUpperCase() + item.slice(1));

