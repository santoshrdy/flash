import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/flight.service';

@Component({
  selector: 'app-flightstatus',
  templateUrl: './flightstatus.component.html',
  styleUrls: ['./flightstatus.component.css']
})
export class FlightstatusComponent implements OnInit {
  eticket: any;

  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
    let userid:any = localStorage.getItem('token')
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
