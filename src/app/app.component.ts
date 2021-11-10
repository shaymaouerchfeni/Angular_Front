import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenService } from "./services/token.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "frontEnd";

  constructor(private router: Router, private tokenservice: TokenService) {}

  ngOnInit() {
    const token = this.tokenservice.GetToken();
    if (token) {
      this.router.navigate(["dashboard/list-training"]);
    } else {
      this.router.navigate([""]);
    }
  }
}
