(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-tabs/auth-tabs.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-tabs/auth-tabs.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-panel blue bodyDiv\">\r\n  <div class=\"container bodyContainer\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-tabs\">\r\n            <ul class=\"tabs tabs-fixed-width\">\r\n              <li class=\"tab\"><a class=\"active\" href=\"#login\"> login</a></li>\r\n              <li class=\"tab\"><a href=\"#signup\"> sign app</a></li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <p style=\"text-align: center; font-size: 20px\">Welcome</p>\r\n          </div>\r\n          <div class=\"card-content auth-content\">\r\n            <div id=\"login\">\r\n              <app-login></app-login>\r\n            </div>\r\n            <div id=\"signup\">\r\n              <app-singup></app-singup>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar></app-toolbar>\r\n<div class=\"container page-wrap\" style=\"margin-top: 30px\">\r\n  <div class=\"row\">\r\n    <div class=\"col s12 m2 sidebar \">\r\n      <app-side></app-side>\r\n    </div>\r\n    <div class=\" col s12 m8 offset-m3 \">\r\n\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/instructor/add-instructor/add-instructor.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/instructor/add-instructor/add-instructor.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s10 offset-s1\" id=\"panel\">\n      <h3 id=\"title\">Add Instructor</h3>\n      <div id=\"errorMsg\" *ngIf=\"errorMessage\">\n        <span>{{ errorMessage }}</span>\n      </div>\n      <div class=\"success\">{{ msSuccess }}</div>\n\n      <form\n        autocomplete=\"off\"\n        class=\"col s12\"\n        [formGroup]=\"instructorForm\"\n        novalidate\n        (ngSubmit)=\"addInstructor()\"\n      >\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input\n              autocomplete=\"off\"\n              id=\"user_name\"\n              type=\"text\"\n              formControlName=\"username\"\n            />\n            <label for=\"user_name\">UserName</label>\n            <span\n              class=\"error\"\n              *ngIf=\"\n                !instructorForm.controls['username'].valid &&\n                instructorForm.controls['username'].touched\n              \"\n            >\n              Username is required\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input\n              autocomplete=\"off\"\n              id=\"user_name\"\n              type=\"text\"\n              formControlName=\"firstName\"\n            />\n            <label for=\"user_name\">fisrt Name</label>\n            <span\n              class=\"error\"\n              *ngIf=\"\n                !instructorForm.controls['firstName'].valid &&\n                instructorForm.controls['firstName'].touched\n              \"\n            >\n              fisrt Name is required\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input\n              autocomplete=\"off\"\n              id=\"user_name\"\n              type=\"text\"\n              formControlName=\"lastName\"\n            />\n            <label for=\"user_name\">last Name</label>\n            <span\n              class=\"error\"\n              *ngIf=\"\n                !instructorForm.controls['lastName'].valid &&\n                instructorForm.controls['lastName'].touched\n              \"\n            >\n              last Name is required\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input\n              autocomplete=\"off\"\n              id=\"user_name\"\n              type=\"number\"\n              formControlName=\"phoneNumber\"\n            />\n            <label for=\"user_name\">phone Number</label>\n            <span\n              class=\"error\"\n              *ngIf=\"\n                !instructorForm.controls['phoneNumber'].valid &&\n                instructorForm.controls['phoneNumber'].touched\n              \"\n            >\n              phone Number is required\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input\n              autocomplete=\"off\"\n              id=\"user_name\"\n              type=\"number\"\n              formControlName=\"cardNumber\"\n            />\n            <label for=\"user_name\">card Number</label>\n            <span\n              class=\"error\"\n              *ngIf=\"\n                !instructorForm.controls['cardNumber'].valid &&\n                instructorForm.controls['cardNumber'].touched\n              \"\n            >\n              card Number is required\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input\n              autocomplete=\"off\"\n              id=\"user_name\"\n              type=\"number\"\n              formControlName=\"hourlyRate\"\n            />\n            <label for=\"user_name\">hourly Rate</label>\n            <span\n              class=\"error\"\n              *ngIf=\"\n                !instructorForm.controls['hourlyRate'].valid &&\n                instructorForm.controls['hourlyRate'].touched\n              \"\n            >\n              hourly Rate is required\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <label class=\"input-field col s4\">Picture</label>\n          <div class=\"input-field col s6\">\n            <div class=\"file-upload\">\n              <input\n                type=\"file\"\n                name=\"image\"\n                ng2FileSelect\n                [uploader]=\"uploader\"\n                (change)=\"pictureChangeEvent($event)\"\n                accept=\"image/x-png,image/gif,image/jpeg\"\n                placeholder=\"choose a file\"\n              />\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <label class=\"input-field col s4\">CV</label>\n          <div class=\"input-field col s6\">\n            <div class=\"file-upload\">\n              <input\n                type=\"file\"\n                name=\"image\"\n                ng2FileSelect\n                [uploader]=\"uploader\"\n                (change)=\"cvChangeEvent($event)\"\n                accept=\"image/x-png,image/gif,image/jpeg\"\n                placeholder=\"choose a file\"\n              />\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input\n              autocomplete=\"off\"\n              id=\"user_name\"\n              type=\"text\"\n              formControlName=\"speciality\"\n            />\n            <label for=\"user_name\">speciality</label>\n            <span\n              class=\"error\"\n              *ngIf=\"\n                !instructorForm.controls['speciality'].valid &&\n                instructorForm.controls['speciality'].touched\n              \"\n            >\n              speciality is required\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"email\" type=\"email\" formControlName=\"email\" />\n            <label for=\"email\">Email</label>\n            <span\n              class=\"error\"\n              *ngIf=\"\n                !instructorForm.controls['email'].valid &&\n                instructorForm.controls['email'].touched\n              \"\n            >\n              Email is required\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"pass-word\" type=\"password\" formControlName=\"password\" />\n            <label for=\"pass-word\">Password</label>\n            <span\n              class=\"error\"\n              *ngIf=\"\n                !instructorForm.controls['password'].valid &&\n                instructorForm.controls['password'].touched\n              \"\n            >\n              Password is required\n            </span>\n          </div>\n        </div>\n\n        <button\n          class=\"btn postBtn\"\n          id=\"signupbtn\"\n          (click)=\"uploader.uploadAll()\"\n          [disabled]=\"!instructorForm.valid\"\n        >\n          Sign Up\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/instructor/list-instructors/list-instructors.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/instructor/list-instructors/list-instructors.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Search Here\" [(ngModel)]=\"search\" (keyup)=\"searchInstructor()\">\n</div>\n\n\n\n<div class=\"row\">\n  <table class=\"highlight\">\n    <thead>\n      <tr>\n          <th>user Name</th>\n          <th>email</th>\n\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let instructor of pageOfItems \">\n        <td>{{instructor.username}}</td>\n        <td>{{instructor.email}}</td>\n        <td>    <button data-target=\"modal1\" class=\"btn modal-trigger\" (click)=\"openModalDelete(instructor,'#modal1')\">Delete</button></td>\n\n      </tr>\n\n    </tbody>\n  </table>\n\n\n</div>\n<div class=\"row\">\n<div class=\"col s12 m6 offset-m6\">\n <jw-pagination [items]=\"instructorToShow\" (changePage)=\"onChangePage($event)\"></jw-pagination>\n</div>\n</div>\n\n\n<!-- Modal Structure -->\n<div id=\"modal1\" class=\"modal\">\n  <div class=\"modal-content\">\n    <h4>{{instructor?.username}}</h4>\n\n    <p>Are you sure you want to delete this instructor</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button  class=\"modal-close btn \" (click)=\"deleteInstructor(instructor?._id)\">Agree</button>\n    <button  class=\"modal-close btn \" >Close</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col s10 offset-s1\" id=\"panel\">\r\n      <div class=\"progress\" *ngIf=\"showSpinner\">\r\n        <div class=\"indeterminate\"></div>\r\n      </div>\r\n      <h3 id=\"title\">Login</h3>\r\n      <div id=\"errorMsg\" *ngIf=\"errorMessage\">\r\n        <span>{{ errorMessage }}</span>\r\n      </div>\r\n      <form\r\n        class=\"col s12\"\r\n        [formGroup]=\"loginForm\"\r\n        novalidate\r\n        (ngSubmit)=\"loginUser()\"\r\n      >\r\n        <div class=\"row\">\r\n          <div class=\"input-field col s12\">\r\n            <input id=\"user-name\" type=\"text\" formControlName=\"email\" />\r\n            <label for=\"user-name\">Email</label>\r\n            <span\r\n              class=\"error\"\r\n              *ngIf=\"\r\n                !loginForm.controls['email'].valid &&\r\n                loginForm.controls['email'].touched\r\n              \"\r\n            >\r\n              Username is required\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"input-field col s12\">\r\n            <input id=\"password\" type=\"password\" formControlName=\"password\" />\r\n            <label for=\"password\">Password</label>\r\n            <span\r\n              class=\"error\"\r\n              *ngIf=\"\r\n                !loginForm.controls['password'].valid &&\r\n                loginForm.controls['password'].touched\r\n              \"\r\n            >\r\n              Password is required\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <button\r\n          class=\"btn waves-effect\"\r\n          id=\"loginbtn\"\r\n          [disabled]=\"!loginForm.valid\"\r\n        >\r\n          Login\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side/side.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side/side.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col s12 m8\">\r\n    <a>\r\n      <span>Training Courses</span>\r\n      <p class=\"num\">{{ trainingCourses.length }}</p>\r\n    </a>\r\n  </div>\r\n  <div class=\"col s12 m8\">\r\n    <a>\r\n      <span>Instructors</span>\r\n      <p class=\"num\">{{ instructors.length }}</p>\r\n    </a>\r\n  </div>\r\n  <div class=\"col s12 m8\">\r\n    <a>\r\n      <span>Traning Session</span>\r\n      <p class=\"num\">{{ trainingSessions.length }}</p>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<ul *ngIf=\"user.role == 'admin'\" class=\"collection with-header\">\r\n  <li\r\n    *ngIf=\"user.role == 'admin'\"\r\n    class=\"collection-item\"\r\n    [routerLinkActive]=\"['active']\"\r\n    [routerLinkActiveOptions]=\"{ exact: true }\"\r\n  >\r\n    <a [routerLink]=\"['/dashboard/list-training']\">\r\n      <div>\r\n        Training Courses<a href=\"#!\" class=\"secondary-content\"\r\n          ><i class=\"material-icons\">people</i></a\r\n        >\r\n      </div>\r\n    </a>\r\n  </li>\r\n\r\n  <li\r\n    *ngIf=\"user.role == 'admin'\"\r\n    class=\"collection-item\"\r\n    [routerLinkActive]=\"['active']\"\r\n    [routerLinkActiveOptions]=\"{ exact: true }\"\r\n  >\r\n    <a [routerLink]=\"['/dashboard/add-training']\">\r\n      <div>\r\n        Add Training<a href=\"#!\" class=\"secondary-content\"\r\n          ><i class=\"material-icons\">people</i></a\r\n        >\r\n      </div>\r\n    </a>\r\n  </li>\r\n\r\n  <li\r\n    *ngIf=\"user.role == 'admin'\"\r\n    class=\"collection-item\"\r\n    [routerLinkActive]=\"['active']\"\r\n    [routerLinkActiveOptions]=\"{ exact: true }\"\r\n  >\r\n    <a [routerLink]=\"['/dashboard/list-instructors']\">\r\n      <div>\r\n        List Of Instructors<a href=\"#!\" class=\"secondary-content\"\r\n          ><i class=\"material-icons\">people</i></a\r\n        >\r\n      </div>\r\n    </a>\r\n  </li>\r\n\r\n  <li\r\n    *ngIf=\"user.role == 'admin'\"\r\n    class=\"collection-item\"\r\n    [routerLinkActive]=\"['active']\"\r\n    [routerLinkActiveOptions]=\"{ exact: true }\"\r\n  >\r\n    <a [routerLink]=\"['/dashboard/add-instructor']\">\r\n      <div>\r\n        Add Instructor<a href=\"#!\" class=\"secondary-content\"\r\n          ><i class=\"material-icons\">people</i></a\r\n        >\r\n      </div>\r\n    </a>\r\n  </li>\r\n\r\n  <li\r\n    *ngIf=\"user.role == 'admin'\"\r\n    class=\"collection-item\"\r\n    [routerLinkActive]=\"['active']\"\r\n    [routerLinkActiveOptions]=\"{ exact: true }\"\r\n  >\r\n    <a [routerLink]=\"['/dashboard/list-training-sessions']\">\r\n      <div>\r\n        list training sessions\r\n        <a href=\"#!\" class=\"secondary-content\"\r\n          ><i class=\"material-icons\">people</i></a\r\n        >\r\n      </div>\r\n    </a>\r\n  </li>\r\n  <li\r\n    *ngIf=\"user.role == 'admin'\"\r\n    class=\"collection-item\"\r\n    [routerLinkActive]=\"['active']\"\r\n    [routerLinkActiveOptions]=\"{ exact: true }\"\r\n  >\r\n    <a [routerLink]=\"['/dashboard/add-training-session']\">\r\n      <div>\r\n        add training session\r\n        <a href=\"#!\" class=\"secondary-content\"\r\n          ><i class=\"material-icons\">people</i></a\r\n        >\r\n      </div>\r\n    </a>\r\n  </li>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/singup/singup.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/singup/singup.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col s10 offset-s1\" id=\"panel\">\r\n      <div class=\"progress\" *ngIf=\"showSpinner\">\r\n        <div class=\"indeterminate\"></div>\r\n      </div>\r\n      <h3 id=\"title\">Sign Up</h3>\r\n      <div id=\"errorMsg\" *ngIf=\"errorMessage\">\r\n        <span >{{errorMessage}}</span>\r\n      </div>\r\n      <form autocomplete=\"off\"\r\n        class=\"col s12\"\r\n        [formGroup]=\"signupForm\"\r\n        novalidate\r\n        (ngSubmit)=\"signupUser()\"\r\n      >\r\n        <div class=\"row\">\r\n          <div class=\"input-field col s12\">\r\n            <input autocomplete=\"off\" id=\"user_name\" type=\"text\" formControlName=\"username\" />\r\n            <label for=\"user_name\">UserName</label>\r\n            <span\r\n              class=\"error\"\r\n              *ngIf=\"\r\n                !signupForm.controls['username'].valid &&\r\n                signupForm.controls['username'].touched\r\n              \"\r\n            >\r\n              Username is required\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"input-field col s12\">\r\n            <input id=\"email\" type=\"email\" formControlName=\"email\" />\r\n            <label for=\"email\">Email</label>\r\n            <span\r\n              class=\"error\"\r\n              *ngIf=\"\r\n                !signupForm.controls['email'].valid &&\r\n                signupForm.controls['email'].touched\r\n              \"\r\n            >\r\n              Email is required\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"input-field col s12\">\r\n            <input id=\"pass-word\" type=\"password\" formControlName=\"password\" />\r\n            <label for=\"pass-word\">Password</label>\r\n            <span\r\n              class=\"error\"\r\n              *ngIf=\"\r\n                !signupForm.controls['password'].valid &&\r\n                signupForm.controls['password'].touched\r\n              \"\r\n            >\r\n              Password is required\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <button class=\"btn waves-effect\" id=\"signupbtn\" [disabled]=\"!signupForm.valid\">\r\n          Sign Up\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar/toolbar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar/toolbar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"nav-extended\">\r\n  <div class=\"container\">\r\n    <div class=\"nav-wrapper\">\r\n      <a (click)=\"GoToHome()\" class=\"brand-logo\">tek up</a>\r\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n        <li><a (click)=\"logout()\">Logout</a></li>\r\n      </ul>\r\n    </div>\r\n    <!-- <div class=\"nav-content\">\r\n      <div class=\"nav-div\">\r\n        <img class=\"circle responsive-img\" src=\"http://placehold.it/100x100\">\r\n      </div>\r\n      <h1 class=\"profile-name\">{{user.username}}</h1>\r\n  <p class=\"user-text\">This is a test </p>\r\n    </div> -->\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/training/add-training/add-training.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/training/add-training/add-training.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <h4 id=\"title\">Add Training Course</h4>\n  <div class=\"mserror\">{{ msError }}</div>\n  <div class=\"success\">{{ msSuccess }}</div>\n  <form [formGroup]=\"trainingForm\" novalidate (ngSubmit)=\"submitTraining()\">\n    <div class=\"input-field col s12\">\n      <input formControlName=\"title\" type=\"text\" class=\"validate\" />\n      <label for=\"first_name\">title :</label>\n      <span\n        class=\"error\"\n        *ngIf=\"\n          !trainingForm.controls['title'].valid &&\n          trainingForm.controls['title'].touched\n        \"\n      >\n        title is required\n      </span>\n    </div>\n\n    <div class=\"input-field col s12\">\n      <textarea\n        formControlName=\"description\"\n        type=\"text\"\n        class=\"validate\"\n      ></textarea>\n      <label for=\"first_name\">Description :</label>\n      <span\n        class=\"error\"\n        *ngIf=\"\n          !trainingForm.controls['description'].valid &&\n          trainingForm.controls['description'].touched\n        \"\n      >\n        Description is required\n      </span>\n    </div>\n\n    <div class=\"input-field col s12\">\n      <input formControlName=\"numberHours\" type=\"number\" class=\"validate\" />\n      <label for=\"first_name\">number of Hours :</label>\n      <span\n        class=\"error\"\n        *ngIf=\"\n          !trainingForm.controls['numberHours'].valid &&\n          trainingForm.controls['numberHours'].touched\n        \"\n      >\n        number of Hours are required\n      </span>\n    </div>\n\n    <div class=\"row\">\n      <label class=\"input-field col s4\">program</label>\n      <div class=\"input-field col s6\">\n        <div class=\"file-upload\">\n          <input\n            type=\"file\"\n            name=\"image\"\n            ng2FileSelect\n            [uploader]=\"uploader\"\n            (change)=\"programChangeEvent($event)\"\n            accept=\"image/x-png,image/gif,image/jpeg\"\n            placeholder=\"choose a file\"\n          />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group\">\n        <label for=\"tags\" class=\"label\">Level</label>\n        <ng-select\n          [items]=\"level\"\n          placeholder=\" add level\"\n          formControlName=\"level\"\n        >\n        </ng-select>\n        <span\n          class=\"error\"\n          *ngIf=\"\n            !trainingForm.controls['level'].valid &&\n            trainingForm.controls['level'].touched\n          \"\n        >\n          level is required\n        </span>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group\">\n        <label for=\"tags\" class=\"label\">Training Keywords</label>\n        <ng-select\n          [items]=\"trainingCourses?.tags\"\n          [addTag]=\"addCustomKeyWords\"\n          [multiple]=\"true\"\n          placeholder=\" add custom training Keywords\"\n          formControlName=\"tags\"\n        >\n        </ng-select>\n      </div>\n    </div>\n\n    <div class=\"col s6 offset-m6\">\n      <button\n        class=\"btn postBtn\"\n        id=\"loginbtn\"\n        (click)=\"uploader.uploadAll()\"\n        [disabled]=\"!trainingForm.valid\"\n      >\n        Post\n      </button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/training/list-training/list-training.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/training/list-training/list-training.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\n  <input\n    type=\"text\"\n    class=\"form-control\"\n    placeholder=\"Search Here\"\n    [(ngModel)]=\"search\"\n    (keyup)=\"searchTraining()\"\n  />\n</div>\n\n<div class=\"row\">\n  <div class=\"col s12 m4\" *ngFor=\"let training of pageOfItems\">\n    <div class=\"card blue-grey darken-1\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\"></span>\n        <p>{{ training.title }}</p>\n        <p>{{ training.level }}</p>\n      </div>\n      <div class=\"card-action\">\n        <button\n          *ngIf=\"user.role == 'student'\"\n          class=\"btn modal-trigger\"\n          (click)=\"goNext(training)\"\n        >\n          enter\n        </button>\n        <button\n          *ngIf=\"user.role == 'admin'\"\n          data-target=\"modal1\"\n          class=\"btn modal-trigger\"\n          (click)=\"openModalDelete(training, '#modal1')\"\n        >\n          Delete\n        </button>\n        <button\n          *ngIf=\"user.role == 'admin'\"\n          data-target=\"modal2\"\n          class=\"btn modal-trigger\"\n          (click)=\"openModalEdit(training, '#modal2')\"\n        >\n          Modifier\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col s12 m6 offset-m6\">\n    <jw-pagination\n      [items]=\"trainingToShow\"\n      (changePage)=\"onChangePage($event)\"\n    ></jw-pagination>\n  </div>\n</div>\n\n<!-- <div class=\"card text-center m-3\">\n  <h3 class=\"card-header\">Angular 8 Pagination Example</h3>\n  <div class=\"card-body\">\n      <div *ngFor=\"let item of pageOfItems\">{{item.companyName}}</div>\n  </div>\n\n</div> -->\n\n<!-- Modal Structure -->\n<div id=\"modal1\" class=\"modal\">\n  <div class=\"modal-content\">\n    <h4>{{ training?.title }}</h4>\n    <h4>{{ training?.level }}</h4>\n    <p>Are you sure you want to delete this training</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"modal-close btn\" (click)=\"deleteTraining(training._id)\">\n      Agree\n    </button>\n    <button class=\"modal-close btn\">Close</button>\n  </div>\n</div>\n\n<!-- Modal Structure -->\n<div id=\"modal2\" class=\"modal\">\n  <div class=\"modal-content\">\n    <h4></h4>\n\n    <div class=\"row\">\n      <h4>Edit Training</h4>\n      <form\n        [formGroup]=\"trainingForm\"\n        novalidate\n        (ngSubmit)=\"editTraining(training)\"\n      >\n        <div class=\"input-field col s6 m7 offset-m2\">\n          <input\n            formControlName=\"title\"\n            type=\"text\"\n            class=\"validate\"\n            value=\"{{ training?.title }}\"\n          />\n          <label for=\"first_name\">title :</label>\n          <span\n            class=\"error\"\n            *ngIf=\"\n              !trainingForm.controls['title'].valid &&\n              trainingForm.controls['title'].touched\n            \"\n          >\n            title is required\n          </span>\n        </div>\n\n        <div class=\"input-field col s6 m7 offset-m2\">\n          <textarea\n            formControlName=\"description\"\n            type=\"text\"\n            class=\"validate\"\n            value=\"{{ training?.description }}\"\n          ></textarea>\n          <label for=\"first_name\">Description :</label>\n          <span\n            class=\"error\"\n            *ngIf=\"\n              !trainingForm.controls['description'].valid &&\n              trainingForm.controls['description'].touched\n            \"\n          >\n            Description is required\n          </span>\n        </div>\n\n        <div class=\"input-field col s6 m7 offset-m2\">\n          <input\n            formControlName=\"numberHours\"\n            type=\"number\"\n            class=\"validate\"\n            value=\"{{ training?.numberHours }}\"\n          />\n          <label for=\"first_name\">number of Hours :</label>\n          <span\n            class=\"error\"\n            *ngIf=\"\n              !trainingForm.controls['numberHours'].valid &&\n              trainingForm.controls['numberHours'].touched\n            \"\n          >\n            number of Hours are required\n          </span>\n        </div>\n\n        <div class=\"row\">\n          <label class=\"input-field col offset-2 s4\">program</label>\n          <div class=\"input-field col s4\">\n            <div class=\"file-upload\">\n              <input\n                type=\"file\"\n                name=\"image\"\n                ng2FileSelect\n                [uploader]=\"uploader\"\n                (change)=\"programChangeEvent($event)\"\n                accept=\"image/x-png,image/gif,image/jpeg\"\n                placeholder=\"choose a file\"\n              />\n            </div>\n          </div>\n          <div class=\"col 4\">\n            <img\n              src=\"http://localhost:3000/image/{{ training?.program }}\"\n              width=\"60\"\n              height=\"30\"\n              alt=\"user\"\n            />\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s6 m7 offset-m2\">\n            <input\n              formControlName=\"level\"\n              type=\"text\"\n              class=\"validate\"\n              value=\"{{ training?.level }}\"\n            />\n            <label for=\"first_name\">level :</label>\n            <span\n              class=\"error\"\n              *ngIf=\"\n                !trainingForm.controls['level'].valid &&\n                trainingForm.controls['level'].touched\n              \"\n            >\n              level is required\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"form-group input-field col s6 m7 offset-m2\">\n            <label for=\"tags\" class=\"label\">Training Keywords</label>\n            <ng-select\n              [items]=\"training?.tags\"\n              [addTag]=\"addCustomKeyWords\"\n              [multiple]=\"true\"\n              placeholder=\" add custom training Keywords\"\n              formControlName=\"tags\"\n            >\n            </ng-select>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s4 offset-m3\">\n            <button\n              class=\"modal-close btn postBtn\"\n              (click)=\"uploader.uploadAll()\"\n              [disabled]=\"!trainingForm.valid\"\n            >\n              Edit\n            </button>\n          </div>\n\n          <div class=\"col s4\">\n            <button class=\"modal-close btn postBtn\">Close</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/trainingSession/add-training-session/add-training-session.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/trainingSession/add-training-session/add-training-session.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <h4 id=\"title\">Add Training Session</h4>\n  <div class=\"error\">{{ msError }}</div>\n  <div class=\"success\">{{ msSuccess }}</div>\n  <div class=\"row\">\n    <div class=\"form-group\">\n      <ng-select\n        class=\"custom\"\n        [items]=\"instructors\"\n        bindLabel=\"username\"\n        placeholder=\"Select instructor\"\n        [multiple]=\"true\"\n        appendTo=\"body\"\n        [(ngModel)]=\"instructorSelected\"\n        (blur)=\"allSessiosByInstructor(instructorSelected)\"\n      >\n      </ng-select>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group\">\n      <ng-select\n        class=\"custom\"\n        [items]=\"trainingCourses\"\n        bindLabel=\"title\"\n        placeholder=\"Select training\"\n        appendTo=\"body\"\n        [(ngModel)]=\"trainingSelected\"\n      >\n      </ng-select>\n    </div>\n  </div>\n\n  <div class=\"form-group col s12\">\n    <label>\n      <input\n        [owlDateTime]=\"dt1\"\n        [selectMode]=\"'range'\"\n        [(ngModel)]=\"selectedMoment\"\n        [owlDateTimeTrigger]=\"dt1\"\n        placeholder=\"Date Time\"\n      />\n      <owl-date-time #dt1></owl-date-time>\n    </label>\n  </div>\n</div>\n<div class=\"col s12 m3 offset-m9\">\n  <button class=\"btn\" (click)=\"submitTrainingSession()\">send</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/trainingSession/list-training-sessions/list-training-sessions.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/trainingSession/list-training-sessions/list-training-sessions.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\n  <input\n    type=\"text\"\n    class=\"form-control\"\n    placeholder=\"Search Here\"\n    [(ngModel)]=\"search\"\n    (keyup)=\"searchTrainingSession()\"\n  />\n</div>\n\n<div class=\"row\">\n  <div class=\"col s12 m4\" *ngFor=\"let trainingSession of pageOfItems\">\n    <div class=\"card blue-grey darken-1\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\"></span>\n        Training :\n        {{ trainingSession.training.title }}\n        <div>\n          Instructors:\n          <span *ngFor=\"let instructor of trainingSession.instructor\">\n            {{ instructor.username }}\n          </span>\n        </div>\n      </div>\n      <div class=\"card-action\">\n        <p>from : &nbsp;{{ trainingSession.startDate }}</p>\n        <p>to &nbsp; &nbsp; : &nbsp;{{ trainingSession.endDate }}</p>\n        <!-- <button data-target=\"modal1\" class=\"btn modal-trigger\" (click)=\"openModalDelete(trainingSession,'#modal1')\">Delete</button> -->\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col s12 m6 offset-m6\">\n    <jw-pagination\n      [items]=\"trainingSessionsToShow\"\n      (changePage)=\"onChangePage($event)\"\n    ></jw-pagination>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n}\n\n.page-wrap {\n  position: relative;\n}\n\n.sidebar {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFByb2Zlc3Npb25hbFxcYnNhbXBseVxccGVyc29uYWxcXHN0dWR5XFxpb25pY1xccHJvamVjdFxcZnJvbnRlbmQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREdBO0VBRUUsa0JBQUE7QUNERjs7QURJQTtFQUVFLGVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ucGFnZS13cmFwIHtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcblxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuXHJcblxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhZ2Utd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/token.service */ "./src/app/services/token.service.ts");




let AppComponent = class AppComponent {
    constructor(router, tokenservice) {
        this.router = router;
        this.tokenservice = tokenservice;
        this.title = "frontEnd";
    }
    ngOnInit() {
        const token = this.tokenservice.GetToken();
        if (token) {
            this.router.navigate(["dashboard/list-training"]);
        }
        else {
            this.router.navigate([""]);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/auth.module */ "./src/app/modules/auth.module.ts");
/* harmony import */ var _modules_auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/auth-routing.module */ "./src/app/modules/auth-routing.module.ts");
/* harmony import */ var _modules_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dashboard.module */ "./src/app/modules/dashboard.module.ts");
/* harmony import */ var _modules_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/dashboard-routing.module */ "./src/app/modules/dashboard-routing.module.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/token-interceptor */ "./src/app/services/token-interceptor.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _modules_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
            _modules_auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _modules_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"],
            _modules_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"],
        ],
        providers: [
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"],
                multi: true,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/auth-tabs/auth-tabs.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/auth-tabs/auth-tabs.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bodyDiv {\n  height: 100vh;\n}\n\ndiv.bodyContainer {\n  margin-top: 20px !important;\n}\n\n.tabs a {\n  color: #64b5f6;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.tabs .active {\n  background: inherit !important;\n}\n\n.auth-content {\n  height: 480px !important;\n}\n\n.card .card-content {\n  padding: 15px;\n  border-radius: 0 0 2px 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoLXRhYnMvRTpcXFByb2Zlc3Npb25hbFxcYnNhbXBseVxccGVyc29uYWxcXHN0dWR5XFxpb25pY1xccHJvamVjdFxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGF1dGgtdGFic1xcYXV0aC10YWJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2F1dGgtdGFicy9hdXRoLXRhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwyQkFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0MsOEJBQUE7QUNFRDs7QURBQTtFQUNFLHdCQUFBO0FDR0Y7O0FEQUE7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC10YWJzL2F1dGgtdGFicy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5RGl2e1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuZGl2LmJvZHlDb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFicyBhe1xyXG4gIGNvbG9yOiAjNjRiNWY2O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnRhYnMgLmFjdGl2ZXtcclxuIGJhY2tncm91bmQ6IGluaGVyaXQgIWltcG9ydGFudDtcclxufVxyXG4uYXV0aC1jb250ZW50e1xyXG4gIGhlaWdodDogNDgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMnB4IDJweDtcclxufVxyXG5cclxuXHJcblxyXG4iLCIuYm9keURpdiB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmRpdi5ib2R5Q29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4udGFicyBhIHtcbiAgY29sb3I6ICM2NGI1ZjY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50YWJzIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLWNvbnRlbnQge1xuICBoZWlnaHQ6IDQ4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIC5jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMnB4IDJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/auth-tabs/auth-tabs.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/auth-tabs/auth-tabs.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTabsComponent", function() { return AuthTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_2__);



let AuthTabsComponent = class AuthTabsComponent {
    constructor() { }
    ngOnInit() {
        const tabs = document.querySelector('.tabs');
        materialize_css__WEBPACK_IMPORTED_MODULE_2__["Tabs"].init(tabs, {});
    }
};
AuthTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-tabs/auth-tabs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-tabs.component.scss */ "./src/app/components/auth-tabs/auth-tabs.component.scss")).default]
    })
], AuthTabsComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n}\n\n.page-wrap {\n  position: relative;\n}\n\n.sidebar {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvRTpcXFByb2Zlc3Npb25hbFxcYnNhbXBseVxccGVyc29uYWxcXHN0dWR5XFxpb25pY1xccHJvamVjdFxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FER0E7RUFFRSxrQkFBQTtBQ0RGOztBRElBO0VBRUUsZUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5wYWdlLXdyYXAge1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG5cclxuXHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFnZS13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DashboardComponent = class DashboardComponent {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    ngOnInit() {
        this.token = this.tokenService.GetToken();
        console.log(this.token);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/instructor/add-instructor/add-instructor.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/instructor/add-instructor/add-instructor.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#panel {\n  background-color: #ffffff;\n}\n\n#panel {\n  padding: 0px;\n}\n\n#signupbtn {\n  float: right;\n  margin-right: 10px;\n  background-color: #64b5f6;\n  font-weight: 500;\n}\n\n#title {\n  background-color: #64b5f6;\n  color: white;\n  padding: 8px;\n  margin-top: 0px;\n  font-weight: 700;\n  text-align: center;\n}\n\nform {\n  padding: 0px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  margin: 0px 20px 0px 20px;\n}\n\n.error {\n  color: red;\n}\n\n.indeterminate {\n  background-color: #64b5f6 !important;\n}\n\n.input-field {\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n#errorMsg {\n  background: #f6b2b5;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n}\n\n#errorMsg span {\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  position: relative;\n  float: left;\n  font-size: 15px;\n}\n\n.success {\n  color: green;\n  text-align: center;\n  margin: 20px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnN0cnVjdG9yL2FkZC1pbnN0cnVjdG9yL0U6XFxQcm9mZXNzaW9uYWxcXGJzYW1wbHlcXHBlcnNvbmFsXFxzdHVkeVxcaW9uaWNcXHByb2plY3RcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxpbnN0cnVjdG9yXFxhZGQtaW5zdHJ1Y3RvclxcYWRkLWluc3RydWN0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdHJ1Y3Rvci9hZGQtaW5zdHJ1Y3Rvci9hZGQtaW5zdHJ1Y3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnN0cnVjdG9yL2FkZC1pbnN0cnVjdG9yL2FkZC1pbnN0cnVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhbmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4jcGFuZWwge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuI3NpZ251cGJ0biB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiNWY2O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmluZGV0ZXJtaW5hdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNlcnJvck1zZyB7XHJcbiAgYmFja2dyb3VuZDogI2Y2YjJiNTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZXJyb3JNc2cgc3BhbiB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnN1Y2Nlc3N7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICB9XHJcbiIsIiNwYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbiNwYW5lbCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuI3NpZ251cGJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiNWY2O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiNWY2O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMjBweDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiNWY2ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNlcnJvck1zZyB7XG4gIGJhY2tncm91bmQ6ICNmNmIyYjU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Vycm9yTXNnIHNwYW4ge1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uc3VjY2VzcyB7XG4gIGNvbG9yOiBncmVlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/instructor/add-instructor/add-instructor.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/instructor/add-instructor/add-instructor.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddInstructorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInstructorComponent", function() { return AddInstructorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");








let AddInstructorComponent = class AddInstructorComponent {
    constructor(authService, fb, router, toastr) {
        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({
            url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl}/upload`,
            itemAlias: "image",
        });
    }
    ngOnInit() {
        this.init();
        this.uploader.onAfterAddingFile = (file) => {
            file.withCredentials = false;
        };
        this.uploader.onCompleteItem = (item, status) => {
            console.log("Uploaded File Details:", item);
            this.toastr.success("File successfully uploaded!");
        };
    }
    init() {
        this.instructorForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phoneNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cardNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            hourlyRate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            picture: [""],
            cv: [""],
            speciality: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: [""],
        });
    }
    pictureChangeEvent(fileInput) {
        this.pictureToUpload = fileInput.target.files[0]["name"];
        console.log("filechange", this.instructorForm.value);
    }
    cvChangeEvent(fileInput) {
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
        this.authService.registerUser(this.instructorForm.value).subscribe((data) => {
            this.instructorForm.reset();
            this.msSuccess = "created successfully";
            setTimeout(() => {
                this.msSuccess = "";
            }, 1000);
            this.errorMessage = "";
            console.log(data);
        }, (err) => {
            if (err.error.msg) {
                this.errorMessage = err.error.msg[0].message;
            }
            if (err.error.message) {
                this.errorMessage = err.error.message;
            }
        });
    }
};
AddInstructorComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
AddInstructorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-instructor",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-instructor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/instructor/add-instructor/add-instructor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-instructor.component.scss */ "./src/app/components/instructor/add-instructor/add-instructor.component.scss")).default]
    })
], AddInstructorComponent);



/***/ }),

/***/ "./src/app/components/instructor/list-instructors/list-instructors.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/instructor/list-instructors/list-instructors.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdHJ1Y3Rvci9saXN0LWluc3RydWN0b3JzL2xpc3QtaW5zdHJ1Y3RvcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/instructor/list-instructors/list-instructors.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/instructor/list-instructors/list-instructors.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListInstructorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInstructorsComponent", function() { return ListInstructorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);








let ListInstructorsComponent = class ListInstructorsComponent {
    constructor(authService, router, fb, tokenService) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.tokenService = tokenService;
        this.instructors = [];
        this.instructorToShow = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_7___default()(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].Url);
    }
    onChangePage(pageOfItems) {
        console.log('page of items', pageOfItems);
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
    ngOnInit() {
        this.allInstructors();
        this.socket.on("refreshPage", () => {
            this.allInstructors();
        });
    }
    allInstructors() {
        this.authService.getInstructors().subscribe(data => {
            console.log(data);
            this.instructors = data.instructors;
            this.instructorToShow = this.instructors;
            console.log('instructors', this.instructorToShow);
        }, err => {
            if (err.error.token === null) {
                this.tokenService.DeleteToken();
                this.router.navigate(['']);
            }
        });
    }
    openModal(modal) {
        $(document).ready(() => {
            $('.modal').modal();
            $(modal).modal('open');
        });
    }
    openModalDelete(instructor, modal) {
        this.openModal(modal);
        this.instructor = instructor;
        console.log(this.instructor);
    }
    deleteInstructor(id) {
        console.log(id);
        this.authService.deleteInstructor(id).subscribe(data => {
            this.socket.emit("refresh", {});
        });
    }
    searchInstructor() {
        this.instructorToShow = this.instructors;
        this.instructorToShow = this.instructorToShow.filter(instructor => instructor.username.toLowerCase().search(this.search) !== -1 || instructor.email.toLowerCase().search(this.search) !== -1);
    }
};
ListInstructorsComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }
];
ListInstructorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-instructors',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-instructors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/instructor/list-instructors/list-instructors.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-instructors.component.scss */ "./src/app/components/instructor/list-instructors/list-instructors.component.scss")).default]
    })
], ListInstructorsComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#panel {\n  background-color: #ffffff;\n}\n\n#panel {\n  padding: 0px;\n}\n\n#loginbtn {\n  float: right;\n  margin-right: 10px;\n  background-color: #64b5f6;\n  font-weight: 500;\n}\n\n#title {\n  background-color: #64b5f6;\n  color: white;\n  padding: 8px;\n  margin-top: 0px;\n  font-weight: 700;\n  text-align: center;\n}\n\nform {\n  padding: 0px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  margin: 0px 20px 0px 20px;\n}\n\n.error {\n  color: red;\n}\n\n.indeterminate {\n  background-color: #64b5f6 !important;\n}\n\n.input-field {\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n#errorMsg {\n  background: #f6b2b5;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n}\n\n#errorMsg span {\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  position: relative;\n  float: left;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9FOlxcUHJvZmVzc2lvbmFsXFxic2FtcGx5XFxwZXJzb25hbFxcc3R1ZHlcXGlvbmljXFxwcm9qZWN0XFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFuZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbiNwYW5lbCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4jbG9naW5idG4ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4jdGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDBweCAyMHB4IDBweCAyMHB4O1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5pbmRldGVybWluYXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiNWY2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jZXJyb3JNc2cge1xyXG4gIGJhY2tncm91bmQ6ICNmNmIyYjU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Vycm9yTXNnIHNwYW4ge1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbiIsIiNwYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbiNwYW5lbCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuI2xvZ2luYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiN0aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjYgIWltcG9ydGFudDtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuI2Vycm9yTXNnIHtcbiAgYmFja2dyb3VuZDogI2Y2YjJiNTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZXJyb3JNc2cgc3BhbiB7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");






let LoginComponent = class LoginComponent {
    constructor(fb, authService, router, tokenService) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.tokenService = tokenService;
        this.showSpinner = false;
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.loginForm = this.fb.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    loginUser() {
        this.showSpinner = true;
        this.authService.loginUser(this.loginForm.value).subscribe((data) => {
            this.tokenService.SetToken(data.token);
            this.loginForm.reset();
            setTimeout(() => {
                this.router.navigate(["dashboard/list-training"]);
            }, 2000);
        }, (err) => {
            this.showSpinner = false;
            if (err.error.message) {
                this.errorMessage = err.error.message;
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/side/side.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/side/side.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  color: black;\n}\n\n.active a {\n  color: #ffffff !important;\n}\n\n.active {\n  background-color: #64b5b6 !important;\n}\n\n.material-icons {\n  color: #64b5f6;\n}\n\n.active .material-icons {\n  color: #ffffff;\n}\n\n.row span {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.num {\n  margin: 10px !important;\n  color: #64b5f6;\n  font-weight: bold;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlL0U6XFxQcm9mZXNzaW9uYWxcXGJzYW1wbHlcXHBlcnNvbmFsXFxzdHVkeVxcaW9uaWNcXHByb2plY3RcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWRlXFxzaWRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGUvc2lkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQUE7RUFDRSxvQ0FBQTtBQ0dGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS9zaWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5hY3RpdmUgYSB7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiNWI2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGNvbG9yOiAjNjRiNWY2O1xyXG59XHJcblxyXG4uYWN0aXZlIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5yb3cgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubnVtIHtcclxuICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxuICBjb2xvcjogIzY0YjVmNjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuIiwiYSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmFjdGl2ZSBhIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1YjYgIWltcG9ydGFudDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgY29sb3I6ICM2NGI1ZjY7XG59XG5cbi5hY3RpdmUgLm1hdGVyaWFsLWljb25zIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5yb3cgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5udW0ge1xuICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM2NGI1ZjY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/side/side.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/side/side.component.ts ***!
  \***************************************************/
/*! exports provided: SideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideComponent", function() { return SideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_training_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/training.service */ "./src/app/services/training.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_training_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/training-session.service */ "./src/app/services/training-session.service.ts");








let SideComponent = class SideComponent {
    constructor(tokenService, trainingService, authService, trainingSessionService) {
        this.tokenService = tokenService;
        this.trainingService = trainingService;
        this.authService = authService;
        this.trainingSessionService = trainingSessionService;
        this.trainingCourses = [];
        this.instructors = [];
        this.trainingSessions = [];
        this.user = this.tokenService.GetPayload();
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].Url);
    }
    ngOnInit() {
        this.allTraining();
        this.allInstructors();
        this.allTrainingSessions();
        this.socket.on("refreshPage", () => {
            this.allTraining();
            this.allInstructors();
            this.allTrainingSessions();
        });
    }
    allTraining() {
        this.trainingService.getAllTraining().subscribe((data) => {
            console.log(data);
            this.trainingCourses = data.trainingCourses;
        });
    }
    allInstructors() {
        this.authService.getInstructors().subscribe((data) => {
            console.log(data);
            this.instructors = data.instructors;
            console.log("instructors", this.instructors);
        });
    }
    allTrainingSessions() {
        this.trainingSessionService.getAllTrainingSessions().subscribe((data) => {
            console.log(data);
            this.trainingSessions = data.trainingSessions;
        });
    }
};
SideComponent.ctorParameters = () => [
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
    { type: src_app_services_training_service__WEBPACK_IMPORTED_MODULE_5__["TrainingService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_services_training_session_service__WEBPACK_IMPORTED_MODULE_7__["TrainingSessionService"] }
];
SideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-side",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side/side.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side.component.scss */ "./src/app/components/side/side.component.scss")).default]
    })
], SideComponent);



/***/ }),

/***/ "./src/app/components/singup/singup.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/singup/singup.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#panel {\n  background-color: #ffffff;\n}\n\n#panel {\n  padding: 0px;\n}\n\n#signupbtn {\n  float: right;\n  margin-right: 10px;\n  background-color: #64b5f6;\n  font-weight: 500;\n}\n\n#title {\n  background-color: #64b5f6;\n  color: white;\n  padding: 8px;\n  margin-top: 0px;\n  font-weight: 700;\n  text-align: center;\n}\n\nform {\n  padding: 0px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  margin: 0px 20px 0px 20px;\n}\n\n.error {\n  color: red;\n}\n\n.indeterminate {\n  background-color: #64b5f6 !important;\n}\n\n.input-field {\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n#errorMsg {\n  background: #f6b2b5;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n}\n\n#errorMsg span {\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  position: relative;\n  float: left;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaW5ndXAvRTpcXFByb2Zlc3Npb25hbFxcYnNhbXBseVxccGVyc29uYWxcXHN0dWR5XFxpb25pY1xccHJvamVjdFxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNpbmd1cFxcc2luZ3VwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Npbmd1cC9zaW5ndXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaW5ndXAvc2luZ3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhbmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4jcGFuZWwge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuI3NpZ251cGJ0biB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiNWY2O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmluZGV0ZXJtaW5hdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNlcnJvck1zZyB7XHJcbiAgYmFja2dyb3VuZDogI2Y2YjJiNTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZXJyb3JNc2cgc3BhbiB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuIiwiI3BhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuI3BhbmVsIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4jc2lnbnVwYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiN0aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjYgIWltcG9ydGFudDtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuI2Vycm9yTXNnIHtcbiAgYmFja2dyb3VuZDogI2Y2YjJiNTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZXJyb3JNc2cgc3BhbiB7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/singup/singup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/singup/singup.component.ts ***!
  \*******************************************************/
/*! exports provided: SingupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupComponent", function() { return SingupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");






let SingupComponent = class SingupComponent {
    constructor(authService, fb, router, tokenService) {
        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.tokenService = tokenService;
        this.showSpinner = false;
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.signupForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: [""]
        });
    }
    signupUser() {
        this.showSpinner = true;
        this.signupForm.value.role = 'admin';
        this.authService.registerUser(this.signupForm.value).subscribe(data => {
            this.tokenService.SetToken(data.token);
            this.signupForm.reset();
            setTimeout(() => {
                this.router.navigate(["dashboard/list-training"]);
            }, 3000);
        }, err => {
            this.showSpinner = false;
            if (err.error.msg) {
                this.errorMessage = err.error.msg[0].message;
            }
            if (err.error.message) {
                this.errorMessage = err.error.message;
            }
        });
    }
};
SingupComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }
];
SingupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-singup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./singup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/singup/singup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./singup.component.scss */ "./src/app/components/singup/singup.component.scss")).default]
    })
], SingupComponent);



/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\n  background-color: #64b5f6;\n}\n\n.nav-content {\n  text-align: center;\n}\n\n.unread {\n  color: #64b5f6;\n  margin: 0px !important;\n  padding: 0px !important;\n  font-weight: bold;\n}\n\ntime {\n  margin-bottom: 10px !important;\n  font-style: italic;\n}\n\n.text {\n  text-align: center;\n}\n\n.material-icons {\n  color: #64b5f6 !important;\n  cursor: pointer;\n}\n\n.secondary-content {\n  margin-top: -5px !important;\n}\n\n.marAll {\n  color: #64b5b6;\n  background: inherit !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL0U6XFxQcm9mZXNzaW9uYWxcXGJzYW1wbHlcXHBlcnNvbmFsXFxzdHVkeVxcaW9uaWNcXHByb2plY3RcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0b29sYmFyXFx0b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FER0E7RUFDQyxrQkFBQTtBQ0FEOztBREtBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0ZBOztBREtBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ0ZBOztBREtBO0VBQ0Esa0JBQUE7QUNGQTs7QURLQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0ZBOztBREtBO0VBQ0EsMkJBQUE7QUNGQTs7QURLQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQ0ZBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNjtcclxuXHJcbn1cclxuXHJcbi5uYXYtY29udGVudHtcclxuIHRleHQtYWxpZ246Y2VudGVyXHJcbn1cclxuXHJcblxyXG5cclxuLnVucmVhZCB7XHJcbmNvbG9yOiAjNjRiNWY2O1xyXG5tYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG5wYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnRpbWUge1xyXG5tYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbmZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnRleHQge1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbmNvbG9yOiAjNjRiNWY2ICFpbXBvcnRhbnQ7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlY29uZGFyeS1jb250ZW50IHtcclxubWFyZ2luLXRvcDogLTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFyQWxsIHtcclxuY29sb3I6ICM2NGI1YjY7XHJcbmJhY2tncm91bmQ6IGluaGVyaXQgIWltcG9ydGFudDtcclxufVxyXG4iLCJuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRiNWY2O1xufVxuXG4ubmF2LWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51bnJlYWQge1xuICBjb2xvcjogIzY0YjVmNjtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG50aW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBjb2xvcjogIzY0YjVmNiAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWNvbmRhcnktY29udGVudCB7XG4gIG1hcmdpbi10b3A6IC01cHggIWltcG9ydGFudDtcbn1cblxuLm1hckFsbCB7XG4gIGNvbG9yOiAjNjRiNWI2O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ToolbarComponent = class ToolbarComponent {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
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
};
ToolbarComponent.ctorParameters = () => [
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar/toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/components/toolbar/toolbar.component.scss")).default]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/app/components/training/add-training/add-training.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/training/add-training/add-training.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n}\n\n.page-wrap {\n  position: relative;\n}\n\n.sidebar {\n  position: fixed;\n}\n\n.error {\n  color: red;\n}\n\n#title {\n  background-color: #64b5f6;\n  color: white;\n  padding: 8px;\n  margin-top: 0px;\n  font-weight: 700;\n  text-align: center;\n}\n\n.mserror {\n  color: red;\n  text-align: center;\n  margin: 20px;\n  font-size: 20px;\n}\n\n.success {\n  color: green;\n  text-align: center;\n  margin: 20px;\n  font-size: 20px;\n}\n\nselect {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFpbmluZy9hZGQtdHJhaW5pbmcvRTpcXFByb2Zlc3Npb25hbFxcYnNhbXBseVxccGVyc29uYWxcXHN0dWR5XFxpb25pY1xccHJvamVjdFxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRyYWluaW5nXFxhZGQtdHJhaW5pbmdcXGFkZC10cmFpbmluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90cmFpbmluZy9hZGQtdHJhaW5pbmcvYWRkLXRyYWluaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtBQ0FGOztBRElBO0VBRUUsa0JBQUE7QUNGRjs7QURLQTtFQUVFLGVBQUE7QUNIRjs7QURPQTtFQUNFLFVBQUE7QUNKRjs7QURNQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hGOztBREtBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGRjs7QURJQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDREE7O0FESUE7RUFDRSxlQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyYWluaW5nL2FkZC10cmFpbmluZy9hZGQtdHJhaW5pbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5wYWdlLXdyYXAge1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG5cclxuXHJcbn1cclxuLmVycm9yIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiN0aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubXNlcnJvciB7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uc3VjY2Vzc3tcclxuY29sb3I6IGdyZWVuO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbm1hcmdpbjogMjBweDtcclxuZm9udC1zaXplOiAyMHB4O1xyXG5cclxufVxyXG5zZWxlY3R7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhZ2Utd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbiN0aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1zZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc3VjY2VzcyB7XG4gIGNvbG9yOiBncmVlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuc2VsZWN0IHtcbiAgZGlzcGxheTogaW5saW5lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/training/add-training/add-training.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/training/add-training/add-training.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTrainingComponent", function() { return AddTrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_training_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/training.service */ "./src/app/services/training.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");







let AddTrainingComponent = class AddTrainingComponent {
    constructor(fb, trainingService) {
        this.fb = fb;
        this.trainingService = trainingService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploader"]({
            url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/upload`,
            itemAlias: "image",
        });
        this.trainingCourses = [];
        this.level = ["beginner", "intermediate", "advanced"];
        this.addCustomKeyWords = (term) => term;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default()(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].Url);
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
        this.uploader.onCompleteItem = (item, status) => {
            console.log("Uploaded File Details:", item);
        };
    }
    init() {
        this.trainingForm = this.fb.group({
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            numberHours: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            program: [""],
            level: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tags: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    allTraining() {
        this.trainingService.getAllTraining().subscribe((data) => {
            console.log(data);
            this.trainingCourses = data.trainingCourses;
        });
    }
    programChangeEvent(fileInput) {
        this.programToUpload = fileInput.target.files[0]["name"];
        console.log("filechange", this.programToUpload);
    }
    submitTraining() {
        console.log();
        let exist = this.trainingCourses.filter((c) => c.title.toLowerCase() == this.trainingForm.value.title.toLowerCase() &&
            c.title.toLowerCase() == this.trainingForm.value.title.toLowerCase());
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
};
AddTrainingComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_training_service__WEBPACK_IMPORTED_MODULE_3__["TrainingService"] }
];
AddTrainingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-training",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-training.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/training/add-training/add-training.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-training.component.scss */ "./src/app/components/training/add-training/add-training.component.scss")).default]
    })
], AddTrainingComponent);



