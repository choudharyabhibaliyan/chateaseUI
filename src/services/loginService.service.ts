import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  isLogeIn(){
    let token =localStorage.getItem("token");
    if(token == undefined || token=='' || token ==null){
      return false;
    }else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("profilePic");
    localStorage.clear();
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }

  getCurrentUserId(){
    return localStorage.getItem("userId");
  }
}
