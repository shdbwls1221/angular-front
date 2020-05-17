import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../service/group.service';
import { Group } from '../model/group';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {

  group: Group = new Group();

  constructor(private groupService: GroupService,
              private route: ActivatedRoute,
              private router: Router) { }

  onNgSubmit() {
    if (!this.group.id){
      this.groupService.addGroup(this.group).subscribe(() => {
        this.goGroupList();
      });
    } else{
      this.groupService.modifyGroup(this.group).subscribe(() => {
        this.goGroupList();
      });
    }
  }

  goGroupList() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (!params.get('groupId')) { return; }
      this.groupService.findGroup(params.get('groupId')).subscribe(data => {
        this.group = data;
      });
    });
  }

}
