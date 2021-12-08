import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private http:HttpClient) { }
  getFlightDetails (url:string):Observable<any> {
    return this.http.get(url,{observe:'response'});
  }
  savePassengers(url:string,body:any): Observable<any> {
    const apiendpoint = environment.API_URL + url;
    return this.http.post(apiendpoint,body,{observe:'response'});
  }
  reservation(url:string,body:any): Observable<any> {
    const apiendpoint = environment.API_URL + url;
    return this.http.post(apiendpoint,body,{observe:'response'});
  }
  seatBooking(url:string,body:any): Observable<any> {
    const apiendpoint = environment.API_URL + url;
    return this.http.post(apiendpoint,body,{observe:'response'});
  }
  getPricing(url:string): Observable<any> {
    const apiendpoint = environment.API_URL + url;
    return this.http.get(apiendpoint,{observe:'response'});
  }
  payment (url:string,body:any): Observable<any> {
    const apiendpoint = environment.API_URL + url;
    return this.http.post(apiendpoint,body,{observe:'response'});
  }
  getstatus (url:string): Observable<any> {
    const apiendpoint = environment.API_URL + url;
    return this.http.get(apiendpoint,{observe:'response'});
  }
}
