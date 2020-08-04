import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VwBusFullDataComponent } from './vw-bus-full-data/vw-bus-full-data.component';
import { BusComponent } from './bus/bus.component';
import { BusroutesComponent } from './busroutes/busroutes.component';
import { BusscheduleComponent } from './busschedule/busschedule.component';
import { BusserviceComponent } from './busservice/busservice.component';
import { BustypeComponent } from './bustype/bustype.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TickethistoryComponent } from './tickethistory/tickethistory.component';
import { SignupComponent } from './signup/signup.component';
import { UserpageComponent } from './userpage/userpage.component';




@NgModule({
  declarations: [
    AppComponent,
    VwBusFullDataComponent,
    
    BusComponent,
    
    BusroutesComponent,
    
    BusscheduleComponent,
    
    BusserviceComponent,
    
    BustypeComponent,
    
    TickethistoryComponent,
    
    SignupComponent,
    
    UserpageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
