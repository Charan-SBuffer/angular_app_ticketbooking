import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VwBusFullDataComponent } from './vw-bus-full-data/vw-bus-full-data.component';
import { BusComponent } from './bus/bus.component';
import { BusroutesComponent } from './busroutes/busroutes.component';
import { BusscheduleComponent } from './busschedule/busschedule.component';
import { BusserviceComponent } from './busservice/busservice.component';
import { BustypeComponent } from './bustype/bustype.component';
import { TickethistoryComponent } from './tickethistory/tickethistory.component';
import { SignupComponent } from './signup/signup.component';
import { UserpageComponent } from './userpage/userpage.component';




const routes: Routes = [
{ path : 'vw_full_data'          , component : VwBusFullDataComponent },
{ path : 'allBusroutes'          , component : BusroutesComponent},
{ path : 'allBuses'              , component : BusComponent},
{ path : 'allBusschedules'       , component : BusscheduleComponent},
{ path : 'allBusservices'        , component : BusserviceComponent},
{ path : 'allBustypes'           , component : BustypeComponent},
{ path : 'getvwbusonid'          , component : VwBusFullDataComponent},
{ path : 'getfullbookinghistory' , component : TickethistoryComponent},
{ path : 'reqforsingup'          , component : SignupComponent },
{ path : 'requsercomponent'      , component : UserpageComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
