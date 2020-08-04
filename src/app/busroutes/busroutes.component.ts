import { Component, OnInit, Output } from '@angular/core';
import { Busroutes } from '../vw-bus-full-data/vw-bus-complete-data';
import { BusroutesService } from './busroutes.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-busroutes',
  templateUrl: './busroutes.component.html',
  styleUrls: ['./busroutes.component.css']
})
export class BusroutesComponent implements OnInit {

// childmessage:string="";

// @Output() childmessageemitter = new EventEmitter();

// sendmessage():void{
//   this.childmessageemitter.emit(this.childmessage);
// }


  












  busroute:Busroutes;
  busroutes:Busroutes[];busroutesservice:BusroutesService;Sucess:String;
  Message: Message;
  constructor(busroutesservice:BusroutesService) 
  {
    busroutesservice.getallbusroutes().subscribe(
         (data)=>this.busroutes=data
    )
   }

   addbusroute(busroute:Busroutes){
    this.busroutesservice.addroutID(busroute).subscribe(
      (reply)=>this.Sucess=reply
      )
       }
       
       getburoutbyID(routid:String){
         this.busroutesservice.getbusroutebyID(routid).subscribe(
           (reply)=>this.busroute=reply
         )
       }
 deletbusrout(routid:String){
   this.busroutesservice.deletarouteID(routid).subscribe(
     (reply)=>this.Message=reply
   )
 }
  ngOnInit() {
  }

}
