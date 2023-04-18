import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginServiceService } from './loginService.service';
import { Post } from 'src/app/user/post/post.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public baseURL = 'http://localhost:7000';
  httpHeader = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    })
  };
  // variable created for broadcasting
  // public userLogout = new Subject<string>();
  constructor(private http: HttpClient,private loginService:LoginServiceService) { }
  id = this.loginService.getCurrentUserId();
  login(cred:any) :any {
    return this.http.post<any>(`${this.baseURL}/token`,cred);
  }

  regester(user: any) {
    return this.http.post<any>(`${this.baseURL}/register`,user);
  }

  getUnKnownUsers() {
    console.log(this.httpHeader.headers.getAll);
    return this.http.get<any>(`${this.baseURL}/findUnknownUsers/${this.id}`,this.httpHeader);
  }

  sendFriendRequest(id:number):any {
    return this.http.put(`${this.baseURL}/sendFriendRequest/${this.id}/${id}` ,this.httpHeader);
  }

  getAllSendRequests():any {
    return this.http.get(`${this.baseURL}/getAllSendRequestsByUser/${this.id}` , this.httpHeader );
  }

  getAllIncommingRequests():any {
    return this.http.get(`${this.baseURL}/getAllRequestsByUser/${this.id}` , this.httpHeader );
  }

  getAllFriends():any {
    return this.http.get(`${this.baseURL}/getAllFriends/${this.id}` , this.httpHeader );
  }

  deleteSentRequest(removeUserId:number):any {
    return this.http.put(`${this.baseURL}/deleteSentRequest/${this.id}/${removeUserId}` ,this.httpHeader);
  }

  deleteIncomingRequest(removeUserId: number) {
    return this.http.put(`${this.baseURL}/deleteIncomingRequest/${this.id}/${removeUserId}` ,this.httpHeader);
  }

  acceptIncomingRequest(id: number) {
    return this.http.put(`${this.baseURL}/acceptRequest/${this.id}/${id}` ,this.httpHeader);
  }

  unfriend(id: number):any {
    return this.http.put(`${this.baseURL}/unfriend/${this.id}/${id}` ,this.httpHeader);
  }

  getUser() :any  {
    return this.http.get(`${this.baseURL}/getCurrentUser/${this.id}`,this.httpHeader);
  }

  uploadImage(formData:FormData):any {
    return this.http.post(`${this.baseURL}/uploadProfilePicture/${this.id}`,formData,this.httpHeader);
  }

  addNewPost(formData: any) {
    return this.http.post(`${this.baseURL}/post/${this.id}`,formData,this.httpHeader);
  }

  updateTextOnPost(post: Post) {
    return this.http.put(`${this.baseURL}/post/${this.id}`,post,this.httpHeader);
  }

  getAllPosts():any {
    return this.http.get(`${this.baseURL}/post`,this.httpHeader);
  }

}
