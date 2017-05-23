import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType, Headers, RequestOptions } from '@angular/http'
import { ConfigService } from '@nglibs/config';
import { Observable } from 'rxjs/Rx'
import { Template } from '../models';

@Injectable()
export class TemplateService {

    private baseUrl: string = this.config.getSettings('api', 'baseUrl');
    private templatesUri: string = this.config.getSettings('uri', 'templates');

    constructor(private http: Http, private readonly config: ConfigService) { }

    /**
     * GET /api/templates
     */
    getTemplates(): Observable<Template[]> {
        return this.http.get(`${this.baseUrl}${this.templatesUri}`)
                        .map(this.mapTemplates)
                        .catch(this.handleError);
    }

    private mapTemplates(res: Response) {
        let body = res.json();
        return body || { };  
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
