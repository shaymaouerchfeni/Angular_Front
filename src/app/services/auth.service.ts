import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";

const BASEURL = environment.apiUrl;
const url = environment.Url;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(body): Observable<any> {
    return this.http.post(`${BASEURL}/register`, body);
  }

  loginUser(body): Observable<any> {
    return this.http.post(`${BASEURL}/login`, body);
  }

  getInstructors(): Observable<any> {
    return this.http.get(`${BASEURL}/instructors`);
  }

  deleteInstructor(id): Observable<any> {
    return this.http.delete(`${BASEURL}/instructor/delete-instructor/${id}`);
  }
}
