import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private readonly http:HttpClient) { 
   
  }
  register(url,body):Observable<any> {
    return this.http.post(url,body,{observe: 'response'});
        }
}
