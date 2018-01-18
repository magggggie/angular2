
/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`<ul>
    <li *ngFor="let course of courses;let i=index" >
      {{i}}--{{course}}
    </li>
  </ul>
  `
  //i=first,even,odd,
})
export class AppComponent {
  title = 'app works!';
  //courses=[1,2,3,4,5];
  courses=[ "course1","course2","course3","course4"];
  viewMode='map';
}
*/

/*
import {Component} from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{

  onChange(course){
    course.name='UPDATED'
  };

  courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
    {id:4,name:'course4'}

];
  onAdd(){
    this.courses.push({id:4, name:'course:4'})
  };

  onLoad(){
    this.courses=[
      {id:1,name:'course1'},
      {id:2,name:'course2'},
      {id:3,name:'course3'},
      {id:4,name:'course4'},

    ]
  }
  onRemove(course){
    let index=this.courses.indexOf(course);
    this.courses.splice(index,1)
  }
}

*/


import {Component} from "@angular/core";
@Component({
  selector: 'app-root',
  template:`<h1 highlighter>my custom dirctive </h1>`
})
export class AppComponent{

}

