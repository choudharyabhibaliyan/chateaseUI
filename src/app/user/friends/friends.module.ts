import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends.component';
import { RouterModule, Routes } from '@angular/router';
import { AddfrendComponent } from './addfrend/addfrend.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { IncommingRequestsComponent } from './incomming-requests/incomming-requests.component';
import { AllFriendsComponent } from './all-friends/all-friends.component';

const rout: Routes = [ 
  {path:'',component:FriendsComponent,children :[
  {path:'',redirectTo:'addFriends' , pathMatch:'full'},
  {path:'' , component:AddfrendComponent},
  {path:'addFriends' , component:AddfrendComponent},
  {path:'sentRequests',component:SendRequestComponent},
  {path:'incommingRequests',component:IncommingRequestsComponent},
  {path:'allFriends',component:AllFriendsComponent}
]}
];


@NgModule({
  declarations: [
    FriendsComponent,
    AddfrendComponent,
    SendRequestComponent,
    IncommingRequestsComponent,
    AllFriendsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(rout)
  ],
  exports: [],
  bootstrap: []
})
export class FriendsModule { }
