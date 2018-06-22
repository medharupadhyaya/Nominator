import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators'
import {HttpClient } from '@angular/common/http';
import {SearchStructure} from '../models/search-structure';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchAndRetainService {

  constructor(private httpObj:HttpClient) { }
  SearchbyDocumentTitle(documentTitle:string,teamId:string)
  {
    console.log("Doc title in service: "+documentTitle  );
     return this.httpObj.get(environment.documentSearchAndRetainUrl+"/api/searchinretention/"+teamId+"/"+documentTitle).pipe(catchError(this.handleError));
    
 }
  SearchbyAuthor(author:string,teamId:string)
  {
    return this.httpObj.get(environment.documentSearchAndRetainUrl+"/api/searchinretention/param1/"+teamId+"/"+author).pipe(catchError(this.handleError));
  }
  handleError(errorResponse:Response)
  {
     console.log(errorResponse);
    return  Observable.throw(errorResponse);
  }
}
