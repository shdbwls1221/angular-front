import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../model/group';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  url = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  public findAllUsers(groupId: string): Observable<Group> {
    return this.http.get<Group>(this.url + '/group/' + groupId);
  }

  public findUser(user: User): Observable<User> {
    return this.http.get<User>(this.url + '/group/user/' + user.id);
  }

  public addUser(newUser: User): Observable<any> {
    return this.http.post(this.url + '/group/user', newUser);
  }

  public modifyUser(chngUser: User): Observable<any> {
    return this.http.put(this.url + '/group/user/' + chngUser.id, chngUser);
  }

  public deleteUser(userId: string): Observable<any> {
    return this.http.delete(this.url + '/group/user/' + userId);
  }
}
