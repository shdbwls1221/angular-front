import { Component, OnInit } from '@angular/core';
import { GroupService } from './service/group.service';
import { Group } from './model/group';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GroupService]
})
export class AppComponent implements OnInit {

  title = 'angular02';
  selectedGroupId: string;
  groups: Group[];

  constructor(private groupService: GroupService) {
  }

  clickTabMenu(groupId: string){
    this.selectedGroupId = groupId;
  }

  ngOnInit() {
    //모든 그룹 정보
    this.groupService.findAll().subscribe(data => {
      this.groups = data;
    });
  }
}
