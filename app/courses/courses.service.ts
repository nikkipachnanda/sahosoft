import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  public getJEmpSON(): Observable<any> {
    return this.http.get('http://localhost:3000/coursepost/');
  }


  public fetchJEmpSON(id:any): Observable<any> {
    return this.http.get('http://localhost:3000/coursepost/'+ id);
  }


}
