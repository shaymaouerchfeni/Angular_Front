import { Component, OnInit } from "@angular/core";
import { TrainingService } from "src/app/services/training.service";
import { TokenService } from "src/app/services/token.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { environment } from "../../../../environments/environment";

import { ActivatedRoute, Router } from "@angular/router";
import { FileUploader } from "ng2-file-upload";

import io from "socket.io-client";
import * as M from "materialize-css";
declare var $: any;

@Component({
  selector: "app-list-training",
  templateUrl: "./list-training.component.html",
  styleUrls: ["./list-training.component.scss"],
})
export class ListTrainingComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: `${environment.apiUrl}/upload`,
    itemAlias: "image",
  });
  user: any;
  socket: any;
  trainingCourses = [];
  training: any;
  trainingForm: FormGroup;
  pageOfItems: Array<any>;
  search: string;
  trainingToShow = [];
  programToUpload: string;

  constructor(
    private trainingService: TrainingService,
    private tokenService: TokenService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.user = this.tokenService.GetPayload();

    this.socket = io(environment.Url);
  }

  init() {
    this.trainingForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      numberHours: ["", Validators.required],
      program: [""],
      level: ["", Validators.required],
      tags: ["", Validators.required],
    });
  }

  onChangePage(pageOfItems) {
    console.log("page of items", pageOfItems);
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  ngOnInit() {
    this.init();

    this.allTraining();
    this.socket.on("refreshPage", () => {
      this.allTraining();
    });
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log("Uploaded File Details:", item);
    };
  }

  allTraining() {
    this.trainingService.getAllTraining().subscribe(
      (data) => {
        console.log(data);
        this.trainingCourses = data.trainingCourses;
        this.trainingToShow = this.trainingCourses;
      },
      (err) => {
        if (err.error.token === null) {
          this.tokenService.DeleteToken();
          this.router.navigate([""]);
        }
      }
    );
  }

  openModal(modal) {
    $(document).ready(() => {
      $(".modal").modal();
      $(modal).modal("open");
    });
  }

  openModalDelete(training, modal) {
    this.openModal(modal);
    this.training = training;
    console.log(this.training);
  }
  deleteTraining(id) {
    console.log(id);
    this.trainingService.deleteTraining(id).subscribe((data) => {
      // this.trainingCourses = this.trainingCourses.filter(x => x._id !== id);
      this.socket.emit("refresh", {});
    });
  }

  openModalEdit(training, modal) {
    this.openModal(modal);
    this.training = training;
    console.log(this.training);
    this.trainingForm = this.fb.group({
      title: [this.training.title, Validators.required],
      description: [this.training.description, Validators.required],
      numberHours: [this.training.numberHours, Validators.required],
      program: [this.training.program],
      level: [this.training.level, Validators.required],
      tags: [this.training.tags, Validators.required],
    });
  }

  programChangeEvent(fileInput: any) {
    this.programToUpload = fileInput.target.files[0]["name"];
    console.log("filechange", this.programToUpload);
  }
  addCustomKeyWords = (term) => term;

  editTraining(training) {
    console.log(training);
    console.log(this.trainingForm.value);
    this.trainingForm.value.program = this.programToUpload;

    this.trainingService
      .editTraining(training._id, this.trainingForm.value)
      .subscribe((data) => {
        this.trainingForm.reset();
        this.socket.emit("refresh", {});
      });
  }

  cancel() {
    this.trainingForm.reset();
  }

  searchTraining() {
    this.trainingToShow = this.trainingCourses;
    this.trainingToShow = this.trainingToShow.filter(
      (training) =>
        training.title.toLowerCase().search(this.search) !== -1 ||
        training.level.toLowerCase().search(this.search) !== -1
    );
  }

  goNext(training) {
    console.log("training", training);
    this.router.navigate(["dashboard/choose-available-dates", training._id]);
  }
}
