import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FlightService } from 'src/app/flight.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {
  checkinForm: any;
  eticket = 'ET342R567';
  constructor(private fb:FormBuilder, private flightService:FlightService) {
    this.eticket = '324343434'
   }

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
