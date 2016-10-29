import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../shared/api.service';

@Injectable()
export class NotesService extends ApiService {

   constructor(private http: Http) {
      super();
   }

   listNotes(booknumber, chapter): Observable<any> {
      return this.http.get(this.URL + "notes/" + booknumber + "/" + chapter)
         .map((res: Response) => res.json())
         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }

   addNote(body): Observable<any[]> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    let POST_URL = this.URL + 'notes';

    return this.http.post(POST_URL, body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error for /api/notes'));
   }
}