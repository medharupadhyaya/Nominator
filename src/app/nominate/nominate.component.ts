import { Component, OnInit } from '@angular/core';
import * as microsoftTeams from '@microsoft/teams-js';

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

  constructor() { }

  ngOnInit() {
    microsoftTeams.initialize();
  }

  getContext() {
    microsoftTeams.getContext(this.showContext);
  }

  showContext = (Context: microsoftTeams.Context) => {
    this.teamId = Context.teamId;
    this.teamName = Context.teamName;
    this.channelId = Context.channelId;
    this.channelName = Context.channelName;
    this.groupId = Context.groupId;
    this.UPN = Context.upn;
    this.show = true;
    console.log(Context);
  }

}
