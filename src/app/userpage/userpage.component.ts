import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup/signup.service';
import { Message } from '../vw-bus-full-data/vw-bus-complete-data';
import { User } from '../signup/user';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  
 message : Message; user:User;

  constructor(private signupservice:SignupService ) { 
this.signupservice.currentuser.subscribe(
  (data)=>this.user=data,
  
);

this.signupservice.sharedmessage.subscribe(
(data)=>this.message=data
);

this.user=JSON.parse(sessionStorage.getItem('currentcustomer'));

console.log()

}






  ngOnInit() {
  }

}
