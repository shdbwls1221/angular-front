import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
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
    this.groupService.modifyGroup(this.group);
    this.goUserList();
  }

  goUserList() {
    this.router.navigate(['']);
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
