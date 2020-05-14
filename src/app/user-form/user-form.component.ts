import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {}

  onNgSubmit() {
    if (!this.user.id){
      this.userService.addUser(this.user).subscribe(() => {
        this.goUserList();
      });
    } else{
      this.userService.modifyUser(this.user).subscribe(() => {
        this.goUserList();
      });
    }
  }

  goUserList(): void{
    this.router.navigate(['/group/' + this.user.group.id + '/users']);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.user.group.id = params.get('groupId');
      if (params.get('userId') !== null) {
        this.user.id = params.get('userId');
        this.userService.findUser(this.user).subscribe(data => {
          this.user = data;
        });
      }
    });
  }

}
