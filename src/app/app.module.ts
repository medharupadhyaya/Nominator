import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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

import { AppComponent } from './app.component';
import { NominateComponent } from './nominate/nominate.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { HttpServiceService } from './services/http-service.service';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { User } from './models/UserInformation';
import { DataService } from './services/data.service';
import { SearchMemberPipe } from './pipes/search-member.pipe';

const appRoutes: Routes = [
  { path: 'nominate', component: NominateComponent },
  { path: 'config', component: ConfigurationComponent},
  { path: 'details', component: UserdetailsComponent, data: User },
  { path: '*', redirectTo: '/nominate', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NominateComponent,
    ConfigurationComponent,
    UserdetailsComponent,
    SearchMemberPipe
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
    HttpClientModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatInputModule
  ],
  providers: [
    HttpServiceService,
    DataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
