import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EditMatchesDashboardsComponent} from './edit.matches.dashboards.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: EditMatchesDashboardsComponent}
  ])],
  exports: [RouterModule]
})
export class EditMatchesDashboardsRoutingModule {
}
