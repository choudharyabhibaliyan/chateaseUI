import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';
import { ToastrService } from 'ngx-toastr';

export interface loginCred {
  username: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../signup/signup.component.css']
})

export class LoginComponent {
  validateCred: FormGroup;
  profilePic:any;
  constructor(private router: Router,private appService:AppService,private tost:ToastrService) {
    this.validateCred = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    console.log(JSON.stringify(this.validateCred.value));
    this.appService.login(this.validateCred.value).subscribe((responce:any) =>{
      localStorage.removeItem("userId");
      localStorage.setItem("isLogin", "loginSuccess");
      localStorage.setItem("token",responce.data.token);
      localStorage.setItem("userId",responce.data.id);
      localStorage.setItem("profilePic",responce.data.profilePic);
      // to broadcast the a variable 
     // this.appService.userLogout.next("Logout");
      this.router.navigate(['user/notification']);
    },
    (error:any) => {
      this.tost.warning("login failed");
    });
  }

}
