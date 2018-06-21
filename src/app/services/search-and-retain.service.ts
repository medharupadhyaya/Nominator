import { Injectable } from '@angular/core';
import {Http,Response,Request,Headers,RequestMethod,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import {SearchStructure} from '../models/search-structure';
@Injectable({
  providedIn: 'root'
})
export class SearchAndRetainService {

  constructor(private httpObj:Http) { }
  SearchbyDocumentTitle(documentTitle:string)
  {
    console.log("Doc title in service: "+documentTitle  );
    //team id to be replaced
    return this.httpObj.get("http://localhost:53879/api/searchinretention/0a5a28f4-8c4c-4d9b-9349-28892783c576/"+documentTitle).map((res:Response)=> <SearchStructure[]> res.json()).catch(this.handleError);
  }
  SearchbyAuthor(author:string)
  {
    return this.httpObj.get("http://localhost:53879/api/searchinretention/param1/0a5a28f4-8c4c-4d9b-9349-28892783c576/"+author).map((res:Response)=> <SearchStructure[]> res.json()).catch(this.handleError);
  }
  handleError(errorResponse:Response)
  {
     console.log(errorResponse);
    return  Observable.throw(errorResponse);
  }
}
