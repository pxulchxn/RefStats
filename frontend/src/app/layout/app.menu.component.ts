import {OnInit} from '@angular/core';
import {Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  ngOnInit() {
    this.model = [
      {
        label: 'Personal',
        icon: 'pi pi-home',
        items: [
          {
            label: 'Statistiken',
            icon: 'pi pi-fw pi-chart-pie',
            routerLink: ['/dashboard/personal']
          },
          {
            label: 'Spiele',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/dashboard/matches']
          }
        ]
      },
      {
        label: 'Allgemein',
        icon: 'pi pi-home',
        items: [
          /*{
            label: 'Landing Page',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/landing']
          },*/
          {
            label: 'News',
            icon: 'pi pi-fw pi-comment',
            routerLink: ['/blog/list']
          }, {
            label: 'Kontaktiere uns',
            icon: 'pi pi-fw pi-phone',
            routerLink: ['/contact']
          },
          {
            label: 'Über uns',
            icon: 'pi pi-fw pi-user',
            routerLink: ['/aboutus']
          }
        ]
      },
      {
        label: 'Admin',
        icon: 'pi pi-home',
        items: [
          {
            label: 'Überblick',
            icon: 'pi pi-fw pi-info-circle',
            routerLink: ['/admin/overview']
          },
          {
            label: 'User Management',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/admin/profile/list']
          },
          {
            label: 'Neuer Post',
            icon: 'pi pi-fw pi-pencil',
            routerLink: ['/admin/blog-edit']
          }
        ]
      }
    ];
  }
}
