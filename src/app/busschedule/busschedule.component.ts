import { Component, OnInit } from '@angular/core';
import { BusscheduleService } from './busschedule.service';
import { Busschedule } from '../vw-bus-full-data/vw-bus-complete-data';

@Component({
  selector: 'app-busschedule',
  templateUrl: './busschedule.component.html',
  styleUrls: ['./busschedule.component.css']
})
export class BusscheduleComponent implements OnInit {

scheduleservice:Busschedule[];busschedule:Busschedule;
  sucess: any;

  
  constructor(private busscheduleservice:BusscheduleService) {
    this.busscheduleservice.getallbuSchedules().subscribe(
      (reply)=>this.scheduleservice=reply
    )
   }

addbusschedule(busschedule:Busschedule){
  this.busscheduleservice.addbusschedule(busschedule).subscribe(
(reply)=>this.sucess=reply
  )
}
getbusschedulebyid(buscheduleid:String){
  this.busscheduleservice.getbusschedulebyid(buscheduleid).subscribe(
    (reply)=>this.busschedule=reply
  )
  }

  deletbusscheduleonID(busscheduleid:String){
    return this.busscheduleservice.deletbuschedulebyID(busscheduleid).subscribe(
      (reply)=>this.sucess=reply    )
  }


  ngOnInit() {
  }

}
