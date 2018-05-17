import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServiceService {

  constructor(private _http: Http) { }

  public post(url, data: any): Observable<Response> {
    const headers: Headers = new Headers({'content-Type': 'application/json'});
    const options: RequestOptions = new RequestOptions({headers: headers});
    return this._http.post(url, data, options)
        .map(
            (response: Response) => {
                console.log(response);
                return response.json();
        }
    );
}

}
