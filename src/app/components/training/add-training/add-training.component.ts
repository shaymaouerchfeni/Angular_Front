import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TrainingService } from "src/app/services/training.service";
import io from "socket.io-client";
import { environment } from "../../../../environments/environment";
import { FileUploader } from "ng2-file-upload";

@Component({
  selector: "app-add-training",
  templateUrl: "./add-training.component.html",
  styleUrls: ["./add-training.component.scss"],
})
export class AddTrainingComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: `${environment.apiUrl}/upload`,
    itemAlias: "image",
  });
  programToUpload: string;
  socket: any;
  trainingForm: FormGroup;
  msError: string;
  msSuccess: string;
  trainingCourses: any = [];
  level = ["beginner", "intermediate", "advanced"];

  constructor(
    private fb: FormBuilder,
    private trainingService: TrainingService
  ) {
    this.socket = io(environment.Url);
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

  allTraining() {
    this.trainingService.getAllTraining().subscribe((data) => {
      console.log(data);
      this.trainingCourses = data.trainingCourses;
    });
  }

  programChangeEvent(fileInput: any) {
    this.programToUpload = fileInput.target.files[0]["name"];
    console.log("filechange", this.programToUpload);
  }

  addCustomKeyWords = (term) => term;

  submitTraining() {
    console.log();
    let exist = this.trainingCourses.filter(
      (c) =>
        c.title.toLowerCase() == this.trainingForm.value.title.toLowerCase() &&
        c.title.toLowerCase() == this.trainingForm.value.title.toLowerCase()
    );

    console.log(exist);

    if (exist.length !== 0) {
      this.msError = "this training is already exist ";
      return null;
    }

    this.trainingForm.value.program = this.programToUpload;

    this.trainingService
      .addTraining(this.trainingForm.value)
      .subscribe((data) => {
        this.trainingForm.reset();
        this.msError = "";
        this.msSuccess = "created successfully";

        setTimeout(() => {
          this.msSuccess = "";
        }, 3000);
        this.socket.emit("refresh", {});
      });
  }
}
