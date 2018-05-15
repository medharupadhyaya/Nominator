import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NominateComponent } from './nominate/nominate.component';
import { ConfigurationComponent } from './configuration/configuration.component';

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
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
