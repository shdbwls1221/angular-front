import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupFormComponent } from './group-form/group-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'group/:groupId/users', component: UserListComponent },
  { path: 'group/:groupId', component: GroupFormComponent },
  { path: '**', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
