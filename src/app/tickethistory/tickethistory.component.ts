import { Component, OnInit } from '@angular/core';
import { TickethistoryserService } from './tickethistoryser.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Tickethistory } from '../vw-bus-full-data/vw-bus-complete-data';

@Component({
  selector: 'app-tickethistory',
  templateUrl: './tickethistory.component.html',
  styleUrls: ['./tickethistory.component.css']
})
export class TickethistoryComponent implements OnInit {

 tickethistorymaster: Tickethistory[];tickethistoy:Tickethistory[];
  constructor(thisservice:TickethistoryserService) {
    thisservice.getfullbookinghistory().subscribe(
      (data)=>{this.tickethistorymaster=data;
      this.tickethistoy=this.tickethistorymaster },(error)=>console.log("nO DATA found")   
      )    
   }


bookinghistoryform=new FormGroup({
  bookid:new FormControl(),
  customerid:new FormControl()
});

addbookinginfo(){
  var th:Tickethistory;
  th=this.bookinghistoryform.value
}
  ngOnInit() {
  }

}
