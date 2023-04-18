import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-addfrend',
  templateUrl: './addfrend.component.html',
  styleUrls: ['./addfrend.component.css']
})
export class AddfrendComponent {
  userlist : any;

  constructor(private appService:AppService,private tost:ToastrService){
    this.appService.getUnKnownUsers().subscribe(
      (responce) =>{
        this.userlist = responce.data;
        console.log(JSON.stringify(this.userlist));
      },(error)=>{
        console.log("this is test");
        console.log(JSON.stringify(error));
        this.tost.error(error);
      }
    );
  }

  sendFriendRequest(id:number){
    this.appService.sendFriendRequest(id).subscribe(
      (res:any) =>{
        if(res.data == true){
         this.userlist = this.userlist.filter((o: { id: number; }) => o.id !== id)
           this.tost.success("request send success ");
        }else{
          this.tost.error("request send fail ");
        }
      },(err:any)=>{
        this.tost.error(err);
      }
    );
  }

}
