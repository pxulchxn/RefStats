import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {MatchService} from 'src/app/program/service/match.service';
import {Table} from 'primeng/table';
import {MessageService, ConfirmationService} from 'primeng/api';
import {Match} from "../../../api/match";

@Component({
  templateUrl: './matches.dashboard.component.html',
  providers: [MessageService, ConfirmationService]
})
export class MatchesDashboardComponent implements OnInit {

  matches1: Match[] = [];

  function: any[] = [];

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

    this.function = [
      {label: 'Schiedsrichter', value: 'Schiedsrichter'},
      {label: '1. Assistent', value: '1. Assistent'},
      {label: '2. Assistent', value: '2. Assistent'},
      {label: '4. Offizieller', value: '4. Offizieller'}
    ];
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  routeToInfo(_event: Event) {

  }

}
