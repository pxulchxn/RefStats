import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    /* Wieso geht es nur bei dashboard-banking? und nicht bei dashboard-ecoomerce oder so? */
    {
      path: 'banking',
      data: {breadcrumb: 'Banking Dashboard'},
      loadChildren: () => import('./ecommerce/ecommerce.dashboard.module').then(m => m.EcommerceDashboardModule)
    },
    {
      path: 'users',
      data: {breadcrumb: 'Users Dashboard'},
      loadChildren: () => import('./users/users.dashboard.module').then(m => m.UsersDashboardModule)
    },
    {
      path: 'personal',
      data: {breadcrumb: 'Stats Dashboard'},
      loadChildren: () => import('./personal/personal.dashboard.module').then(m => m.PersonalDashboardModule)
    },
    {
      path: 'matches',
      data: {breadcrumb: 'Matches Dashboard'},
      loadChildren: () => import('./matches/matches.dashboard.module').then(m => m.MatchesDashboardModule)
    }
  ])],
  exports: [RouterModule]
})
export class DashboardsRoutingModule {
}
