import { Component, OnInit } from '@angular/core';
import { GroupService } from '../service/group.service';
import { Group } from '../model/group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css'],
  providers: [GroupService]
})
export class GroupListComponent implements OnInit {

  selectedGroupId: string;
  groups: Group[];

  constructor(private groupService: GroupService) { }

  clickTabMenu(groupId: string){
    this.selectedGroupId = groupId;
  }

  ngOnInit() {
    this.groupService.findAll().subscribe(data => {
      this.groups = data;
    });
  }

}
