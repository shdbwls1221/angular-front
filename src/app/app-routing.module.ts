import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: 'group', component: GroupListComponent },
  { path: 'group/new', component: GroupFormComponent },
  { path: 'group/:groupId', component: GroupFormComponent },
  { path: 'group/:groupId/users', component: UserListComponent },
  { path: 'group/:groupId/user/new', component: UserFormComponent },
  { path: 'group/:groupId/user/:userId', component: UserFormComponent },
  { path: '**', component: GroupListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
