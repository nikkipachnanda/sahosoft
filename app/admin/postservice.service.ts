import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, throwError } from 'rxjs';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  url = "http://localhost:54868/api/Courseposts";

  constructor(private http: HttpClient) { }


  public getJEmpSON(): Observable<any> {
    const url = 'http://localhost:3000/coursepost/';
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  handleError(error:any)
  {
    return throwError(error.message || "server error");
  }

  public delEmp(id:any): Observable<any> {
 
    return this.http.delete('http://localhost:3000/coursepost/' + id);
  }

  public delCourseList(id:any): Observable<any> {
 
    return this.http.delete('http://localhost:3000/courselist/' + id);
  }

  
  updateEmployee(data:any, id:number) {
    return this.http.put<any>('http://localhost:3000/coursepost/' + id, data)
    .pipe(map((res:any)=>{
      return res;
    })) 
  }

  addCourseList(data:any) {
    return this.http.post<any>('http://localhost:3000/courselist', data)
    .pipe(map((res:any)=>{
      return res;
    })) 
  }

  getCourseList() {
    return this.http.get<any>('http://localhost:3000/courselist')
    .pipe(map((res:any)=>{
      return res;
    })) 
  }
  
}
