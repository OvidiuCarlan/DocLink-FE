import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { SignUpData } from '../../shared/models/signup-model';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = 'http://localhost:8080';

  constructor(private http: HttpClient, private router: Router) {}

  signUp(data: SignUpData): Observable<any>{
    return this.http.post(this.url + '/users', data);
  }

  login(loginItem: any): Observable<any> {
    return this.http.post<any>(`${this.url}/users/tokens`, loginItem, {
      withCredentials: true,
      headers: new HttpHeaders({}) // Add custom headers if necessary
    }).pipe(
      tap(response => {
        if (response && response.accessToken) {
          localStorage.setItem('accessToken', response.accessToken); // Or use a TokenManager service
          alert("User Logged In");
          this.router.navigate(['/doc-landing']);
        } else {
          alert("Invalid response from the server");
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          alert('Invalid credentials');
        } else {
          alert(error.message || 'An unknown error occurred');
        }
        return throwError(() => error);
      })
    );
  }
}
