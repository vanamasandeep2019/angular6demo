import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user : any;
  @Input('name') userName:string;

  

  constructor() { 
    

  }

  ngOnInit() {
    this.user ={
      name : this.userName,
      title : 'Software Developer',
      address : 'Hyderabad',
      phone : [
        '123-456-789',
        '456-678-789'
      ]
    }
  }

}
