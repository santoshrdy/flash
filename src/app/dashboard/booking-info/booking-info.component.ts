import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FlightService } from 'src/app/flight.service';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.css']
})
export class BookingInfoComponent implements OnInit {
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: any[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'}, 
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  passengerform: any;
  reservationForm: any;
  bookingForm: any;
  classOption: string[] = [];
  baggage: string[] = [];
  seatOptions: string[] = [];
  mealOptions: string[] = [];
  baggageOptions: string[] =[];
  priceForm: any;
  paymentForm: any;
  constructor(private fb:FormBuilder,private router:Router, private flightService: FlightService, private toastr: ToastrService) { 
    this.passengerform = this.fb.group({
      infants:[0,Validators.required],
      children:[0,Validators.required],
      adults:[1,Validators.required]
    })
    this.reservationForm = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      date_of_birth:[new Date(),Validators.required],
      passport_no:['',Validators.required],
      gender:['male',Validators.required]
    })
    this.bookingForm = this.fb.group({
      class:['',Validators.required],
      seat:['',Validators.required],
      meal:[''],
      baggage:['',Validators.required]
    })
    this.priceForm = this.fb.group({
      taxes:[''],
      seatcost:[''],
      mealcost:[''],
      baggagecost:['',]
    });

    this.classOption = ['economy', 'business'];
    this.baggageOptions  =['1','2','3'];
    this.seatOptions = ['1','2','3','4'];
    this.mealOptions = ['chicken', 'fish']
  }

  ngOnInit(): void {

  }
  infant(value:string):void {
if(value === '+') {
const count = ++this.passengerform.value.infants;
this.passengerform.get('infants').setValue(count);
} else {
  const count = --this.passengerform.value.infants;
  this.passengerform.get('infants').setValue(count);
}
  }
  children(value:string): void {
    if(value === '+') {
      const count = ++this.passengerform.value.children;
      this.passengerform.get('children').setValue(count);
      } else {
        const count = --this.passengerform.value.children;
        this.passengerform.get('children').setValue(count);
      }
  }
  adult(value:string):void {
    if(value === '+') {
      const count = ++this.passengerform.value.adults;
      this.passengerform.get('adults').setValue(count);
      } else {
        if(this.passengerform.value.adult > 1) {
          const count = --this.passengerform.value.adults;
          this.passengerform.get('adults').setValue(count);
        }
    
      }
  }
  passengersSave() {
    const url = 'createpassengers';
    this.passengerform.value.infants =  this.passengerform.value.infants.toString();
    this.passengerform.value.children =  this.passengerform.value.children.toString();
    this.passengerform.value.adults =   this.passengerform.value.adults.toString();
this.flightService.savePassengers(url,this.passengerform.value).subscribe(res => {
  console.log(res);
  if(res.status === 200 && res.body.success === 1) {
    this.toastr.success(res.body.message);
  }
})
  }
  reservationSave() {
    const url = 'reservation';
this.flightService.reservation(url,this.reservationForm.value).subscribe(res => {
  console.log(res);
  if(res.status === 200 && res.body.success === 1) {
    this.toastr.success(res.body.message);
  }
})
  }
  seatingBookingSave () {
    const url = 'booking';
this.flightService.seatBooking(url,this.bookingForm.value).subscribe(res => {
  console.log(res);
  if(res.status === 200 && res.body.success === 1) {
    this.toastr.success(res.body.message);
  }
})
  }
  Payment() {
 this.router.navigate(['/dashboard/payment'])
  }
  tabClick ( value){
if(value.tab.textLabel === 'Pricing' ) {
  const url = 'pricing';
  this.flightService.getPricing(url).subscribe(res => {
if(res.status === 200 && res.body.success ===  1) {
this.priceForm.get('taxes').setValue(res.body.message.taxes);
this.priceForm.get('seatcost').setValue(res.body.message.meal_cost);
this.priceForm.get('mealcost').setValue(res.body.message.seat_cost);
this.priceForm.get('baggagecost').setValue(res.body.message.baggage_cost);
}
  }, err => {
    this.toastr.error(err)
  })
}
  }
}
