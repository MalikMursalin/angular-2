import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  template: `
    <div>
      <h2>Login</h2>
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="email">Email:</label>
          <input [(ngModel)]="user.email" type="email" id="email" name="email"  required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input [(ngModel)]="user.password" type="password" id="password" name="password"  required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  `,
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  user: any = {email: '', password: ''}; // Initialize the user object to store form data

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // You can now use authService methods here for authentication.
  }

  onSubmit() {
    // Call the AuthService's login method with the user's email and password
    this.authService.login({email: this.user.email, password: this.user.password})
      .subscribe((response: any) => {

        console.log('Authentication response:', response);

        // You can redirect the user or display a message based on the response.
      });
  }
}
