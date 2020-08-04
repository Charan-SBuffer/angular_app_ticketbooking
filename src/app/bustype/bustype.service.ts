import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Bustype } from '../vw-bus-full-data/vw-bus-complete-data';

@Injectable({
  providedIn: 'root'
})
export class BustypeService {

  constructor(private httpclient:HttpClient) { }
   
getallbustypes():Observable<Bustype[]>{
  return this.httpclient.get<Bustype[]>('http://localhost:7777/Freshpractise2//getallbustypes')
}

getbustypebyID(bustypeid:String):Observable<Bustype>{
  return this.httpclient.get<Bustype>('http://localhost:7777/Freshpractise2/getbustypebyID'+bustypeid)
}

deletbustypeofID(bustypeid:String):Observable<any>{
  return this.httpclient.delete<any>('http://localhost:7777/Freshpractise2/deletebustype'+bustypeid)
}
 
addbustype(bustype:Bustype):Observable<Bustype>{
  return this.httpclient.post<Bustype>('http://localhost:7777/Freshpractise2/addbustype',bustype)
}

}
