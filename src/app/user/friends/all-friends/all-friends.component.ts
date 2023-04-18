import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-all-friends',
  templateUrl: './all-friends.component.html',
  styleUrls: ['./all-friends.component.css']
})
export class AllFriendsComponent {
  userlist: any;

  constructor(private appService: AppService, private tost: ToastrService) {
    this.appService.getAllFriends().subscribe(
      (responce: { data: any; }) => {
        this.userlist = responce.data;
        console.log(JSON.stringify(this.userlist));
      }, (error: string | undefined) => {
        console.log("this is test");
        console.log(JSON.stringify(error));
        this.tost.error(error);
      }
    );
  }

  unfriend(id: number) {
    console.log(id)
    this.appService.unfriend(id).subscribe(
      (responce: { data: any; }) => {
        this.userlist = this.userlist.filter((o: { id: number; }) => o.id !== id)
        this.tost.success("unfriend success")
      }, (error: string | undefined) => {
        console.log("this is test");
        console.log(JSON.stringify(error));
        this.tost.error(error);
      });
  }
}
