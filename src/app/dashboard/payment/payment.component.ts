import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FlightService } from 'src/app/flight.service';
import pdfMake from "pdfmake/build/pdfmake";  
import pdfFonts from "pdfmake/build/vfs_fonts";  
pdfMake.vfs = pdfFonts.pdfMake.vfs;  
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm: any;

  constructor(private fb:FormBuilder,private toaster:ToastrService, private flightService:FlightService) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      payment_type:[],
      cardname:[],
       cardnumber:[],
       cvv:[],
       expiryyear:[],
       expirymonth:[],
       price_id:[1]
    })
  }
  pay() {
    const url = 'payments';
    this.paymentForm.value.price_id = ++ this.paymentForm.value.price_id;
    this.flightService.payment(url,this.paymentForm.value).subscribe(res => {
if(res.status === 200 && res.body.message === 'Payment successfully') {
this.toaster.success(res.body.message);
let docDefinition = {
  content: [
    {
      text: 'Flight',
      fontSize: 16,
      alignment: 'center',
      color: '#047886'
    },
    {
      text: 'INVOICE',
      fontSize: 20,
      bold: true,
      alignment: 'center',
      decoration: 'underline',
      color: 'skyblue'
    },
    {
      text: 'Customer Details',
      style: 'sectionHeader'
    },
    {
      columns: [
        [
          {
            text: res.body.invoicedetails.firstname + ' ' + res.body.invoicedetails.lastname,
            bold:true
          },
          { text:  res.body.invoicedetails.passport_no },
          { text: res.body.invoicedetails.email },
          { text: res.body.invoicedetails.mobile },
          { text: res.body.invoicedetails.seat_cost+res.body.invoicedetails.meal_cost+res.body.invoicedetails.baggage_cost+res.body.invoicedetails.taxes }
        ]
    
      ]
    },


    // {
    //     text: this.invoice.additionalDetails,
    //     margin: [0, 0 ,0, 15]          
    // },
    {
      columns: [
        [{ text: 'Signature', alignment: 'right', italics: true}],
      ]
    },

  ],
  styles: {
    sectionHeader: {
      bold: true,
      decoration: 'underline',
      fontSize: 14,
      margin: [0, 15,0, 15]          
    }
  }
}

pdfMake.createPdf(docDefinition).open(); 
} else {
  this.toaster.error(res.body.message)
}
    },err => {
      this.toaster.error(err)
    })
  }
}
