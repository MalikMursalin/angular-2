// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/auth';

  constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: string }) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  getProfile(token: string) {
    // Add the token to the request headers for authentication
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(`${this.apiUrl}/profile`, { headers });
  }

  // Implement other authentication-related API methods
}
