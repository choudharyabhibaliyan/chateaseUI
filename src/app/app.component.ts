import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { LoginServiceService } from 'src/services/loginService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public isLogin=localStorage.getItem("isLogin");
  constructor(private router:Router,private appService:AppService,protected loginService:LoginServiceService){
  }

  ngOnInit(): void {
    // to accept a broadcast request
    //  this.appService.userLogout.subscribe(v=>{
    //   console.log(v)
    //   this.userLogout=v;
    //  })
     this.router.navigate(['/user/notification'])
  }


  logout(){
    this.loginService.logout();
    this.router.navigateByUrl("/login")
  }
}
