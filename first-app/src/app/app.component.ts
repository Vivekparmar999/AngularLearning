import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{//OnInit Interface , Angular LifeCycle
  
  title = 'Hi'; //Property


  constructor(){
    console.log('Constructor Call first on Page Load');
  }

  ngOnInit(){
    console.log('NgOnInit Call Second on Page Load');
  }

  changeTitle(){
    this.title = "Hi there,"
  }
}
