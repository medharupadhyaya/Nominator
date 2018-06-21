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
  SearchbyDocumentTitle(documentTitle:string)
  {
    console.log("Doc title in service: "+documentTitle  );
    return this.httpObj.get(environment.documentSearchAndRetainUrl+"/api/searchinretention/0a5a28f4-8c4c-4d9b-9349-28892783c576/"+documentTitle).pipe(catchError(this.handleError));
  }
  SearchbyAuthor(author:string)
  {
    return this.httpObj.get(environment.documentSearchAndRetainUrl+"/api/searchinretention/param1/0a5a28f4-8c4c-4d9b-9349-28892783c576/"+author).pipe(catchError(this.handleError));
  }
  handleError(errorResponse:Response)
  {
     console.log(errorResponse);
    return  Observable.throw(errorResponse);
  }
}
