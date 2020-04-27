import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from '../models/status.model';
import { Update } from '../models/update.model';
import { Wrapper } from '../models/wrappper.model';

@Injectable({
  providedIn: 'root'
})
export class VostptService {

  /*private url = '/Requests/';*/

  private url = '/api';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Wrapper>(this.url);
  }

  /*getStatus() {
    return this.http.get<Status>(this.url + 'get_status');
  }

  getLastUpdate() {
    return this.http.get<Update>(this.url + 'get_last_update');
  }

  getFullDataset() {
    return this.http.get<any>(this.url + 'get_full_dataset');
  }

  getEntry(date1: string, date2: string) {
    return this.http.get<any>(this.url + 'get_entry​/' + date1 + (date2 ? '_until_' + date2 : ''));
  }*/

}
