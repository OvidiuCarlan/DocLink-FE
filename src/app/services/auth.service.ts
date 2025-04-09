import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpData } from '../../shared/models/signup-model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  signUp(data: SignUpData): Observable<any>{
    return this.http.post(this.url + '/signup', data);
  }
}
