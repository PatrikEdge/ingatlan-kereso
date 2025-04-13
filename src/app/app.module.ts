import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';  // CommonModule importálása
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service'; // AuthService importálás

@NgModule({
  declarations: [
    AppComponent,
    // Egyéb komponensek
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule, // MatToolbarModule importálása
    MatButtonModule,  
    MatIconModule,
    MatCardModule, // MatCardModule importálása
    BrowserAnimationsModule, // Ez is szükséges lehet
    RouterModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule  // CommonModule importálása, hogy a *ngFor és *ngIf működjön  // 👉 Ha ikonokat is használsz
  ],
  providers: [AuthService], // Az AuthService szolgáltató hozzáadása
  bootstrap: [AppComponent],
})
export class AppModule {}
