import { Injectable } from '@angular/core';
import { Bus } from '../vw-bus-full-data/vw-bus-complete-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  
  constructor(private httpclient:HttpClient) { }

  getfullbuses():Observable<Bus[]>{
    return this.httpclient.get<Bus[]>('http://localhost:7777/Freshpractise2/getallbusses');
  }

  getonID(busid:String):Observable<Bus>{
    return this.httpclient.get<Bus>('http://localhost:7777/Freshpractise2/getonbusid?busid='+busid);
  }

  addbus(bus:Bus):Observable<any>{
    return this.httpclient.post<any>('http://localhost:7777/Freshpractise2/addBus',bus);  
  }

  deletbus(busid:String):Observable<Message>
{
  return this.httpclient.delete<Message>('http://localhost:7777/Freshpractise2/deletBus='+busid);
}
}
