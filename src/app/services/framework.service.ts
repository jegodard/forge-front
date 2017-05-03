import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType, Headers, RequestOptions } from '@angular/http'
import { ConfigService } from '@nglibs/config';
import { Observable } from 'rxjs/Rx'
import { Dependency, Framework } from '../models';

@Injectable()
export class FrameworkService {

  private baseUrl: string = this.config.getSettings('api', 'baseUrl');
  private frameworksUri: string = this.config.getSettings('uri', 'frameworks');

  constructor(private http: Http, private readonly config: ConfigService) { }

  /**
   * GET /api/frameworks
   */
  getFrameworks(): Observable<Framework[]> {
    return this.http.get(`${this.baseUrl}${this.frameworksUri}`)
                    .map(this.mapFrameworks)
                    .catch(this.handleError);
  }

  /**
   * POST /api/frameworks/waitingDependencies
   */
  postWaitingDependency(dependency: Dependency) {    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, responseType: ResponseContentType.Json });
    
    return this.http.post(`${this.baseUrl}${this.frameworksUri}/waitingDependencies`, JSON.stringify(dependency), options)
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
