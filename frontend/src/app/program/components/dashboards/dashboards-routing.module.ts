import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'personal',
      data: {breadcrumb: 'Stats Dashboard'},
      loadChildren: () => import('./personal/personal.dashboard.module').then(m => m.PersonalDashboardModule)
    },
    {
      path: 'matches',
      data: {breadcrumb: 'Matches Dashboard'},
      loadChildren: () => import('./matches/matches.dashboard.module').then(m => m.MatchesDashboardModule)
    },
    {path: '**', redirectTo: '/notfound'}
  ])],
  exports: [RouterModule]
})
export class DashboardsRoutingModule {
}
