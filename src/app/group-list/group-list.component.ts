import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '../service/group.service';
import { Group } from '../model/group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css'],
  providers: [GroupService]
})
export class GroupListComponent implements OnInit {

  groups: Group[];

  constructor(private groupService: GroupService,
              private router: Router) { }

  delGroup(groupId: string){
    this.groupService.deleteGroup(groupId).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/group']);
      });
    });
  }

  ngOnInit() {
    this.groupService.findAll().subscribe(data => {
      this.groups = data;
    });
  }

}
