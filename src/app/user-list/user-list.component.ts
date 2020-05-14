import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  groupId: string;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {  }

  onGoBack(){
    this.router.navigate(['/']);
  }

  delUser(userId: string){
    this.userService.deleteUser(userId).subscribe(() => {
      // 새로고침
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/group/' + this.groupId + '/users']);
      });
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.groupId = params.get('groupId');
      this.userService.findAllUsers(this.groupId).subscribe(data => {
        this.users = data.users;
      });
    });
  }

}
