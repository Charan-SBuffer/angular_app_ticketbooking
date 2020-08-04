import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Busschedule } from '../vw-bus-full-data/vw-bus-complete-data';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class BusscheduleService {

  constructor(private httpclient:HttpClient) { }

  getallbuSchedules():Observable<Busschedule[]>{
   return this.httpclient.get<Busschedule[]>('http://localhost:7777/Freshpractise2/getallbusschedules');
  }
 getbusschedulebyid(scheduleid:String):Observable<Busschedule>
 {   return this.httpclient.get<Busschedule>('http://localhost:7777/Freshpractise2/getbusschedulesbyid'+scheduleid)
}

 deletbuschedulebyID(busscheduleid:String):Observable<any>{
   return this.httpclient.delete<any>('http://localhost:7777/Freshpractise2/deletbusschedulesbyid'+busscheduleid)
 }
 addbusschedule(Busschedule:Busschedule):Observable<any>{
return this.httpclient.post<Message>('http://localhost:7777/Freshpractise2/deletbusschedulesbyid',Busschedule)
 }

}
