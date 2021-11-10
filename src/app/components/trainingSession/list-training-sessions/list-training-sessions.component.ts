import { Component, OnInit } from "@angular/core";
import { TrainingSessionService } from "src/app/services/training-session.service";
import { TokenService } from "src/app/services/token.service";
@Component({
  selector: "app-list-training-sessions",
  templateUrl: "./list-training-sessions.component.html",
  styleUrls: ["./list-training-sessions.component.scss"],
})
export class ListTrainingSessionsComponent implements OnInit {
  trainingSessions = [];
  trainingSessionsToShow = [];
  pageOfItems: Array<any>;
  search: string;
  user: any;

  constructor(
    private trainingSessionService: TrainingSessionService,
    private tokenService: TokenService
  ) {
    this.user = this.tokenService.GetPayload();
  }

  ngOnInit() {
    this.allTrainingSessions();
  }

  onChangePage(pageOfItems) {
    console.log("page of items", pageOfItems);
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  allTrainingSessions() {
    this.trainingSessionService.getAllTrainingSessions().subscribe((data) => {
      console.log(data);
      this.trainingSessions = data.trainingSessions;
      this.trainingSessionsToShow = this.trainingSessions;
    });
  }

  searchTrainingSession() {
    this.trainingSessionsToShow = this.trainingSessions;
    this.trainingSessionsToShow = this.trainingSessionsToShow.filter(
      (trainingSession) =>
        trainingSession.training.trainingName
          .toLowerCase()
          .search(this.search) !== -1
    );
  }
}
