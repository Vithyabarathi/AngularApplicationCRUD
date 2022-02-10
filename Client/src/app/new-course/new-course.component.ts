import { Component, OnInit } from '@angular/core';
import { ICourse } from '../Models/icourse';
import { FormsModule } from '@angular/forms';
import { CoursesService } from '../service/courses.service';
import { Ipublish } from '../Models/ipublish';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {


  course: ICourse = {} as ICourse;
  publish : Ipublish = {} as Ipublish;
  txtCourseId: number = 0;
  txtCourseName: string = "";
  txtTrainer: string = "";
  txtFees: number = 0;
  txtRating: string = "";
  txtRating1: string = "";
  constructor(private courseService: CoursesService) {

  }
  SaveCourse(): void {
    this.course.id = this.txtCourseId;
    this.course.title = this.txtCourseName;
    this.course.description = this.txtTrainer;
    this.course.published = this.txtFees;
    this.course.createdAt = this.txtRating;
    this.course.updatedAt = this.txtRating1;
    this.courseService.SaveNewCourse(this.course).subscribe(res => { console.log(res); });
  }

  UpdateCourse(): void {
    this.publish.id = this.txtCourseId;
    this.publish.title = this.txtCourseName;
    this.publish.description = this.txtTrainer;
    this.publish.published = this.txtFees;
    
    this.courseService.UpdateCourse(this.publish).subscribe(res => { console.log(res); });
  }

  DeleteCourse(): void {
    this.courseService.RemoveCourse(this.txtCourseId).subscribe(res => console.log(res));
  }
  ngOnInit(): void {
  }

}
