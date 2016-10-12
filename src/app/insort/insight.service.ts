import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './../shared/api.service';

@Injectable()
export class InsightService extends ApiService {
  private GET_URL: string = this.URL + 'it';

  constructor(private http: Http) {
    super();
  }

  listArticles(): Observable<any[]> {
    return this.http.get(this.GET_URL)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}