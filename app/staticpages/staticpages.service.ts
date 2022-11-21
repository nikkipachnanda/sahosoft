import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaticpagesService {

  constructor( private httpClient: HttpClient) { }

   usedEmail:string = "http://localhost:3000/contactuspost/;"

  public uploadfile(file: any) {
    let formParams = new FormData();
  //  formParams.append('file', file)
    formParams.append('image',file, file ==null? null: file.name);
    return this.httpClient.post('http://localhost:3000/coursepost', formParams)
  }

  public getJCitySON(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/citylist');
  }

  private existingUsernames = ['Batman', 'Superman', 'Joker', 'Luthor'];
  
    checkIfUsernameExists(value: string) {
    return of(this.existingUsernames.some((a) => a === value)).pipe(
      delay(200)
    );
  }

  createContact(data:any) {
    return this.httpClient.post<any>('https://employee-9010e-default-rtdb.firebaseio.com/contact.json', data)
    .pipe(map((res:any)=>{
      return res;
    })) 
  }
}
