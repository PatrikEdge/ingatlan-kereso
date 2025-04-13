import { Component } from '@angular/core';
import { RouterModule,RouterOutlet } from '@angular/router'; // ← Ezt hozzáadjuk
import { AuthService } from './services/auth.service';
import { mockIngatlanok } from './mock-ingatlanok';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Ideiglenes workaround
})
export class AppComponent {
  ingatlanok = mockIngatlanok;

  constructor(public authService: AuthService, private router: Router) {}

   // Kijelentkezés
   logout() {
    this.authService.logout();
  }

  // Bejelentkezés oldalra navigálás
  goToLogin() {
    this.router.navigate(['/login']);
  }

  selectedIngatlan: number | null = null;

  toggleDetails(id: number) {
    this.selectedIngatlan = this.selectedIngatlan === id ? null : id;
  }

  addToFavorites(id: number) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    console.log(`Ingatlan ${id} kedvencekhez adva!`);
    // Itt később el lehetne menteni a kedvencek közé
  }
}
