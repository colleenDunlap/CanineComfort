import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FetchdataServiceService {

  constructor(private http:HttpClient) { }
  getData(url:string){
    //console.log(this.http.get(url))
    return this.http.get(url)
  }
  sendData (myNumber) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/x-www-form-urlencoded'
      }),
      params: new HttpParams({
          fromObject: {"effect": "1"} 
      })
  };
  
   this.http.post("http://192.168.4.1:80/", {}, httpOptions)
          .subscribe(data => console.log(data));  
  }
}
