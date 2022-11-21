import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatchesDashboardComponent } from './matches.dashboard.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: MatchesDashboardComponent },
    {
      path: 'details',
      data: {breadcrumb: 'Match Detail View'},
      loadChildren: () => import('./details/details.matches.dashboards.module').then(m => m.DetailsMatchesDashboardsModule)
    },
    {
      path: 'new',
      data: {breadcrumb: 'New Match'},
      loadChildren: () => import('./new/new.matches.dashboards.module').then(m => m.NewMatchesDashboardsModule)
    },
    {
      path: 'edit',
      data: {breadcrumb: 'Edit Match'},
      loadChildren: () => import('./edit/edit.matches.dashboards.module').then(m => m.EditMatchesDashboardsModule)
    }
  ])],
  exports: [RouterModule]
})
export class MatchesDashboardRoutingModule { }
