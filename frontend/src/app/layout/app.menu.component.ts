import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
          {
            label: 'General',
            icon: 'pi pi-home',
            items: [
              {
                label: 'Landing Page',
                icon: 'pi pi-fw pi-home',
                routerLink: ['/landing']
              },
              {
                label: 'News',
                icon: 'pi pi-fw pi-comment',
                routerLink: ['/blog/list']
              }
            ]
          },
          {
            label: 'Spiele',
            icon: 'pi pi-home',
            items: [
              {
                label: 'Übersicht',
                icon: 'pi pi-fw pi-list',
                routerLink: ['/dashboard/matches']
              },
              {
                label: 'Statistiken',
                icon: 'pi pi-fw pi-chart-pie',
                routerLink: ['/dashboard/personal']
              }
            ]
          },
          {
            label: 'Admin',
            icon: 'pi pi-home',
            items: [
              {
                label: 'Dashboard',
                icon: 'pi pi-fw pi-info-circle',
                routerLink: ['/dashboard/personal']
              },
              {
                label: 'Users',
                icon: 'pi pi-fw pi-users',
                routerLink: ['/admin/profile/list']
              },
              {
                label: 'New Post',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/admin/blog-edit']
              }
            ]
          },
          {
            label: 'Sonstiges',
            icon: 'pi pi-home',
            items: [
              {
                label: 'Contact Us',
                icon: 'pi pi-fw pi-phone',
                routerLink: ['/contact']
              }
            ]
          }
        ];
    }
}
