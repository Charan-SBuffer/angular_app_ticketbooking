import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { SignupService } from './signup.service';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Message } from '../vw-bus-full-data/vw-bus-complete-data';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users:User[]; usermaster:User[]; userobj:User;currentuser:User;message:Message;userid:string;password:string;

  constructor(private signupservice:SignupService,private router:Router) {
    this.signupservice.getallusers().subscribe(
      (data)=>{
        this.usermaster=data,
        this.users=this.usermaster
      }
    )
   }
   searchuser(mobilenumber:number){
        this.users=this.usermaster.filter(b=>b.mobilenumber==mobilenumber)
   }
   adduser(user:User){
    this.signupservice.adduser(user).subscribe( // dml
      (data)=>{this.signupservice.sendmessage(data),

      // this.signupservice.getallusers().subscribe( //dql
      //   (data)=>{this.usermaster=data;this.users=data;
        this.router.navigate(['/reqforsingup'])
      
      }
      // );}
    );
   }
getuseronid(id:string){
  this.users=this.usermaster.filter(b=>b.id==id);
  this.currentuser=this.users[0];
  console.log('ingetuser');
  console.log(this.users)
}



signupform = new FormGroup({
  id : new FormControl('USR001'),
  firstname:new FormControl(),
  lastname : new FormControl(),
  mobilenumber: new FormControl(),
  emailid: new FormControl(),
  password:new FormControl(),
  
});

// Signup(id:string,id1:string,id2:string,id3:string,id4:string){  
// this.userobj.id="kjll";
// this.userobj.firstname=id;
// this.userobj.firstname=id1;
// this.userobj.firstname=id2;
// this.userobj.firstname=id3;
// this.userobj.firstname=id4;
// this.adduser(this.userobj);
// }

signup(){
  var user:User;  
  user=this.signupform.value;
  this.adduser(user)
}

 logincheck():void{
   var found:boolean;
   var user = new User();
   user.id=this.userid;
   user.password=this.password;
   this.signupservice.Logincheck(user).subscribe(
  (data)=>{

        console.log("login success"),

    this.signupservice.sendmessage(new Message('S','SUCESSFULL!')),
  
    this.getuseronid(this.userid),
  
        sessionStorage.setItem('currentcustomer',JSON.stringify(this.currentuser)),
        console.log('inlogincheck'),
        console.log(this.currentuser),

    this.router.navigate(['/requsercomponent'])
   
    // jump to customer comp
    // jump to admin comp
  },
  (error)=>this.message=error  
  )
  }
   
 mespasswoedmsg:string;match:boolean;
 
  checkpassword(pswd:string,cnfm:string){

if(pswd!=cnfm){
this.match=false;
  this.mespasswoedmsg="passwords do not match.";
}
else{
  this.match=true;
  this.mespasswoedmsg="Matched";
 
}
}

  


  ngOnInit() {
  }

}
