/*
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  posts:any[];
  private  url='https://jsonplaceholder.typicode.com/posts';
  constructor( private http:Http) {
    http.get(this.url)
      .subscribe(response=>{
        /*console.log(response.json());*/
/*
        this.posts=response.json();
      })
  }

  createPost(input:HTMLInputElement){
    let post={title:input.value};
    input.value='';
    this.http.post(this.url,JSON.stringify(post))
      .subscribe(response=>{
       /*post['id']=(response.json().id)-1;*/
/*
       post['id']=1;
       this.posts.splice(0,0,post);
        console.log(response.json());
      });
  }
  updatePost(post){
    this.http.patch(this.url+'/'+post.id,JSON.stringify({isRead:true}))

      .subscribe(response=>{
        console.log(response.json());
      })
  }
  deletePost(post){
    this.http.delete(this.url+'/'+post.id)
      .subscribe(response=>{
        let index=this.posts.indexOf(post);
        this.posts.splice(index,1);
        console.log(response.json());
      })
  }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(response=>{
        this.posts=response.json();
      });
  }

}
*/

import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {HtttpService} from "../htttp.service";


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  posts:any[];
  private  url='https://jsonplaceholder.typicode.com/posts';
  constructor( private service:HtttpService) {
  }

  createPost(input:HTMLInputElement){
    let post={title:input.value};
    input.value='';
    this.service.createPost(post)
      .subscribe(response=>{
       /*post['id']=response.json().id;*/

       post['id']=1;
       this.posts.splice(0,0,post);
        console.log(response.json());
      });
  }
  updatePost(post){
    this.service.updatePost(post)

      .subscribe(response=>{
        console.log(response.json());
      })
  }
  deletePost(post){
    this.service.deletePost(post)
      .subscribe(response=>{
        let index=this.posts.indexOf(post);
        this.posts.splice(index,1);
        console.log(response.json());
      })
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response=>{
        this.posts=response.json();
      });
  }

}
