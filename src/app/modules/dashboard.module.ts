import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { TokenService } from "../services/token.service";
import { ToolbarComponent } from "../components/toolbar/toolbar.component";
import { SideComponent } from "../components/side/side.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { JwPaginationComponent } from "jw-angular-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { NgSelectModule } from "@ng-select/ng-select";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { DatePipe } from "@angular/common";

import { AddInstructorComponent } from "../components/instructor/add-instructor/add-instructor.component";
import { ListInstructorsComponent } from "../components/instructor/list-instructors/list-instructors.component";
import { ListTrainingComponent } from "../components/training/list-training/list-training.component";
import { AddTrainingComponent } from "../components/training/add-training/add-training.component";
import { TrainingService } from "../services/training.service";
import { AddTrainingSessionComponent } from "../components/trainingSession/add-training-session/add-training-session.component";
import { ListTrainingSessionsComponent } from "../components/trainingSession/list-training-sessions/list-training-sessions.component";
import { TrainingSessionService } from "../services/training-session.service";
import { FileSelectDirective } from "ng2-file-upload";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    JwPaginationComponent,
    FileSelectDirective,
    DashboardComponent,
    ToolbarComponent,
    SideComponent,
    AddInstructorComponent,
    ListInstructorsComponent,
    ListTrainingComponent,
    AddTrainingComponent,
    AddTrainingSessionComponent,
    ListTrainingSessionsComponent,
  ],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    NgSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  exports: [DashboardComponent],
  providers: [TokenService, TrainingService, TrainingSessionService, DatePipe],
})
export class DashboardModule {}
