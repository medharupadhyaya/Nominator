import { Component, OnInit } from '@angular/core';
import { User } from '../models/UserInformation';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { HttpServiceService } from '../services/http-service.service';
import { environment } from '../../environments/environment.prod';

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
  constructor(private router: Router, private data: DataService, private http: HttpServiceService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(data => this.user = data);
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
}
