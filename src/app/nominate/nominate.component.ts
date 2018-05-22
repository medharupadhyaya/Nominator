import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as microsoftTeams from '@microsoft/teams-js';
import { HttpServiceService } from '../services/http-service.service';
import { environment } from '../../environments/environment';
import { TeamInformation } from '../models/TeamInformation';
import { User } from '../models/UserInformation';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Nominationrequest } from '../models/NominatioRequest';


@Component({
  selector: 'app-nominate',
  templateUrl: './nominate.component.html',
  styleUrls: ['./nominate.component.css']
})
export class NominateComponent implements OnInit, AfterViewInit {

  teamId;
  teamName;
  UPN;
  groupId;
  show = false;
  teammembers: User[];
  constructor(private _httpService: HttpServiceService, private router: Router, private data: DataService) { }

  ngOnInit() {
    microsoftTeams.initialize();
    microsoftTeams.getContext(this.showContext);
    this._httpService.get(environment.AppUrl + '/api/teams').subscribe(data => { });
  }

  ngAfterViewInit(): void {
    if (this.teammembers === null || this.teammembers === undefined) {
      setTimeout(() => {
        this.getdata();
      }, 4000);
    }
  }

  showContext = (Context: microsoftTeams.Context) => {
    this.teamName = Context.teamName;
    this.groupId = Context.groupId;
    this.UPN = Context.upn;
    this.show = true;
    const teamInfo = new TeamInformation(this.groupId, this.teamName, this.teamName, this.UPN);
    this._httpService.post(environment.AppUrl + '/api/teamsInformation', teamInfo)
      .subscribe(data => {
        this.teammembers = data;
        this.show = true;
      });
  }

  getdata() {
    const teamInfo =
      new TeamInformation(this.groupId, this.teamName, this.teamName, this.UPN);
    this._httpService.post(environment.AppUrl + '/api/teamsInformation', teamInfo)
      .subscribe(data => {
        this.teammembers = data;
        this.show = true;
      });
  }

  Nominate(member) {
    this.data.changeUser(member);
    this.data.changeTeamID(this.groupId);
    this.data.changeTeamName(this.teamName);
    this.router.navigate(['/details']);
  }

  Confirm(member: User) {
    const nominationRequest = new Nominationrequest(
      member.profile.userPrincipalName,
      this.groupId,
      this.teamName);
    this._httpService.post(environment.AppUrl + '/api/Nomination', nominationRequest)
      .subscribe(data => console.log(data));
  }

}
