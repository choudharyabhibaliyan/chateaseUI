import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/services/app.service';


export interface UserData {
  city: string,
  contactNo: string,
  email: string,
  gender: string,
  password: string,
  pincode: string,
  state: string,
  username: string,
  image:string,
  status:string,
  dob:string,
  profilePic:string
}

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

@Output() clickOutside = new EventEmitter();

detailsVisible:boolean=true;
user:any;
date:Date = new Date("01/04/1998");




constructor(private appService:AppService,private tost:ToastrService){
  this.appService.getUser().subscribe(
    (responce: { data: { city: string; contactNo: string; email: string; dob: string; gender: string; password: string; pincode: number; state: string; username: string; image: string; status: string; }; }) =>{
      this.user = responce.data;
      console.log(this.user);
    },(error: string | undefined)=>{
      console.log(error);
      this.tost.error(error);
    }
  );
}

enableEdit(){
  this.detailsVisible=false;
}
disableEdit(){
  this.detailsVisible=true;
  this.user.status='';
}

onFileSelected(event:any){
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    console.log(file)
    this.appService.uploadImage(formData).subscribe(
      (responce:any)=>{
        console.log(responce.data)
       this.user.profilePic=responce.data;
       localStorage.removeItem("profilePic");
       localStorage.setItem("profilePic",responce.data);
      }
    );
  }





}
