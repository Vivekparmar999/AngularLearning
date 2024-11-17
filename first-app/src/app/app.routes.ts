import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', redirectTo:'/home' ,pathMatch: 'full'}, //Default HomePage will redirect to home page
    //{path: '', component: HomeComponent}, //It will not redirect
    {path: 'app/home', component: HomeComponent}, // Define url path & it`s component
];
