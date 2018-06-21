import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Http,HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';

import {
  MatDividerModule,
  MatGridListModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatInputModule
} from '@angular/material';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppComponent } from './app.component';
import { NominateComponent } from './nominate/nominate.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { HttpServiceService } from './services/http-service.service';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { User } from './models/UserInformation';
import { DataService } from './services/data.service';
import {SearchAndRetainService} from './Services/search-and-retain.service';
import { SearchMemberPipe } from './pipes/search-member.pipe';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: 'nominate', component: NominateComponent },
  { path: 'config', component: ConfigurationComponent},
  { path: 'details', component: UserdetailsComponent, data: User },
  {path: 'search', component:SearchComponent},
  { path: '*', redirectTo: '/nominate', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NominateComponent,
    ConfigurationComponent,
    UserdetailsComponent,
    SearchMemberPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    RouterModule.forRoot(
      appRoutes
    ),
    SimpleNotificationsModule.forRoot(),
    HttpClientModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatInputModule,
    HttpModule
  ],
  providers: [
    HttpServiceService,
    DataService,
    SearchAndRetainService,
   
    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
