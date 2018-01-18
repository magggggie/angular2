import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title :string ='Component Communications';
  public employeeRecord:any=[
    {eName:'Tom',eCity:'New York',eSalary:50000},
    {eName:'Jerry',eCity:'New York',eSalary:60000},
    {eName:'John',eCity:'Chicago',eSalary:50000},
    {eName:'Lee',eCity:'Somerset',eSalary:40000},
  ]

  public selectedEmployeeData:any={
    selectedName:'',
    selectedCity:'',
    selctedSalary:''
  };
  public getRecord(data:any):void{
    this.selectedEmployeeData=data;
  }
}
