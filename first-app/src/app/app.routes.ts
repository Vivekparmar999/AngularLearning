import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    //{path: '', component: HomeComponent}, //It will not redirect
    //{path: 'about', component: AboutComponent},
    //{path: 'about/:id', component: AboutComponent},
    //{path: 'admin', component: AdminComponent},
    
    //Below Example of lazy loading
    {   path: '', 
        loadComponent:()=> import('./home/home.component').then((c) => c.HomeComponent)
    },
    {   path: 'about', 
        loadComponent:()=> import('./about/about.component').then((c) => c.AboutComponent)
    },
    {   path: 'admin', 
        loadComponent:()=> import('./admin/admin.component').then((c) => c.AdminComponent)
    }
];
