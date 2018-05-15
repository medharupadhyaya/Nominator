import { Component, OnInit } from '@angular/core';
import * as microsoftTeams from '@microsoft/teams-js';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
}

  confirm() {
    microsoftTeams.settings.setValidityState(true);
  }

}
