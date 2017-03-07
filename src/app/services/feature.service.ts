import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { Feature } from '../models';
import {environment} from '../../environments';

@Injectable()
export class FeatureService {

  private baseUrl: string = environment.baseUrl;
  private uri: string = environment.featuresUri;

  constructor(private http: Http) { }

  /**
   * GET /api/features
   */
  getFeatures(): Observable<Feature[]> {
    return this.http.get(`${this.baseUrl}${this.uri}`)
                    .map(this.mapFeatures)
                    .catch(this.handleError);
  }


  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private mapFeatures(res: Response) {
    let body = res.json();
    return body || { };  
  }

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
