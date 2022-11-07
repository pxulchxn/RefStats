import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DetailsMatchesDashboardsComponent} from './details.matches.dashboards.component';
import {DetailsMatchesDashboardsRoutingModule} from './details.matches.dashboards-routing.module';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {RippleModule} from 'primeng/ripple';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {RatingModule} from 'primeng/rating';
import {FileUploadModule} from "primeng/fileupload";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CalendarModule} from "primeng/calendar";
import {InputNumberModule} from "primeng/inputnumber";

@NgModule({
  imports: [
    CommonModule,
    DetailsMatchesDashboardsRoutingModule,
    FormsModule,
    TableModule,
    RatingModule,
    ButtonModule,
    SliderModule,
    InputTextModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    ToastModule,
    FileUploadModule,
    InputTextareaModule,
    CalendarModule,
    InputNumberModule
  ],
  declarations: [DetailsMatchesDashboardsComponent]
})
export class DetailsMatchesDashboardsModule {
}
