import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;
  showSpinner = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private tokenService: TokenService

  ) { }

  ngOnInit() {
    this.init()
  }

  init() {
    this.signupForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      password: ["", Validators.required],
      role: [""]
    });
  }

  signupUser() {
    this.showSpinner = true;
    this.signupForm.value.role='admin'
    this.authService.registerUser(this.signupForm.value).subscribe(
      data => {

        this.tokenService.SetToken(data.token);
        this.signupForm.reset();
        setTimeout(() => {
          this.router.navigate(["dashboard/list-training"]);
        }, 3000);
      },
      err => {
        this.showSpinner = false;
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
