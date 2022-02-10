import { Component } from '@angular/core';
import { CoursesService } from './service/courses.service';
import { ICourse } from './Models/icourse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CourseFromService';
  courses: ICourse[] = [];
  constructor(private courseService: CoursesService) {
    courseService.GetCourses().subscribe((c) => { this.courses = c; }

    );
  }
}
