import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class InsightService {
  // private URL: string = "https://api.mlab.com/api/1/databases/lifegems/collections/terms?apiKey=CY73dQUZRrVfx3SWzj77PZ8QbCk-6ilZ";
  private URL: string = "http://173.62.120.170:443/api/it";

  constructor(private http: Http) { }

  listArticles(): Observable<any[]> {
    return this.http.get(this.URL)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}