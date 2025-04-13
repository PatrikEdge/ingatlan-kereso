import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  // Bejelentkezés
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {  // Egyszerű példa
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  // Regisztráció (egyszerű példa)
  register(username: string, password: string): boolean {
    // Mivel nincs adatbázis, nem tároljuk el az adatokat
    return true;
  }

  // Kijelentkezés
  logout() {
    this.loggedIn = false;
  }

  // Ellenőrizni, hogy be van-e jelentkezve
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
