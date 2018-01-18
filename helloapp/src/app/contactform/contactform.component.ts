
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  log(x){console.log(x)};
  submit(f){
    console.log(f);
  }

}




/*
import {Component ,OnInit} from "@angular/core";
import {AuthService} from "../auth.service";

@Component({
  selector:'app-contactform',
  template:`
  <div>
    <p>This is the angular form</p>
    Name:
    <input #usernameRef type="text"><br/>
    Password:
    <input #passwordRef type="password">

    <button (click)="onClick(usernameRef.value,passwordRef.value)">login</button>

  </div>
  `,

  styles:[]
})
export class ContactformComponent implements OnInit{
  service:AuthService;

  //onClick(username,password){
   // console.log('username:'+username+"\n\r"+"password:"+password);
 // }
  constructor(){
    this.service=new AuthService();
  }
  ngOnInit(){
  }
  onClick(username,password){
    console.log('auth result is:'+this.service.contactformWithCredentials(username,password));
  }

}


*/



/*

//twoway binding

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactform',
  template: `
    <div>
      name:
      <input type="text"
        [(ngModel)]="name"
        /><br/>
      password:
      <input type="password"
        [(ngModel)]="password"
        />
      <button (click)="onClick()">Login</button><br/>

      <label >{{name}}</label><br/>
      {{password}}
    </div>
  `,
  styles: []
})
export class ContactformComponent implements OnInit {

name='';
password='';

  constructor() {
  }
  ngOnInit() {
  }
  onClick() {
    console.log( this.name+this.password );
  }

}
*/



