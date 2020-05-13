import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../model/group';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public findAllUsers(groupId: string): Observable<Group> {
    return this.http.get<Group>('http://localhost:8080/group/' + groupId);
  }
}
