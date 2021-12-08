import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/flight.service';

@Component({
  selector: 'app-baggage-loss',
  templateUrl: './baggage-loss.component.html',
  styleUrls: ['./baggage-loss.component.css']
})
export class BaggageLossComponent implements OnInit {
  eticket: any;
  email: any;

  constructor(private flightService: FlightService) { }
  ngOnInit(): void {
    let userid:any = localStorage.getItem('token');
   this.email =  JSON.parse(atob(userid.split('.')[1])).email
userid = JSON.parse(atob(userid.split('.')[1])).userid;
    this.flightService.getstatus('flightstatus').subscribe(res => {
      if(res.status === 200 && res.body?.length > 0) {
const result =  res.body.filter(ele => ele.userid === userid)

this.eticket = result[0]?.eticketno;
console.log(result)
      }
    })
  }

}
