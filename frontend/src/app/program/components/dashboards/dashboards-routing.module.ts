import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        /* Wieso geht es nur bei dashboard-banking? und nicht bei dashboard-ecoomerce oder so? */
        { path: 'dashboard-banking', data: {breadcrumb: 'Banking Dashboard'}, loadChildren: () => import('./ecommerce/ecommerce.dashboard.module').then(m => m.EcommerceDashboardModule) },
      { path: 'dashboard-users', data: {breadcrumb: 'Users Dashboard'}, loadChildren: () => import('./users/users.dashboard.module').then(m => m.UsersDashboardModule) },
      { path: 'dashboard-personal', data: {breadcrumb: 'Matches Dashboard'}, loadChildren: () => import('./personal/personal.dashboard.module').then(m => m.PersonalDashboardModule) }
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
