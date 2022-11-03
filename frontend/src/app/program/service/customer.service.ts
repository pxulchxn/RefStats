import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/program/api/customer';

@Injectable({
    providedIn: 'root',
})
export class MatchService {

    constructor(private http: HttpClient) { }

    getCustomersSmall() {
        return this.http.get<any>('assets/demo/data/matches.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }

    getCustomersMedium() {
        return this.http.get<any>('assets/demo/data/matches.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }

    getCustomersLarge() {
        return this.http.get<any>('assets/demo/data/matches.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }

  getMatches() {
    return this.http.get<any>('assets/demo/data/matches.json')
      .toPromise()
      .then(res => res.data as Customer[])
      .then(data => data);
  }

}
