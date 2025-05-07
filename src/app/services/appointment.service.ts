import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppointmentData } from '../../shared/models/appointment-model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  readonly url = 'http://localhost:8082/appointments';

  constructor(private http: HttpClient, ) { }

  createAppointment(data: AppointmentData): Observable<AppointmentData>{
    return this.http.post<AppointmentData>(this.url, data)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error creating appointment', error);
          return throwError(() => error);
        })
      );
  }
}
