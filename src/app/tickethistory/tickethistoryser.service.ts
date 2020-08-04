import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tickethistory } from '../vw-bus-full-data/vw-bus-complete-data';

@Injectable({
  providedIn: 'root'
})
export class TickethistoryserService {

  constructor(private httpclient:HttpClient) {}
 getfullbookinghistory() : Observable<Tickethistory[]>{
return this.httpclient.get<Tickethistory[]>('http://localhost:7777/Freshpractise2/getfullbookinghistory');
 }

   }

