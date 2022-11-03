import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatchesDashboardComponent } from './matches.dashboard.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: MatchesDashboardComponent },
    {
      path: 'details-matches',
      data: {breadcrumb: 'Banking Dashboard'},
      loadChildren: () => import('./details/details.matches.dashboards.module').then(m => m.DetailsMatchesDashboardsModule)
    }
  ])],
  exports: [RouterModule]
})
export class MatchesDashboardRoutingModule { }
