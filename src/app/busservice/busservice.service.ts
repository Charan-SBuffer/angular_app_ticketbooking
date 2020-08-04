import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusService } from '../bus/bus.service';
import { Observable } from 'rxjs';
import { Busservice } from '../vw-bus-full-data/vw-bus-complete-data';

@Injectable({
  providedIn: 'root'
})
export class BusserviceService {

  constructor(private httpclient:HttpClient) { }

  getallbusservices():Observable<Busservice[]>{
    return this.httpclient.get<Busservice[]>('http://localhost:7777/Freshpractise2/getallbusservices')
  }
 
  getbusservicebyID(serviceID:String):Observable<Busservice>{
    return this.httpclient.get<Busservice>('http://localhost:7777/Freshpractise2/getbusservicebyID'+serviceID)
  }

  addbusservice(busservice:Busservice):Observable<any>{
    return this.httpclient.post<any>('http://localhost:7777/Freshpractise2/addbusservice',busservice)
  }

  deletbusservice(serviceid:String):Observable<any>{
    return this.httpclient.delete<any>('http://localhost:7777/Freshpractise2/deletbusservice'+serviceid)
  }

}
