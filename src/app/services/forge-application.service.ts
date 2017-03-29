import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { environment } from '../../environments';

import { ForgeApplication, Dependency } from '../models'


@Injectable()
export class ForgeApplicationService {

  private baseUrl: string = environment.baseUrl;
  private uri: string = environment.generateAppUri;

  constructor(private http: Http) { }

  /**
   * 
   */
  forgeApplication(forgeApplication: ForgeApplication) {    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, responseType: ResponseContentType.Blob });
    
    return this.http.post(`${this.baseUrl}${this.uri}`, JSON.stringify(forgeApplication), options)
                    .catch(this.handleError);                    
  }

  /**
   * 
   */
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
 
}