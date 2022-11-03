import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatchesDashboardComponent } from './matches.dashboard.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: MatchesDashboardComponent }
  ])],
  exports: [RouterModule]
})
export class MatchesDashboardRoutingModule { }
