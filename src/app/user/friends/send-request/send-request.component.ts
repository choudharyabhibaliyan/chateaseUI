import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent {

  userlist: any;

  constructor(private appService: AppService, private tost: ToastrService) {
    console.log("send request service ------------------")
    this.appService.getAllSendRequests().subscribe(
      (responce: { data: any; }) => {
        this.userlist = responce.data
      },
      (error: { data: any; }) => {
        console.log(error.data);
      }
    )
  }

  deleteRequest(id: number) {
    this.appService.deleteSentRequest(id).subscribe(
      (responce: any) => {
        if (responce.data == true) {
          this.userlist = this.userlist.filter((o: { id: number; }) => o.id !== id);
          this.tost.success("request deleted success");
        }
      }
    );
  }

}
