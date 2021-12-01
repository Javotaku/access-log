import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcceslogService {

  constructor(private httpClient: HttpClient) { }

  async getAccessLog() {
    return this.httpClient.get(`https://api-sp-project.herokuapp.com/api/access-log?to=100`).toPromise();
  }
}
