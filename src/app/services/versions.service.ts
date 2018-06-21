import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse} from "@angular/common/http";
import {RequestOptions,Headers} from '@angular/http';
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VersionsService {

  constructor(private http:HttpClient) { }
  private url=environment.smeUrl+"/api/author";

  postMethod(versionObject):Observable<any>{
    
    return this.http.post(this.url,versionObject);
  }
  private urlId="https://futureofworkheadlessservice.azurewebsites.net/api/GetPhoto"
  GetImage(userId){
    const urlId:string = `${this.urlId}/${userId}`
    return this.http.get(urlId,{responseType: 'blob' });
  }
}
