import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { environment } from '../../environments/environment';

const BASEURL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  
  constructor(private http: HttpClient) { }

  getAllTraining(): Observable<any> {
    return this.http.get(`${BASEURL}/trainingCourses`);
  }


  addTraining(body): Observable<any> {
    return this.http.post(`${BASEURL}/training/add-training`, body);
  }

  deleteTraining(id): Observable<any> {
    return this.http.delete(`${BASEURL}/training/delete-training/${id}`);
  }

  editTraining(id,body): Observable<any> {
    return this.http.put(`${BASEURL}/training/add-training/${id}`,body);
  }



}
