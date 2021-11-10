import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { AuthGuard } from "../services/auth.guard";

import { AddInstructorComponent } from "../components/instructor/add-instructor/add-instructor.component";
import { ListInstructorsComponent } from "../components/instructor/list-instructors/list-instructors.component";
import { ListTrainingComponent } from "../components/training/list-training/list-training.component";
import { AddTrainingComponent } from "../components/training/add-training/add-training.component";
import { AddTrainingSessionComponent } from "../components/trainingSession/add-training-session/add-training-session.component";
import { ListTrainingSessionsComponent } from "../components/trainingSession/list-training-sessions/list-training-sessions.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "add-instructor", component: AddInstructorComponent },

      { path: "list-instructors", component: ListInstructorsComponent },

      { path: "list-training", component: ListTrainingComponent },

      { path: "add-training", component: AddTrainingComponent },

      {
        path: "list-training-sessions",
        component: ListTrainingSessionsComponent,
      },

      { path: "add-training-session", component: AddTrainingSessionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
