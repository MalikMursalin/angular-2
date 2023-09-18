// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/users';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(`${this.apiUrl}`);
  }

  getUserById(userId: number) {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }

  updateUser(userId: number, userData: any) {
    return this.http.put(`${this.apiUrl}/${userId}`, userData);
  }

  createUser(userData: any) {
    return this.http.post(`${this.apiUrl}`, userData);
  }

  checkEmailAvailability(email: string) {
    return this.http.post(`${this.apiUrl}/is-available`, { email });
  }

  // Implement other user-related API methods
}
