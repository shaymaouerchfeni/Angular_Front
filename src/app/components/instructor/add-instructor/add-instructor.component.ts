import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FileUploader } from "ng2-file-upload";
import { ToastrService } from "ngx-toastr";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-add-instructor",
  templateUrl: "./add-instructor.component.html",
  styleUrls: ["./add-instructor.component.scss"],
})
export class AddInstructorComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: `${environment.apiUrl}/upload`,
    itemAlias: "image",
  });
  pictureToUpload: string;
  cvToUpload: string;

  instructorForm: FormGroup;
  errorMessage: string;
  msSuccess: string;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.init();
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log("Uploaded File Details:", item);
      this.toastr.success("File successfully uploaded!");
    };
  }

  init() {
    this.instructorForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      password: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      cardNumber: ["", Validators.required],
      hourlyRate: ["", Validators.required],
      picture: [""],
      cv: [""],
      speciality: ["", Validators.required],
      role: [""],
    });
  }

  pictureChangeEvent(fileInput: any) {
    this.pictureToUpload = fileInput.target.files[0]["name"];
    console.log("filechange", this.instructorForm.value);
  }

  cvChangeEvent(fileInput: any) {
    this.cvToUpload = fileInput.target.files[0]["name"];
    console.log("filechange", this.instructorForm.value);
  }

  addInstructor() {
    console.log("fff", this.instructorForm.value);
    this.instructorForm.value.role = "instructor";
    console.log("picture", this.pictureToUpload);
    console.log("cv", this.cvToUpload);

    this.instructorForm.value.picture = this.pictureToUpload;
    this.instructorForm.value.cv = this.cvToUpload;

    this.authService.registerUser(this.instructorForm.value).subscribe(
      (data) => {
        this.instructorForm.reset();
        this.msSuccess = "created successfully";
        setTimeout(() => {
          this.msSuccess = "";
        }, 1000);
        this.errorMessage = "";
        console.log(data);
      },
      (err) => {
        if (err.error.msg) {
          this.errorMessage = err.error.msg[0].message;
        }
        if (err.error.message) {
          this.errorMessage = err.error.message;
        }
      }
    );
  }
}
