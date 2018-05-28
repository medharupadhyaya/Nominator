import { Component, OnInit } from '@angular/core';
import { User } from '../models/UserInformation';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { HttpServiceService } from '../services/http-service.service';
import { environment } from '../../environments/environment';
import { Nominationrequest } from '../models/NominatioRequest';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  user: User;
  training = true;
  rating = false;
  skills = false;
  imageToShow: any;
  isImageLoading = false;
  constructor(private notif: NotificationsService,
    private router: Router, private data: DataService, private http: HttpServiceService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(data => this.user = data);
    console.log(this.user);
    this.getImageFromService();
  }

  Back() {
    this.router.navigate(['/nominate']);
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.http.getImage(environment.AppUrl + '/api/getPhoto/' + this.user.profile.userId).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
}

  Nominate() {
    let teamId, teamname;
    this.data.currentTeamID.subscribe(data => teamId = data);
    this.data.currentTeamName.subscribe(data => teamname = data);
    const nominationRequest = new Nominationrequest(
      this.user.profile.userPrincipalName,
      teamId,
      teamname);
      this.http.post(environment.AppUrl + '/api/Nomination', nominationRequest)
      .subscribe(data => console.log(data));
      this.notif.success(
        'Success',
        'Successfully nominated',
        {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
          maxLength: 50
        }
      );
  }
}
