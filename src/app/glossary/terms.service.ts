import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { TopicContainer } from './../shared/topic-container';

@Injectable()
export class TermsService {
  private URL: string = "https://api.mlab.com/api/1/databases/lifegems/collections/terms?apiKey=CY73dQUZRrVfx3SWzj77PZ8QbCk-6ilZ";

  constructor(private http: Http) { }

  addTerm(strTerm, strDefinition): Observable<TopicContainer[]> {
    let body = JSON.stringify({
      "name": strTerm,
      "description": strDefinition
    });
    console.log(body);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.URL, body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  listTerms(): Observable<TopicContainer[]> {
    return this.http.get(this.URL)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}