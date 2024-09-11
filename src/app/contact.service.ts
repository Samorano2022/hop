import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { ContactModel } from './model/contact-model';
// import { Observable, catchError, map } from 'rxjs';
// import { throwError } from 'rxjs';
// import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private mailApi = 'https://mailthis.to/codeninja';

  constructor(private http: HttpClient) { }

  // PostMessage(input: any) {
  //   return this.http.post(this.mailApi, input, { responseType: 'text' })
  //     .pipe(
  //       map((response) => response),
  //       catchError((error: any) => throwError(error))
  //     );
  // }
}
