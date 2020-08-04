import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VwBusCompleteData } from './vw-bus-complete-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VwBusCompleteDataService {

  constructor(private httpclient:HttpClient) {
  }

    getfulldataofVw_data(): Observable<VwBusCompleteData[]>{
      return this.httpclient.get<VwBusCompleteData[]>('http://localhost:7777/Freshpractise2/getall');
    } 
    
    getVW_databasedonID(vwid:String):Observable<VwBusCompleteData>{
      return this.httpclient.get<VwBusCompleteData>('http://localhost:7777/restcontroller/getvwonid'+vwid);
    }



}