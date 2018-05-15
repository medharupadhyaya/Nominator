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
    microsoftTeams.initialize();

  }

  save = (saveEvent: microsoftTeams.settings.SaveEvent) => {
      microsoftTeams.settings.setSettings({
      entityId: 'Nominator',
      contentUrl: 'https://nominator1.azurewebsites.net/config',
      suggestedDisplayName: 'nominator',
      websiteUrl: 'https://nominator1.azurewebsites.net/config',
      removeUrl: 'https://teams-get-started-sample.azurewebsites.net/tabremove.html',
    });
    saveEvent.notifySuccess();
    console.log('saved');
  }
  confirm() {
    microsoftTeams.settings.registerOnSaveHandler(this.save);
    microsoftTeams.settings.setValidityState(true);
  }

}
