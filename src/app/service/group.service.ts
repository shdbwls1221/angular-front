import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../model/group';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GroupService {

  url = 'http://localhost:8080';
  group: Group;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Group[]> {
    return this.http.get<Group[]>(this.url + '/groups');
  }

  public findGroup(groupId: string): Observable<Group> {
    return this.http.get<Group>(this.url + '/group/' + groupId);
  }

  public modifyGroup(chngGroup: Group): Observable<any> {
    this.http.put(this.url + '/group/' + chngGroup.id, chngGroup);
  }

}
