import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
    //Parent-Component=Admin & Child-Component=courses
  //Here will recieve data from parent-component=Admin
  //Input should added in child component
  @Input() course: any;
  @Input() isDelete = false;

  deleteCourse() {

  }
}
