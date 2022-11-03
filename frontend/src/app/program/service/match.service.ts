import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Match} from 'src/app/program/api/match';

@Injectable({
  providedIn: 'root',
})
export class MatchService {

  constructor(private http: HttpClient) {
  }

  getMatches() {
    return this.http.get<any>('assets/demo/data/matches.json')
      .toPromise()
      .then(res => res.data as Match[])
      .then(data => data);
  }

}
