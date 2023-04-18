import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-incomming-requests',
  templateUrl: './incomming-requests.component.html',
  styleUrls: ['./incomming-requests.component.css']
})
export class IncommingRequestsComponent {

  userlist:any;
  
  constructor(private appService:AppService,private tost:ToastrService){
    this.appService.getAllIncommingRequests().subscribe(
      (responce: { data: any; }) =>{
        this.userlist = responce.data;
        console.log(JSON.stringify(this.userlist));
      },(error: string | undefined)=>{
        console.log("this is test");
        console.log(JSON.stringify(error));
        this.tost.error(error);
      }
    );
  }

  deleteIncomingRequest(id:number){
    this.appService.deleteIncomingRequest(id).subscribe(
      (responce: any) => {
        if (responce.data == true) {
          this.userlist = this.userlist.filter((o: { id: number; }) => o.id !== id);
          this.tost.success("request deleted success");
        }
      },(error)=>{

      }
    );
  }

  acceptIncomingRequest(id:number){
    this.appService.acceptIncomingRequest(id).subscribe(
      (responce: any) => {
        if (responce.data == true) {
          this.userlist = this.userlist.filter((o: { id: number; }) => o.id !== id);
          this.tost.success("request accepted success");
        }
      },(error)=>{

      }
    );
  }

}
