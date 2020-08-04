import { Component } from '@angular/core';
import { User } from './signup/user';
import { SignupService } from './signup/signup.service';
import { Router } from '@angular/router';
import { Message } from './vw-bus-full-data/vw-bus-complete-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Redbus';
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
  
getuseronid(id:string){
  this.users=this.usermaster.filter(b=>b.id==id);
  this.currentuser=this.users[0];
  console.log('ingetuser');
  console.log(this.users)
}





// Signup(id:string,id1:string,id2:string,id3:string,id4:string){  
// this.userobj.id="kjll";
// this.userobj.firstname=id;
// this.userobj.firstname=id1;
// this.userobj.firstname=id2;
// this.userobj.firstname=id3;
// this.userobj.firstname=id4;
// this.adduser(this.userobj);
// }



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
   


  
}
