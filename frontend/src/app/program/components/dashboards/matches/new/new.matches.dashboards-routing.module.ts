import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NewMatchesDashboardsComponent} from './new.matches.dashboards.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: NewMatchesDashboardsComponent}
  ])],
  exports: [RouterModule]
})
export class NewMatchesDashboardsRoutingModule {
}
