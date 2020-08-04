import { Component, OnInit } from '@angular/core';
import { Bus } from '../vw-bus-full-data/vw-bus-complete-data';
import { BusService } from '../bus/bus.service';
@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  busservice:BusService;bus:Bus[];busobj:Bus;fail:String;sucess:String;
  Message: any;
  constructor( busservice:BusService) {
    busservice.getfullbuses().subscribe(
      (data)=>this.bus=data,(error)=>console.log("No Busses")
      )
      
      
   }
    addbus(bus:Bus){
      this.busservice.addbus(bus).subscribe(
      (reply)=>this.sucess=reply,(error)=>this.fail
        );
    }
deletebus(busid:String){
  this.busservice.deletbus(busid).subscribe(
    (reply)=>this.Message=reply  );
}
  ngOnInit() {
  }

  getonID(busid:String){
    this.busservice.getonID(busid).subscribe(
    (reply)=>this.busobj=reply
  )
}}
