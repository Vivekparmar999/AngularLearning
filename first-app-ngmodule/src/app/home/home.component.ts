import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Strings } from '../enum/string.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

      ngOnInit(): void {
        var data = localStorage.getItem(Strings.STORAGE_KEY);
        console.log(data);
        if(data)
        {
          this.courses = JSON.parse(data);
        }
      }

  courses: any[] = [];

  //Constructor Injection Method 1
  //constructor(private router:Router){}

  //Constructor Injection Method 2
  private router = inject(Router);

  navigate(){
    this.router.navigate(['/about']);
  }
}
