import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Message } from '../vw-bus-full-data/vw-bus-complete-data';

@Injectable({
  providedIn: 'root'
})
export class SignupService {


  constructor(private httpclient:HttpClient) { }

  getallusers():Observable<User[]>{
    return this.httpclient.get<User[]>('http://localhost:7777/Freshpractise2/getallusers');
  }
adduser(user:User) : Observable<Message>{
    return this.httpclient.post<Message>('http://localhost:7777/Freshpractise2/addnewuser',user);
}

getuseronid(id:string):Observable<User>{
  return this.httpclient.get<User>('http://localhost:7777/Freshpractise2/getuseronid'+id);
}

Logincheck(user:User) : Observable<User>{
  return this.httpclient.post<User>('http://localhost:7777/Freshpractise2/logincheck',user);
}

private message = new BehaviorSubject(new Message('I','Hello!'));
sharedmessage = this.message.asObservable();

private user= new BehaviorSubject(new User);
currentuser = this.user.asObservable();

setuser(user:User){
  this.user.next(user);
}

sendmessage(mssg:Message){
this.message.next(mssg)
}


}
