import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICourse } from '../Models/icourse';
import { Ipublish } from '../Models/ipublish';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
    console.log("Coming from service");
  }
  //get
  GetCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>("http://localhost:8080/api/tutorials");
  }
  //post
  SaveNewCourse(course: ICourse) {

    return this.http.post("http://localhost:8080/api/tutorials", course);
  }
  //put
  UpdateCourse(publish : Ipublish) {
    console.log(publish);
    return this.http.put("http://localhost:8080/api/tutorials/" + publish.id, publish);
  }

  RemoveCourse(id: number) {
    return this.http.delete("http://localhost:8080/api/tutorials/" + id);
  }
}
