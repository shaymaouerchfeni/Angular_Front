import { Component, OnInit } from "@angular/core";
import io from "socket.io-client";
import { TokenService } from "src/app/services/token.service";
import { environment } from "../../../environments/environment";
import { TrainingService } from "src/app/services/training.service";
import { AuthService } from "src/app/services/auth.service";
import { TrainingSessionService } from "src/app/services/training-session.service";

@Component({
  selector: "app-side",
  templateUrl: "./side.component.html",
  styleUrls: ["./side.component.scss"],
})
export class SideComponent implements OnInit {
  user: any;
  socket: any;
  trainingCourses = [];
  instructors = [];
  trainingSessions = [];
  constructor(
    private tokenService: TokenService,
    private trainingService: TrainingService,
    private authService: AuthService,
    private trainingSessionService: TrainingSessionService
  ) {
    this.user = this.tokenService.GetPayload();

    this.socket = io(environment.Url);
  }

  ngOnInit() {
    this.allTraining();
    this.allInstructors();
    this.allTrainingSessions();
    this.socket.on("refreshPage", () => {
      this.allTraining();
      this.allInstructors();
      this.allTrainingSessions();
    });
  }

  allTraining() {
    this.trainingService.getAllTraining().subscribe((data) => {
      console.log(data);
      this.trainingCourses = data.trainingCourses;
    });
  }

  allInstructors() {
    this.authService.getInstructors().subscribe((data) => {
      console.log(data);
      this.instructors = data.instructors;
      console.log("instructors", this.instructors);
    });
  }

  allTrainingSessions() {
    this.trainingSessionService.getAllTrainingSessions().subscribe((data) => {
      console.log(data);
      this.trainingSessions = data.trainingSessions;
    });
  }
}
