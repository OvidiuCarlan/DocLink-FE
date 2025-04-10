import { Injectable } from '@angular/core';
import { json } from 'stream/consumers';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {

  constructor() { }

  storeToken(token: string): void {
    try {
      const decoded: any = jwtDecode(token);
      localStorage.setItem('claims', JSON.stringify(decoded));
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }

  getClaims(): any {
    const claims = localStorage.getItem('claims');
    return claims ? JSON.parse(claims) : null;
  }
}
