import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ChatComponent } from './chat/chat.component';
import { PostComponent } from './post/post.component';
import { SettingsComponent } from './settings/settings.component';
import { AgePipe } from '../pipes/age.pipe';
const route: Routes = [
  {
    path:'',component: UserComponent,children: [
      {path:'',redirectTo:'/notification',pathMatch:'full'},
      { path:'notification',component:NotificationComponent },
      { path:'sms',         component:ChatComponent },
      {path:'post',         component:PostComponent},
      { path:'friends',     loadChildren: () => import('./friends/friends.module').then(m => m.FriendsModule) },
      { path:'dashbord',    component:DashbordComponent },
      { path:'setting',     component:SettingsComponent }
    ]
  }
];

@NgModule({
  declarations: [
    UserComponent,
    NotificationComponent,
    DashbordComponent,
    ChatComponent,
    PostComponent,
    SettingsComponent,
    AgePipe
  ],
  imports: [
    RouterModule.forChild(route),
    CommonModule,
    FormsModule
  ],
  exports: [
  ],
  bootstrap: []
})
export class UserModule { }
