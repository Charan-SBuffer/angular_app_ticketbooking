import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Busroutes } from '../vw-bus-full-data/vw-bus-complete-data';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class BusroutesService {
 
  constructor(private httpclient:HttpClient) { }

 getallbusroutes():Observable<Busroutes[]>{
  return this.httpclient.get<Busroutes[]>('http://localhost:7777/Freshpractise2/getallbusroutes');
 }
 
getbusroutebyID(routeid):Observable<Busroutes>{
  return this.httpclient.get<Busroutes>('http://localhost:7777/Freshpractise2/getbusroutebyID'+routeid);
}

deletarouteID(routeid):Observable<Message>{
  return this.httpclient.delete<Message>('http://localhost:7777/Freshpractise2/deletbusroutebyID'+routeid);
}

addroutID(busroutes:Busroutes):Observable<any>{
  return this.httpclient.post<Message>('http://localhost:7777/Freshpractise2/addbusroute',busroutes);
}


}
