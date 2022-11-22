import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardsRoutingModule} from './dashboards-routing.module';
import {PanelModule} from "primeng/panel";

@NgModule({
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    PanelModule
  ]
})
export class DashboardsModule {
}
