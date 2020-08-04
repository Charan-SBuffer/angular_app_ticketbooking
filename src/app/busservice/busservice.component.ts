import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus/bus.service';
import { BusserviceService } from './busservice.service';
import { Busservice } from '../vw-bus-full-data/vw-bus-complete-data';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-busservice',
  templateUrl: './busservice.component.html',
  styleUrls: ['./busservice.component.css']
})
export class BusserviceComponent implements OnInit {

  busservices:Busservice[];serviceobj:Busservice;
  message: any;
  constructor(private busservice:BusserviceService) {
     busservice.getallbusservices().subscribe(
      (data)=>this.busservices=data,(error)=>console.log('errorfinding DATA')
    )
   }

   getbusservicebyid(busserviceid:String){
     return this.busservice.getbusservicebyID(busserviceid).subscribe(
       (data)=>this.serviceobj=data,(error)=>console.log("NO service found")
       )
       }

       addbusservice(busservice:Busservice){
         return this.busservice.addbusservice(busservice).subscribe(
           (data)=>this.message=data,(error)=>console.log("Unable to ADD")
           )
         }
       
         deletebusservice(serviceid:String){

        return this.busservice.deletbusservice(serviceid).subscribe(
          (data)=>this.message=data,(error)=>console.log("Unable to Delete")
        )  
         }

  ngOnInit() {
  }

}
