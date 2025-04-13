// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { PropertyDetailComponent } from './components/property/property-detail/property-detail.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


// Ide majd betöltjük a komponenseket
const routes: Routes = [
    { path: 'home', component: HomeComponent },       // Hozz létre minden komponenst és add meg az utakat
    { path: 'search', component: SearchComponent },
    { path: 'property/:id', component: PropertyDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: '**', component: NotFoundComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
