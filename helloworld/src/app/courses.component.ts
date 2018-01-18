/*import{Component} from "@angular/core";

@Component({
  selector:'courses',
  template:'<h1 style="color:green">Courses</h1> '
})

export class CoursesComponent{

}



import{Component} from "@angular/core";
@Component({
  selector:'courses',
  template:'<h2>{{getTitle()}}</h2>'
})
export class CoursesComponent{
  title="List of courses";
   getTitle(){
    return this.title;
  }
}


import{Component} from "@angular/core";
import {CoursesService} from "./courses.service";

@Component({
  selector:'courses',
  template:`<h2>{{title}}</h2>
  <ul>
    <li *ngFor="let course of courses">
      {{course}}
    </li>
  </ul>`
})
export class CoursesComponent{
  title="List of courses";
  courses=["course1","courses2","courses3"]
}



import{Component} from "@angular/core";
import {CoursesService} from "./courses.service";

@Component({
  selector:'courses',
  template:`<h2>{{title}}</h2>
  <ul>
    <li *ngFor="let course of courses">
      {{course}}
    </li>
  </ul>`
})
export class CoursesComponent{
  title="List of courses";
  courses;

  constructor(private service:CoursesService){
    this.courses=service.getCourses();
  }
}



import {Component} from "@angular/core";
@Component({
  selector:'courses',
  template:`<button class="btn btn-primary">Save</button>`
})

export  class CoursesComponent{}



//class binding
import {Component} from "@angular/core";
@Component({
  selector:'courses',
  template:`
  <button class="btn btn-primary" [class.active]="isActive">Save</button>`
})
export class CoursesComponent{
  isActive=true;}



  //style binding
import {Component} from "@angular/core";
@Component({
  selector:'courses',
  template:`
  <button [style.backgroundColor] ="isActive?'blue':'white' ">Save</button>`
})
export class CoursesComponent{
  isActive=true;
}



//event binding
import {Component} from "@angular/core";
@Component({
  selector:'courses',
  template:`<div (click)="onDivClicked()">
    <button (click)="onSave($event)">Save</button>
  </div> `
})
export  class CoursesComponent{
  onDivClicked(){
    console.log('Div was clicked');
  }
  onSave($event){
    //$event.stopPropagation();
    console.log('Button was clicked',$event);
  }
}




//two way binding
import {Component} from "@angular/core";
@Component({
  selector:'courses',
  template:`
  <!--
  Name:<textarea [value]="name" (input)="name=$event.target.value"></textarea>
  <br/>
    you entered:{{name}};
    -->
  <input [(ngModel)]='name'/><br/>
    you entered:{{name}}
  `
})
export  class CoursesComponent{
  //name:string='Tom'
}
*/

/*


import {Component} from "@angular/core";
@Component({
  selector:'courses',
  template:`
  {{course.date1|date:'shortDate'}}<br/>
  {{course.title|uppercase}}<br/>
    {{course.price|currency:'RMB'}}<br/>
    {{course.students|number}}

  `
})
export class CoursesComponent{
  course= {
    title:"the  template",
    price:190.95,
    students:33300,
    date1:new Date(2017,7,15)
  }
}


/*

import {Component} from "@angular/core";
@Component({
  selector:'courses',
  template:`{{text|summary:10}}`
})
 export class CoursesComponent{
  text=`dd ddd ddd ddd ttt sss rrr sss cc sss aaa  aaaa aaa a  xx dddddcvv`;
}

*/