/***/ }),

/***/ "./src/app/components/training/list-training/list-training.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/training/list-training/list-training.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhaW5pbmcvbGlzdC10cmFpbmluZy9saXN0LXRyYWluaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/training/list-training/list-training.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/training/list-training/list-training.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTrainingComponent", function() { return ListTrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_training_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/training.service */ "./src/app/services/training.service.ts");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_8__);









let ListTrainingComponent = class ListTrainingComponent {
    constructor(trainingService, tokenService, router, fb) {
        this.trainingService = trainingService;
        this.tokenService = tokenService;
        this.router = router;
        this.fb = fb;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({
            url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/upload`,
            itemAlias: "image",
        });
        this.trainingCourses = [];
        this.trainingToShow = [];
        this.addCustomKeyWords = (term) => term;
        this.user = this.tokenService.GetPayload();
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_8___default()(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].Url);
    }
    init() {
        this.trainingForm = this.fb.group({
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numberHours: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            program: [""],
            level: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tags: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
        this.uploader.onCompleteItem = (item, status) => {
            console.log("Uploaded File Details:", item);
        };
    }
    allTraining() {
        this.trainingService.getAllTraining().subscribe((data) => {
            console.log(data);
            this.trainingCourses = data.trainingCourses;
            this.trainingToShow = this.trainingCourses;
        }, (err) => {
            if (err.error.token === null) {
                this.tokenService.DeleteToken();
                this.router.navigate([""]);
            }
        });
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
            title: [this.training.title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: [this.training.description, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numberHours: [this.training.numberHours, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            program: [this.training.program],
            level: [this.training.level, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tags: [this.training.tags, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    programChangeEvent(fileInput) {
        this.programToUpload = fileInput.target.files[0]["name"];
        console.log("filechange", this.programToUpload);
    }
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
        this.trainingToShow = this.trainingToShow.filter((training) => training.title.toLowerCase().search(this.search) !== -1 ||
            training.level.toLowerCase().search(this.search) !== -1);
    }
    goNext(training) {
        console.log("training", training);
        this.router.navigate(["dashboard/choose-available-dates", training._id]);
    }
};
ListTrainingComponent.ctorParameters = () => [
    { type: src_app_services_training_service__WEBPACK_IMPORTED_MODULE_2__["TrainingService"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ListTrainingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-list-training",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-training.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/training/list-training/list-training.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-training.component.scss */ "./src/app/components/training/list-training/list-training.component.scss")).default]
    })
], ListTrainingComponent);



/***/ }),

/***/ "./src/app/components/trainingSession/add-training-session/add-training-session.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/trainingSession/add-training-session/add-training-session.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-group {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFpbmluZ1Nlc3Npb24vYWRkLXRyYWluaW5nLXNlc3Npb24vRTpcXFByb2Zlc3Npb25hbFxcYnNhbXBseVxccGVyc29uYWxcXHN0dWR5XFxpb25pY1xccHJvamVjdFxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRyYWluaW5nU2Vzc2lvblxcYWRkLXRyYWluaW5nLXNlc3Npb25cXGFkZC10cmFpbmluZy1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyYWluaW5nU2Vzc2lvbi9hZGQtdHJhaW5pbmctc2Vzc2lvbi9hZGQtdHJhaW5pbmctc2Vzc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyYWluaW5nU2Vzc2lvbi9hZGQtdHJhaW5pbmctc2Vzc2lvbi9hZGQtdHJhaW5pbmctc2Vzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3Vwe1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0iLCIuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/trainingSession/add-training-session/add-training-session.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/trainingSession/add-training-session/add-training-session.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddTrainingSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTrainingSessionComponent", function() { return AddTrainingSessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_training_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/training.service */ "./src/app/services/training.service.ts");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_training_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/training-session.service */ "./src/app/services/training-session.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let AddTrainingSessionComponent = class AddTrainingSessionComponent {
    constructor(trainingService, tokenService, router, fb, authService, trainingSessionService, datePipe) {
        this.trainingService = trainingService;
        this.tokenService = tokenService;
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.trainingSessionService = trainingSessionService;
        this.datePipe = datePipe;
        this.trainingCourses = [];
        this.instructors = [];
        this.availableDates = [];
    }
    ngOnInit() {
        this.allInstructors();
        this.allTrainingCourses();
    }
    allTrainingCourses() {
        this.trainingService.getAllTraining().subscribe((data) => {
            console.log(data);
            this.trainingCourses = data.trainingCourses;
        });
    }
    allInstructors() {
        this.authService.getInstructors().subscribe((data) => {
            console.log(data);
            this.instructors = data.instructors;
        });
    }
    allSessiosByInstructor(instructor) {
        // this.availableDateService.getAllAvailableDatesBySupervisor(supervisor._id).subscribe(data =>{
        //   console.log(data)
        //   this.availableDates = data.availableDatesSupervisor;
        // })
    }
    submitTrainingSession() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.instructorSelected == undefined ||
                this.trainingSelected == undefined ||
                this.selectedMoment == undefined ||
                this.selectedMoment[0] == null ||
                this.selectedMoment[1] == null) {
                this.msError = "all of them are required ";
                console.log("all of them are required ");
                return null;
            }
            let isAvilableSupersvior = this.availableDates.filter((a) => (this.selectedMoment[0].getTime() > new Date(a.startDate).getTime() &&
                this.selectedMoment[0].getTime() < new Date(a.endDate).getTime()) ||
                (this.selectedMoment[1].getTime() > new Date(a.startDate).getTime() &&
                    this.selectedMoment[1].getTime() < new Date(a.endDate).getTime()) ||
                (new Date(a.startDate).getTime() > this.selectedMoment[0].getTime() &&
                    new Date(a.startDate).getTime() < this.selectedMoment[1].getTime()) ||
                (new Date(a.enddate).getTime() > this.selectedMoment[0].getTime() &&
                    new Date(a.enddate).getTime() < this.selectedMoment[1].getTime()));
            console.log("isAvilableInstructor", isAvilableSupersvior);
            if (isAvilableSupersvior.length !== 0) {
                this.msError = "this instructor is not available on this date ";
                return null;
            }
            let trainingSession = {
                training: this.trainingSelected,
                instructor: this.instructorSelected,
                startDate: this.datePipe
                    .transform(this.selectedMoment[0], "yyyy-MM-dd h:mm")
                    .toString(),
                endDate: this.datePipe
                    .transform(this.selectedMoment[1], "yyyy-MM-dd h:mm")
                    .toString(),
            };
            this.trainingSessionService
                .addTrainingSession(trainingSession)
                .subscribe((data) => {
                this.msError = "";
                this.msSuccess = "created successfully";
                setTimeout(() => {
                    this.msSuccess = "";
                }, 3000);
            });
        });
    }
};
AddTrainingSessionComponent.ctorParameters = () => [
    { type: src_app_services_training_service__WEBPACK_IMPORTED_MODULE_2__["TrainingService"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_training_session_service__WEBPACK_IMPORTED_MODULE_6__["TrainingSessionService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }
];
AddTrainingSessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-training-session",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-training-session.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/trainingSession/add-training-session/add-training-session.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-training-session.component.scss */ "./src/app/components/trainingSession/add-training-session/add-training-session.component.scss")).default]
    })
], AddTrainingSessionComponent);



/***/ }),

/***/ "./src/app/components/trainingSession/list-training-sessions/list-training-sessions.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/trainingSession/list-training-sessions/list-training-sessions.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhaW5pbmdTZXNzaW9uL2xpc3QtdHJhaW5pbmctc2Vzc2lvbnMvbGlzdC10cmFpbmluZy1zZXNzaW9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/trainingSession/list-training-sessions/list-training-sessions.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/trainingSession/list-training-sessions/list-training-sessions.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ListTrainingSessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTrainingSessionsComponent", function() { return ListTrainingSessionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_training_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/training-session.service */ "./src/app/services/training-session.service.ts");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");




let ListTrainingSessionsComponent = class ListTrainingSessionsComponent {
    constructor(trainingSessionService, tokenService) {
        this.trainingSessionService = trainingSessionService;
        this.tokenService = tokenService;
        this.trainingSessions = [];
        this.trainingSessionsToShow = [];
        this.user = this.tokenService.GetPayload();
    }
    ngOnInit() {
        this.allTrainingSessions();
    }
    onChangePage(pageOfItems) {
        console.log("page of items", pageOfItems);
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
    allTrainingSessions() {
        this.trainingSessionService.getAllTrainingSessions().subscribe((data) => {
            console.log(data);
            this.trainingSessions = data.trainingSessions;
            this.trainingSessionsToShow = this.trainingSessions;
        });
    }
    searchTrainingSession() {
        this.trainingSessionsToShow = this.trainingSessions;
        this.trainingSessionsToShow = this.trainingSessionsToShow.filter((trainingSession) => trainingSession.training.trainingName
            .toLowerCase()
            .search(this.search) !== -1);
    }
};
ListTrainingSessionsComponent.ctorParameters = () => [
    { type: src_app_services_training_session_service__WEBPACK_IMPORTED_MODULE_2__["TrainingSessionService"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }
];
ListTrainingSessionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-list-training-sessions",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-training-sessions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/trainingSession/list-training-sessions/list-training-sessions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-training-sessions.component.scss */ "./src/app/components/trainingSession/list-training-sessions/list-training-sessions.component.scss")).default]
    })
], ListTrainingSessionsComponent);



/***/ }),

/***/ "./src/app/modules/auth-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/modules/auth-routing.module.ts ***!
  \************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_auth_tabs_auth_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/auth-tabs/auth-tabs.component */ "./src/app/components/auth-tabs/auth-tabs.component.ts");




const routes = [
    {
        path: '', component: _components_auth_tabs_auth_tabs_component__WEBPACK_IMPORTED_MODULE_3__["AuthTabsComponent"]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/modules/auth.module.ts":
/*!****************************************!*\
  !*** ./src/app/modules/auth.module.ts ***!
  \****************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_auth_tabs_auth_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/auth-tabs/auth-tabs.component */ "./src/app/components/auth-tabs/auth-tabs.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/singup/singup.component */ "./src/app/components/singup/singup.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");









let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_auth_tabs_auth_tabs_component__WEBPACK_IMPORTED_MODULE_5__["AuthTabsComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_7__["SingupComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
        exports: [_components_auth_tabs_auth_tabs_component__WEBPACK_IMPORTED_MODULE_5__["AuthTabsComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_7__["SingupComponent"]],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/modules/dashboard-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/dashboard-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _components_instructor_add_instructor_add_instructor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/instructor/add-instructor/add-instructor.component */ "./src/app/components/instructor/add-instructor/add-instructor.component.ts");
/* harmony import */ var _components_instructor_list_instructors_list_instructors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/instructor/list-instructors/list-instructors.component */ "./src/app/components/instructor/list-instructors/list-instructors.component.ts");
/* harmony import */ var _components_training_list_training_list_training_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/training/list-training/list-training.component */ "./src/app/components/training/list-training/list-training.component.ts");
/* harmony import */ var _components_training_add_training_add_training_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/training/add-training/add-training.component */ "./src/app/components/training/add-training/add-training.component.ts");
/* harmony import */ var _components_trainingSession_add_training_session_add_training_session_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/trainingSession/add-training-session/add-training-session.component */ "./src/app/components/trainingSession/add-training-session/add-training-session.component.ts");
/* harmony import */ var _components_trainingSession_list_training_sessions_list_training_sessions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/trainingSession/list-training-sessions/list-training-sessions.component */ "./src/app/components/trainingSession/list-training-sessions/list-training-sessions.component.ts");











const routes = [
    {
        path: "dashboard",
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: "add-instructor", component: _components_instructor_add_instructor_add_instructor_component__WEBPACK_IMPORTED_MODULE_5__["AddInstructorComponent"] },
            { path: "list-instructors", component: _components_instructor_list_instructors_list_instructors_component__WEBPACK_IMPORTED_MODULE_6__["ListInstructorsComponent"] },
            { path: "list-training", component: _components_training_list_training_list_training_component__WEBPACK_IMPORTED_MODULE_7__["ListTrainingComponent"] },
            { path: "add-training", component: _components_training_add_training_add_training_component__WEBPACK_IMPORTED_MODULE_8__["AddTrainingComponent"] },
            {
                path: "list-training-sessions",
                component: _components_trainingSession_list_training_sessions_list_training_sessions_component__WEBPACK_IMPORTED_MODULE_10__["ListTrainingSessionsComponent"],
            },
            { path: "add-training-session", component: _components_trainingSession_add_training_session_add_training_session_component__WEBPACK_IMPORTED_MODULE_9__["AddTrainingSessionComponent"] },
        ],
    },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/modules/dashboard.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/dashboard.module.ts ***!
  \*********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _components_side_side_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/side/side.component */ "./src/app/components/side/side.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jw-angular-pagination */ "./node_modules/jw-angular-pagination/lib/jw-pagination.component.js");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jw_angular_pagination__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _components_instructor_add_instructor_add_instructor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/instructor/add-instructor/add-instructor.component */ "./src/app/components/instructor/add-instructor/add-instructor.component.ts");
/* harmony import */ var _components_instructor_list_instructors_list_instructors_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/instructor/list-instructors/list-instructors.component */ "./src/app/components/instructor/list-instructors/list-instructors.component.ts");
/* harmony import */ var _components_training_list_training_list_training_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/training/list-training/list-training.component */ "./src/app/components/training/list-training/list-training.component.ts");
/* harmony import */ var _components_training_add_training_add_training_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/training/add-training/add-training.component */ "./src/app/components/training/add-training/add-training.component.ts");
/* harmony import */ var _services_training_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/training.service */ "./src/app/services/training.service.ts");
/* harmony import */ var _components_trainingSession_add_training_session_add_training_session_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/trainingSession/add-training-session/add-training-session.component */ "./src/app/components/trainingSession/add-training-session/add-training-session.component.ts");
/* harmony import */ var _components_trainingSession_list_training_sessions_list_training_sessions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/trainingSession/list-training-sessions/list-training-sessions.component */ "./src/app/components/trainingSession/list-training-sessions/list-training-sessions.component.ts");
/* harmony import */ var _services_training_session_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/training-session.service */ "./src/app/services/training-session.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

























let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_10__["JwPaginationComponent"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_22__["FileSelectDirective"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
            _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"],
            _components_side_side_component__WEBPACK_IMPORTED_MODULE_6__["SideComponent"],
            _components_instructor_add_instructor_add_instructor_component__WEBPACK_IMPORTED_MODULE_14__["AddInstructorComponent"],
            _components_instructor_list_instructors_list_instructors_component__WEBPACK_IMPORTED_MODULE_15__["ListInstructorsComponent"],
            _components_training_list_training_list_training_component__WEBPACK_IMPORTED_MODULE_16__["ListTrainingComponent"],
            _components_training_add_training_add_training_component__WEBPACK_IMPORTED_MODULE_17__["AddTrainingComponent"],
            _components_trainingSession_add_training_session_add_training_session_component__WEBPACK_IMPORTED_MODULE_19__["AddTrainingSessionComponent"],
            _components_trainingSession_list_training_sessions_list_training_sessions_component__WEBPACK_IMPORTED_MODULE_20__["ListTrainingSessionsComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__["OwlNativeDateTimeModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"].forRoot(),
        ],
        exports: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
        providers: [_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"], _services_training_service__WEBPACK_IMPORTED_MODULE_18__["TrainingService"], _services_training_session_service__WEBPACK_IMPORTED_MODULE_21__["TrainingSessionService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, tokenService) {
        this.router = router;
        this.tokenService = tokenService;
    }
    canActivate(next, state) {
        const token = this.tokenService.GetToken();
        if (token) {
            return true;
        }
        else {
            this.router.navigate(["/"]);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




const BASEURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Url;
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    registerUser(body) {
        return this.http.post(`${BASEURL}/register`, body);
    }
    loginUser(body) {
        return this.http.post(`${BASEURL}/login`, body);
    }
    getInstructors() {
        return this.http.get(`${BASEURL}/instructors`);
    }
    deleteInstructor(id) {
        return this.http.delete(`${BASEURL}/instructor/delete-instructor/${id}`);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/token-interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/services/token-interceptor.ts ***!
  \***********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");



let TokenInterceptor = class TokenInterceptor {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    intercept(req, next) {
        const headersConfig = {
            "Content-Type": "application/json",
            Accept: "application/json"
        };
        const token = this.tokenService.GetToken();
        if (token) {
            headersConfig["Authorization"] = `bearer ${token}`;
        }
        const _req = req.clone({ setHeaders: headersConfig });
        return next.handle(_req);
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptor);



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");



let TokenService = class TokenService {
    constructor(cookieService) {
        this.cookieService = cookieService;
    }
    SetToken(token) {
        this.cookieService.set('appToken', token);
    }
    GetToken() {
        return this.cookieService.get('appToken');
    }
    DeleteToken() {
        this.cookieService.delete('appToken', ' / ');
    }
    GetPayload() {
        const token = this.GetToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = JSON.parse(window.atob(payload));
        }
        return payload.data;
    }
};
TokenService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
];
TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenService);



/***/ }),

/***/ "./src/app/services/training-session.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/training-session.service.ts ***!
  \******************************************************/
/*! exports provided: TrainingSessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingSessionService", function() { return TrainingSessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




const BASEURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
let TrainingSessionService = class TrainingSessionService {
    constructor(http) {
        this.http = http;
    }
    getAllTrainingSessions() {
        return this.http.get(`${BASEURL}/trainingSessions`);
    }
    // getAllAvailableDatesBySupervisor(SuperviorID): Observable<any> {
    //   return this.http.get(`${BASEURL}/availableDates/supervisor/${SuperviorID}`);
    // }
    // getAllAvailableDatesByCertif(certifID): Observable<any> {
    //   return this.http.get(`${BASEURL}/availableDates/certif/${certifID}`);
    // }
    addTrainingSession(body) {
        return this.http.post(`${BASEURL}/trainingSession/add-training-session`, body);
    }
};
TrainingSessionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TrainingSessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TrainingSessionService);



/***/ }),

/***/ "./src/app/services/training.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/training.service.ts ***!
  \**********************************************/
/*! exports provided: TrainingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingService", function() { return TrainingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




const BASEURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
let TrainingService = class TrainingService {
    constructor(http) {
        this.http = http;
    }
    getAllTraining() {
        return this.http.get(`${BASEURL}/trainingCourses`);
    }
    addTraining(body) {
        return this.http.post(`${BASEURL}/training/add-training`, body);
    }
    deleteTraining(id) {
        return this.http.delete(`${BASEURL}/training/delete-training/${id}`);
    }
    editTraining(id, body) {
        return this.http.put(`${BASEURL}/training/add-training/${id}`, body);
    }
};
TrainingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TrainingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TrainingService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    //  Url: 'http://ec2-18-223-30-6.us-east-2.compute.amazonaws.com:3001/',
    //  apiUrl: 'http://ec2-18-223-30-6.us-east-2.compute.amazonaws.com:3001/api'
    Url: "http://localhost:3000/",
    apiUrl: "http://localhost:3000/api",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Professional\bsamply\personal\study\ionic\project\frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map