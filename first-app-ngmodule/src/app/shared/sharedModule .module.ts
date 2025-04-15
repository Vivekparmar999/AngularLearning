import { NgModule } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';
@NgModule({
    declarations: [CoursesComponent],
    exports: [CoursesComponent], // Make it available for other modules
  })
  export class SharedModule {}