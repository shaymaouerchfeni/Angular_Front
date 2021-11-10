import { Component, OnInit } from "@angular/core";
import { TrainingService } from "src/app/services/training.service";
import { TokenService } from "src/app/services/token.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { TrainingSessionService } from "src/app/services/training-session.service";
import { DatePipe } from "@angular/common";

import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";

import { Router } from "@angular/router";
import io from "socket.io-client";
import * as M from "materialize-css";
@Component({
  selector: "app-add-training-session",
  templateUrl: "./add-training-session.component.html",
  styleUrls: ["./add-training-session.component.scss"],
})
export class AddTrainingSessionComponent implements OnInit {
  msError: string;
  msSuccess: string;
  trainingCourses = [];
  instructors = [];
  instructorSelected: any;
  trainingSelected: any;
  selectedMoment: any;
  availableDates = [];
  constructor(
    private trainingService: TrainingService,
    private tokenService: TokenService,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private trainingSessionService: TrainingSessionService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.allInstructors();
    this.allTrainingCourses();
  }

  allTrainingCourses() {
    this.trainingService.getAllTraining().subscribe((data) => {
      console.log(data);
      this.trainingCourses = data.trainingCourses;
    });
  }

  allInstructors() {
    this.authService.getInstructors().subscribe((data) => {
      console.log(data);
      this.instructors = data.instructors;
    });
  }

  allSessiosByInstructor(instructor) {
    // this.availableDateService.getAllAvailableDatesBySupervisor(supervisor._id).subscribe(data =>{
    //   console.log(data)
    //   this.availableDates = data.availableDatesSupervisor;
    // })
  }

  async submitTrainingSession() {
    if (
      this.instructorSelected == undefined ||
      this.trainingSelected == undefined ||
      this.selectedMoment == undefined ||
      this.selectedMoment[0] == null ||
      this.selectedMoment[1] == null
    ) {
      this.msError = "all of them are required ";
      console.log("all of them are required ");
      return null;
    }

    let isAvilableSupersvior = this.availableDates.filter(
      (a) =>
        (this.selectedMoment[0].getTime() > new Date(a.startDate).getTime() &&
          this.selectedMoment[0].getTime() < new Date(a.endDate).getTime()) ||
        (this.selectedMoment[1].getTime() > new Date(a.startDate).getTime() &&
          this.selectedMoment[1].getTime() < new Date(a.endDate).getTime()) ||
        (new Date(a.startDate).getTime() > this.selectedMoment[0].getTime() &&
          new Date(a.startDate).getTime() < this.selectedMoment[1].getTime()) ||
        (new Date(a.enddate).getTime() > this.selectedMoment[0].getTime() &&
          new Date(a.enddate).getTime() < this.selectedMoment[1].getTime())
    );
    console.log("isAvilableInstructor", isAvilableSupersvior);
    if (isAvilableSupersvior.length !== 0) {
      this.msError = "this instructor is not available on this date ";
      return null;
    }

    let trainingSession = {
      training: this.trainingSelected,
      instructor: this.instructorSelected,
      startDate: this.datePipe
        .transform(this.selectedMoment[0], "yyyy-MM-dd h:mm")
        .toString(),
      endDate: this.datePipe
        .transform(this.selectedMoment[1], "yyyy-MM-dd h:mm")
        .toString(),
    };

    this.trainingSessionService
      .addTrainingSession(trainingSession)
      .subscribe((data) => {
        this.msError = "";
        this.msSuccess = "created successfully";
        setTimeout(() => {
          this.msSuccess = "";
        }, 3000);
      });
  }
}
