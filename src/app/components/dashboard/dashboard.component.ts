import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  token: any;

  constructor(
    private tokenService: TokenService,
    private router:Router
    ) { }

  ngOnInit() {
    this.token = this.tokenService.GetToken();
    console.log(this.token)
  }

 

}
