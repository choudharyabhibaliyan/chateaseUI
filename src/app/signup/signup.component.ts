import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';
export interface User {
  city: string,
  contactNo: string,
  email: string,
  gender: string,
  password: string,
  pincode: string,
  state: string,
  username: string
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  validateUser: FormGroup;

constructor(private tost:ToastrService ,private router: Router, private appService:AppService ){
  this.validateUser = new FormGroup({
    username: new FormControl('',[Validators.required , Validators.minLength(3)]),
    email: new FormControl('',[Validators.email , Validators.required]),
    password:new FormControl('',[Validators.minLength(4),Validators.required]),
    state: new FormControl('',[Validators.required , Validators.minLength(3)]),
    city: new FormControl('',[Validators.required , Validators.minLength(2)]),
    pincode: new FormControl('',[Validators.required , Validators.minLength(3)]),
    contactNo: new FormControl('',[Validators.required , Validators.minLength(10)]),
    gender:new FormControl('',Validators.required)
  });
}

  onSubmit() {
    if(this.validateUser.valid){
      this.appService.regester(this.validateUser.value).subscribe(
        (responce :any) =>{
          this.tost.success("regesteration success ");
          this.router.navigateByUrl('/login');
        },(error :any)=>{
          this.tost.success("regesteration failed ");
        }
      );
    }else{
      for(const key in this.validateUser.controls){
        if(this.validateUser.controls[key].invalid){
          this.tost.warning("invalid key  "+key);
          break;
        }
      }
    }
  }


}
