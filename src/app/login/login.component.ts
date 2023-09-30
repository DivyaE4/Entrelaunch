import { Component } from '@angular/core';
//import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  onSubmit() {
    // Implement authentication logic here (e.g., check credentials with a backend)
    if (this.username === 'yourUsername' && this.password === 'yourPassword') {
      // Redirect to a protected page or set a user session
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  }
}