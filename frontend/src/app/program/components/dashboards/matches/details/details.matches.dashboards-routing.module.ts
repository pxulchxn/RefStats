import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DetailsMatchesDashboardsComponent} from './details.matches.dashboards.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: DetailsMatchesDashboardsComponent}
  ])],
  exports: [RouterModule]
})
export class DetailsMatchesDashboardsRoutingModule {
}
