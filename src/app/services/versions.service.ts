import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse} from "@angular/common/http";
import {RequestOptions,Headers} from '@angular/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VersionsService {

  constructor(private http:HttpClient) { }
  private url="http://localhost:54983//api/author";

  postMethod(versionObject):Observable<any>{
    
    return this.http.post(this.url,versionObject);
  }
  private urlId="https://futureofworkheadlessservice.azurewebsites.net/api/GetPhoto"
  GetImage(userId){
    const urlId:string = `${this.urlId}/${userId}`
    return this.http.get(urlId,{responseType: 'blob' });
  }
}
