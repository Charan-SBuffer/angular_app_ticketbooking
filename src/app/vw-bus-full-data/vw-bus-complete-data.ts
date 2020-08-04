import { Time } from '@angular/common';

export class VwBusCompleteData {
    
    bustypeid:string;bustype:string;    capacity:number;    busid:string;    owner:string;    serviceno:string;    routeid:string;
    source:string;    destination:string;    scheduleid:string;    dateofjourney:Date;    depaturetime:Time;    arrivaltime:Time;    drivername:string;    fare:number;
    availableseats:string;
}

export class Bus{
   bustype:string;owner:string; busid:string;busowner:string;
}
export class Tickethistory {
    bookid:string;
    customerid:string;
}

export class Busroutes{
    routeid:string;source:string;destination:string;distance:number;
}

export class Busschedule{
    scheduleid:string; serviceno:string;dateofjourney:Date;departuretime:Time;arrivaltime:Time;drivername:string;fare:number;availableseats:number;
}

export class Busservice{
    serviceno:string;busid:string;routeid:string;
}
export class Bustype{
    bustypeid:string;bustype:string;capacity:number;
}

export class currentuser{
    id:string;
    firstname:string;lastname:string;password:string;
    mobilenumber:number;emailid:string;
}
export class Message{
    type:string;messagebody:string;
    constructor(type:string,messagebody:string){
        type='I',messagebody='working';
    }

    settype(type:string){
        this.type=type
    }

    setinfo(info:string){
        this.messagebody=info
    }
}