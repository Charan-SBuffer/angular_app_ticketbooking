import { Component, OnInit } from '@angular/core';
import { BustypeService } from './bustype.service';
import { Bustype } from '../vw-bus-full-data/vw-bus-complete-data';

@Component({
  selector: 'app-bustype',
  templateUrl: './bustype.component.html',
  styleUrls: ['./bustype.component.css']
})
export class BustypeComponent implements OnInit {

  bustypes:Bustype[];
  bustype: Bustype;
  message: any;
  constructor(private busservice:BustypeService) {

     this.busservice.getallbustypes().subscribe(
    (data)=>this.bustypes=data,(error)=>console.log('Unable to get INfo')
    )
   }

   getbustypebyID(bustyeid:String){
     return this.busservice.getbustypebyID(bustyeid).subscribe(
       (data)=>this.bustype=data,(error)=>console.log('Unable to find')
     )
   }

   deletbustype(bustypeid:String){
     return this.busservice.deletbustypeofID(bustypeid).subscribe(
  (data)=>this.message=data,(error)=>console.log('Unable to delete')
     )
   }
   
   addbustype(bustype:Bustype){
     return this.busservice.addbustype(bustype).subscribe(
       (data)=>this.message=data,(error)=>console.log('Unable to add')
     )
   }
   deletbustypeofid(id:string){
    this.deletbustype(id);
   }
  ngOnInit() {
  }

}
