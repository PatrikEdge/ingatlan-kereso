import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    console.log('Regisztráció próbálkozás...');
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'A jelszavak nem egyeznek.';
      console.log('A jelszavak nem egyeznek');
      return;
    }

    const isSuccess = this.authService.register(this.username, this.password);
    if (isSuccess) {
      console.log('Sikeres regisztráció');
      this.router.navigate(['/login']);  // Ha sikeres, navigálj a bejelentkezés oldalra
    } else {
      this.errorMessage = 'A regisztráció sikertelen.';
      console.log('A regisztráció sikertelen');
    }
  }
}
