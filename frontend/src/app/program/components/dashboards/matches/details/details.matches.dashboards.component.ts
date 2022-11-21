import {Component} from '@angular/core';
import {MessageService, ConfirmationService} from 'primeng/api';
import {Match} from "../../../../api/match";
import {MatchService} from "../../../../service/match.service";

@Component({
  templateUrl: './details.matches.dashboards.component.html',
  providers: [MessageService, MessageService, ConfirmationService]
})
export class DetailsMatchesDashboardsComponent {

  mannschaftsart: any[] = [];

  league: any[] = [];

  function: any[] = [];

  value1: any[] = [];

  valCheck: boolean = false;

  matches1: Match[] = [];

  loading: boolean = true;

  constructor(private matchService: MatchService) {
  }


  ngOnInit() {
    this.matchService.getMatches().then(matches => {
      this.matches1 = matches;
      this.loading = false;

      // @ts-ignore
      this.matches1.forEach(match => match.date = new Date(match.date));
    });
    this.mannschaftsart = [
      {name: 'Herren', code: 'men'},
      {name: 'Frauen', code: 'women'},
      {name: 'Junioren', code: 'youth'}
    ];

    this.league = [
      {name: 'Landesliga', code: 'll'},
      {name: 'Bezirksliga', code: 'bzl'},
      {name: 'Kreisliga', code: 'kl'},
      {name: '1. Kreisklasse', code: '1kkl'},
      {name: '2. Kreisklasse', code: '2kkl'}
    ];

    this.function = [
      {name: 'Schiedsrichter', code: 'referee'},
      {name: '1. Assistent', code: 'first_assistent'},
      {name: '2. Assistent', code: 'second_assistent'},
      {name: '4. Offizieller', code: 'fourth_official'}
    ];
  }

}
