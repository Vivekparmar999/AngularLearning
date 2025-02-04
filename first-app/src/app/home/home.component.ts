import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  //Constructor Injection Method 1
  //constructor(private router:Router){}

  //Constructor Injection Method 2
  private router = inject(Router);

  navigate(){
    this.router.navigate(['/about']);
  }
}
