import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  constructor(private router:Router) { }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  ngOnInit(): void {
this.router.navigate(['/dashboard/flightdetails'])
  }
  logout () {
    this.router.navigate(['/login']);
    localStorage.removeItem('token')
  }
  checkin(value) {
    if(value === 'CheckIn') {
      this.router.navigate(['/dashboard/checkin'])
    } else if(value === 'Flight Status') {
      this.router.navigate(['/dashboard/flightstatus'])
    } else if(value === 'Flight Search') {
      this.router.navigate(['/dashboard/flightdetails'])
    } else if(value === 'Courier') {
      this.router.navigate(['/dashboard/courier'])
    }
    else if(value === 'baggage Loss') {
      this.router.navigate(['/dashboard/baggageloss'])
    }
    else if(value === 'Refund') {
      this.router.navigate(['/dashboard/refund'])
    }

  }
}
