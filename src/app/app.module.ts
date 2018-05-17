import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { NominateComponent } from './nominate/nominate.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { HttpServiceService } from './services/http-service.service';

const appRoutes: Routes = [
  { path: 'nominate', component: NominateComponent },
  { path: 'config', component: ConfigurationComponent},
  { path: '*', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NominateComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
