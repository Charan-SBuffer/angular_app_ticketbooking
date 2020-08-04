import { Component, OnInit } from '@angular/core';
import { VwBusCompleteData } from './vw-bus-complete-data';
import { VwBusCompleteDataService } from './vw-bus-complete-data.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vw-bus-full-data',
  templateUrl: './vw-bus-full-data.component.html',
  styleUrls: ['./vw-bus-full-data.component.css']
})
export class VwBusFullDataComponent implements OnInit {

  vwbusesmaster : VwBusCompleteData[];vwbus:VwBusCompleteData[]; vwbusobj:VwBusCompleteData;
 
  constructor( private vwservice : VwBusCompleteDataService )
{
  vwservice.getfulldataofVw_data().subscribe(
    (reply)=>{this.vwbusesmaster=reply;
    this.vwbus=reply}
);
}
 
getbustype(id:String){
  console.log(id);
 this.vwbus=this.vwbusesmaster.filter(c=>c.bustype==id),(console.error("Might be no bUsses")
 );

 }

 getdestination(id:string){ 
  this.vwbus=this.vwbusesmaster.filter(b=>b.destination==id);
}

getfullinfo(busid:string){ 
  //this.vwbusobj=this.vwbusesmaster.filter(b=>b.bustypeid==busid);
  var i:number;
  for(i=0;i<this.vwbusesmaster.length;i++){ 
  if( busid== this.vwbusesmaster[i].bustypeid){
this.vwbusobj=this.vwbusesmaster[i];
  }
  
  }
}
bookticket(busid:string){
  
}

  ngOnInit() {
  }

  
}
