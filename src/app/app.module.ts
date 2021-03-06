import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AuthModule } from "./modules/auth.module";
import { AuthRoutingModule } from "./modules/auth-routing.module";
import { DashboardModule } from "./modules/dashboard.module";
import { DashboardRoutingModule } from "./modules/dashboard-routing.module";
import { CookieService } from "ngx-cookie-service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./services/token-interceptor";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    DashboardRoutingModule,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
