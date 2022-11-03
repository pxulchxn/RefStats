import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {MatchService} from 'src/app/program/service/customer.service';
import {Table} from 'primeng/table';
import {MessageService, ConfirmationService} from 'primeng/api';
import {Match} from "../../../api/match";

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  templateUrl: './matches.dashboard.component.html',
  providers: [MessageService, ConfirmationService]
})
export class MatchesDashboardComponent implements OnInit {

  matches1: Match[] = [];

  statuses: any[] = [];

  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    this.matchService.getMatches().then(matches => {
      this.matches1 = matches;
      this.loading = false;

      // @ts-ignore
      this.matches1.forEach(match => match.date = new Date(match.date));
    });

    this.statuses = [
      {label: 'Schiedsrichter', value: 'schiedsrichter'},
      {label: '1. Assistent', value: 'first_assistent'},
      {label: '2. Assistent', value: 'second_assistent'},
      {label: '4. Offizieller', value: 'fourth_official'}
    ];
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

}
