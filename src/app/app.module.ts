import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GroupService } from './service/group.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './service/user.service';
import { GroupFormComponent } from './group-form/group-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    GroupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GroupService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
