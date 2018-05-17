import { Component, OnInit } from '@angular/core';
import * as microsoftTeams from '@microsoft/teams-js';
import { HttpServiceService } from '../services/http-service.service';
import { environment } from '../../environments/environment';
import { TeamInformation } from '../models/TeamInformation';
import { User } from '../models/UserInformation';

@Component({
  selector: 'app-nominate',
  templateUrl: './nominate.component.html',
  styleUrls: ['./nominate.component.css']
})
export class NominateComponent implements OnInit {

  teamId;
  channelId;
  teamName;
  channelName;
  UPN;
  groupId;
  show = false;
  teammembers: User[];

  constructor(private _httpService: HttpServiceService) { }

  ngOnInit() {
    microsoftTeams.initialize();
    microsoftTeams.getContext(this.showContext);
  }

  showContext = (Context: microsoftTeams.Context) => {
    this.teamId = Context.teamId;
    this.teamName = Context.teamName;
    this.groupId = Context.groupId;
    this.UPN = Context.upn;
    this.show = true;
    console.log(Context);
    const teamInfo = new TeamInformation(this.groupId, this.teamName, this.teamName, this.UPN);
    this._httpService.post(environment.AppUrl, teamInfo)
    .subscribe(data => {
                        console.log(data);
                        // this.teammembers = data;
                       });
  }
}
