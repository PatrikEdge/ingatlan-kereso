import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    console.log('Bejelentkezés próbálkozás...');
    const isSuccess = this.authService.login(this.username, this.password);
    if (isSuccess) {
      console.log('Sikeres bejelentkezés');
      this.router.navigate(['/']);  // Ha sikeres, navigálj vissza a főoldalra
    } else {
      this.errorMessage = 'Hibás felhasználónév vagy jelszó.';
      console.log('Hibás felhasználónév vagy jelszó');
    }
  }
}
