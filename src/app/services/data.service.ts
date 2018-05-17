import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../models/UserInformation';


@Injectable()
export class DataService {

  private User = new BehaviorSubject<User>(null);
  private TeamID = new BehaviorSubject<string>(null);
  private TeamName = new BehaviorSubject<string>(null);

  currentMessage = this.User.asObservable();
  currentTeamID = this.TeamID.asObservable();
  currentTeamName = this.TeamName.asObservable();

  changeUser(user: User) {
    this.User.next(user);
  }

  changeTeamID(teamid: string) {
    this.TeamID.next(teamid);
  }

  changeTeamName(teamname: string) {
    this.TeamName.next(teamname);
  }
}
