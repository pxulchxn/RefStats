import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatchesDetailsComponent} from './matches.details.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: MatchesDetailsComponent}
  ])],
  exports: [RouterModule]
})
export class MatchesDetailsRoutingModule {
}
