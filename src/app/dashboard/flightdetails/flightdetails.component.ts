import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/flight.service';

@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.css']
})
export class FlightdetailsComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = [];

  constructor(private flightService: FlightService, private router:Router) { }

  ngOnInit(): void {
    const url = 'http://localhost:8082/api/getflightsdetails';
    this.flightService.getFlightDetails(url).subscribe(res => {
 
      const data = res.body.map(ele => {
      return {bookingButton:true, ...ele}
      })
      console.log(data)
      this.dataSource = data;
      this.displayedColumns = Object.keys(res.body[0]);
      this.displayedColumns.push('booking')
      console.log(this.displayedColumns)
    })
  }
  bookingProcess(value:any): void {
this.router.navigate(['/dashboard/bookingInfo'])
  }
}
