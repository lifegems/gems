import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { TopicContainer } from './../shared/topic-container';
import { ApiService } from './../shared/api.service';

@Injectable()
export class TermsService extends ApiService {
  private GET_URL: string = this.URL + 'terms';

  constructor(private http: Http) {
    super();
  }

  addTerm(strTerm, strDefinition): Observable<TopicContainer[]> {
    let body = JSON.stringify({
      "name": strTerm,
      "description": strDefinition
    });
    console.log(body);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.GET_URL, body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  listTerms(): Observable<TopicContainer[]> {
    return this.http.get(this.GET_URL)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}