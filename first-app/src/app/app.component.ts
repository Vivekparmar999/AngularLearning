import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
