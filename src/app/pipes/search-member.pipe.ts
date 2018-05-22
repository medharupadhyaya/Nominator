import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/UserInformation';

@Pipe({
  name: 'searchMember'
})
export class SearchMemberPipe implements PipeTransform {

  transform(Users: User[], searchText: string): User[] {
    console.log(searchText === undefined);
    if (searchText === undefined) {
      console.log(Users);
      return Users;
  } else {
    return Users.filter( all => {
      return all.profile.displayName.toLowerCase().includes(searchText.toLowerCase());
    });
  }
  }

}
