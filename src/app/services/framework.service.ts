import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { Dependency, Framework } from '../models';
import { environment } from '../../environments';

@Injectable()
export class FrameworkService {

  private baseUrl: string = environment.baseUrl;
  private uri: string = environment.featuresUri;
  private frameworksUri: string = environment.frameworksUri;

  constructor(private http: Http) { }

  /**
   * GET /api/frameworks
   */
  getFrameworks(): Observable<Framework[]> {
    return this.http.get(`${this.baseUrl}${this.frameworksUri}`)
                    .map(this.mapFrameworks)
                    .catch(this.handleError);
  }

  /**
   * GET /api/features
   */
  getFeatures(): Observable<Dependency[]> {
    return this.http.get(`${this.baseUrl}${this.uri}`)
                    .map(this.mapDependencies)
                    .catch(this.handleError);
  }


  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private mapDependencies(res: Response) {
    let body = res.json();
    return body || { };  
  }

  private mapFrameworks(res: Response) {
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