import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType, Headers, RequestOptions } from '@angular/http'
import { ConfigService } from '@nglibs/config';
import { Observable } from 'rxjs/Rx'
import { Dependency } from '../models';

@Injectable()
export class DependencyService {

    private baseUrl: string = this.config.getSettings('api', 'baseUrl');
    private dependenciesUri: string = this.config.getSettings('uri', 'dependencies');

    constructor(private http: Http, private readonly config: ConfigService) { }

    /**
     * POST /api/dependencies/request
     */
    postRequestDependency(dependency: Dependency) {    
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, responseType: ResponseContentType.Json });

        return this.http.post(`${this.baseUrl}${this.dependenciesUri}/request`, JSON.stringify(dependency), options)
                        .catch(this.handleError);                    
    }


    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }


    private handleError (error: Response | any) {
        console.error(error.json());
        return Observable.throw(error.json() || '');
    }

}
