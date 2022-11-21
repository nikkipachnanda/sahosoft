import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';


@Injectable({
  providedIn: 'root'
})

export class EmplyeeserviceService {

  constructor(private http:HttpClient) { }
    public createemployee(): Observable<any> {
    return this.http.get('http://localhost:3000/employees/');
  }


}   
