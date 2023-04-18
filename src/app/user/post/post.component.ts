import { Component } from '@angular/core';
import { AppService } from 'src/services/app.service';

export interface Post{
  userId:number;
  postText:string;
  image:string;
  postId:number;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  postlist:any;
  formData:any;
  postText:any;
  post!:Post;
  constructor(private appService:AppService){
    appService.getAllPosts().subscribe(
      (response:any)=>{
        console.log(response)
        this.postlist=response.data;
        console.log(this.postlist)
      },(error:any)=>{
        
      }
    );
  }

  addPostImage(event:any){
    const file = event.target.files[0];
    this.formData = new FormData();
    this.formData.append('image', file);
    this.appService.addNewPost(this.formData).subscribe(
      (responce:any)=>{
        this.post=responce.data;
        console.log(this.post)
      },(error)=>{

      }
    );
  }

  updateTestOnPost(){
    this.post.postText=this.postText;
    if(this.postText!=null && this.postText!='' && this.postText!=undefined){
      this.appService.updateTextOnPost(this.post).subscribe((responce:any)=>{

      });
    }
  }

}
