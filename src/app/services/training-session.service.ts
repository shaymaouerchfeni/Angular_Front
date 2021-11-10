import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { environment } from '../../environments/environment';

const BASEURL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {

  constructor(private http: HttpClient) { }

  getAllTrainingSessions(): Observable<any> {
    return this.http.get(`${BASEURL}/trainingSessions`);
  }

  // getAllAvailableDatesBySupervisor(SuperviorID): Observable<any> {
  //   return this.http.get(`${BASEURL}/availableDates/supervisor/${SuperviorID}`);
  // }

  // getAllAvailableDatesByCertif(certifID): Observable<any> {
  //   return this.http.get(`${BASEURL}/availableDates/certif/${certifID}`);
  // }


  addTrainingSession(body): Observable<any> {
    return this.http.post(`${BASEURL}/trainingSession/add-training-session`, body);
  }



  // addStudent(id,body): Observable<any> {
  //   return this.http.post(`${BASEURL}/availableDates/add-student/${id}`, body);
  // }

  // confirmStudent(id,body): Observable<any> {
  //   return this.http.put(`${BASEURL}/availableDates/confirm-student/${id}`, body);
  // }



  // sendMail(body): Observable<any> {
  //   return this.http.post(`${BASEURL}/sendMail`, body);
  // }

}
