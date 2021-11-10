import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthTabsComponent } from '../components/auth-tabs/auth-tabs.component';
import { LoginComponent } from '../components/login/login.component';
import { SingupComponent } from '../components/singup/singup.component';
import { AuthService } from '../services/auth.service';


@NgModule({
  declarations: [AuthTabsComponent, LoginComponent, SingupComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [AuthTabsComponent, LoginComponent, SingupComponent],
  providers: [AuthService]

})
export class AuthModule { }
