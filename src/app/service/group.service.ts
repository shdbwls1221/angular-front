import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../model/group';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GroupService {

  url = 'http://localhost:8081';
  group: Group;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Group[]> {
    return this.http.get<Group[]>(this.url);
  }

  public findGroup(groupId: string): Observable<Group> {
    return this.http.get<Group>(this.url + '/group/' + groupId);
  }

  public addGroup(newGroup: Group): Observable<any> {
    return this.http.post(this.url + '/group', newGroup);
  }

  public modifyGroup(chngGroup: Group): Observable<any> {
    return this.http.put(this.url + '/group/' + chngGroup.id, chngGroup);
  }

  public deleteGroup(groupId: string): Observable<any> {
    return this.http.delete(this.url + '/group/' + groupId);
  }

}
