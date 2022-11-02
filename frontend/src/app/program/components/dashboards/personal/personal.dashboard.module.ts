import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDashboardComponent } from './personal.dashboard.component';
import { PersonalDashboardRoutigModule } from './personal.dashboard-routing.module';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ChartModule } from 'primeng/chart';
import { KnobModule } from 'primeng/knob';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';

@NgModule({
	imports: [
		CommonModule,
    PersonalDashboardRoutigModule,
		ButtonModule,
		RippleModule,
		DropdownModule,
		FormsModule,
		TableModule,
		InputTextModule,
		InputTextareaModule,
		ChartModule,
		RatingModule,
		KnobModule
	],
	declarations: [PersonalDashboardComponent]
})
export class PersonalDashboardModule { }
