import { Component, OnInit } from '@angular/core';
import { TokenService } from "src/app/services/token.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  user: any;

  constructor(private tokenService: TokenService, private router: Router) {
    this.user = this.tokenService.GetPayload();

  }

  ngOnInit() {
  }

  logout() {
    this.tokenService.DeleteToken();

    this.router.navigate(["/"]);
}

  GoToHome() {
    this.router.navigate(["dashboard/list-certification"]);
  }
}
