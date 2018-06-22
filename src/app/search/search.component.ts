import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as microsoftTeams from '@microsoft/teams-js';
import { SearchAndRetainService } from '../Services/search-and-retain.service';
import { VersionsService } from '../Services/versions.service';
import { SearchStructure } from '../models/search-structure';
import { PropertiesList } from "../models/PropertiesList";
import { Mapping } from "../models/Mapping";
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  teamId:string;
  searchResults: SearchStructure[];
  currentTitle: string;
  highlightedLines: string;
  result: Mapping;
  userMessage: string = "No searches made yet!";
  imageDisplay: any;
  isImageLoading = false;
  constructor(private serviceObj: SearchAndRetainService, private service: VersionsService) { }
  searchForm: FormGroup = new FormGroup(
    {
      searchBy: new FormControl('Title', Validators.required),
      searchText: new FormControl('', Validators.required)
    }
  );

  ngOnInit() {
     microsoftTeams.initialize();
    microsoftTeams.getContext(this.teamInformation);
  }
  teamInformation(context: microsoftTeams.Context)
  {
this.teamId=context.groupId;
  }
  view(name1: string, siteURL1: string, serverRelativeURL1: string, highlight: string) {
    this.currentTitle = name1;
    this.highlightedLines = highlight;
    console.log(name1);
    console.log(siteURL1);
    console.log(serverRelativeURL1);
    var versionObject: PropertiesList = { name: name1, siteURL: siteURL1, serverRelativeURL: serverRelativeURL1 };


    this.service.postMethod(versionObject).subscribe(
      data => {

        this.result = data;
        console.log(this.result);
        
      },
      error => {
        console.log(error);
      },
      () => {
        for(let user of this.result.listOfUserID)
        {
          this.service.GetImage(user).subscribe(
          data=> {
            
            this.createImageFromBlob(data);
            console.log("Image service called")
            console.log(data);
          }
        )

        }
        
      }
    )

  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageDisplay = reader.result;
      
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }


  clear() {
    this.result = null;
  }
  retain(fullPath: string) {
    console.log(fullPath);
    console.log("destination group id");
  }

  searchFunction() {

    console.log("go clicked");
    this.searchResults = null;
    this.userMessage = "Searching Teams! Please Wait";
    
    (document.getElementById("search") as HTMLButtonElement).disabled = true;
    if (this.searchForm.get("searchBy").value == "Title") {
      var searchtext = this.searchForm.get("searchText").value;
      console.log(searchtext);
      this.serviceObj.SearchbyDocumentTitle(searchtext,this.teamId).subscribe((data:any) => {
        this.searchResults = data;
        this.userMessage = "";
        (document.getElementById("search") as HTMLButtonElement).disabled = false;
        

        console.log(this.searchResults);
        console.log("count:" + this.searchResults.length);

        console.log("result obtained successfully");
      }, (error) => {

        console.log(error);
        (document.getElementById("search") as HTMLButtonElement).disabled = false;
        this.userMessage = "Error occured! Please try again later";
        
      });
      console.log("out of subscribe");
    }
    if (this.searchForm.get("searchBy").value == "Author") {
      var searchtext = this.searchForm.get("searchText").value;
      console.log(searchtext);
      this.serviceObj.SearchbyAuthor(searchtext,this.teamId).subscribe((data:any )=> {
        this.userMessage = "";
        this.searchResults = data;
        (document.getElementById("search") as HTMLButtonElement).disabled = false;
       

        console.log(this.searchResults);
        console.log("count:" + this.searchResults.length);

        console.log("result obtained successfully");
      }, (error) => {
        console.log(error);
        (document.getElementById("search") as HTMLButtonElement).disabled = false;
        this.userMessage = "Error occured! Please try again later";
        
      });
      console.log("out of subscribe");
    }
  }

}
