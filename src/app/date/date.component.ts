import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage:string;
  someNumber:number=10;

  constructor() { 
    setInterval(()=>{
      let currentDate=new Date();
    this.dateMessage=currentDate.toDateString()+' '+currentDate.toLocaleTimeString() 

    },1000);  
       
  }

  ngOnInit() {
  }

  addTwoNumber(a:number,b:number){
    return a+b;
  }

}
