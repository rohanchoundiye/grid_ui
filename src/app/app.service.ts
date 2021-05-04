import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  getData(): Observable<any> {
    return this._http.get(environment.baseURL);
  }
}
