(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\n    width: 100%;\n}\nmat-card{\n    background-color:cadetblue;\n}"

/***/ }),

/***/ "./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>Apply Leave</mat-card>\n<br>\n<form (ngSubmit)=\"onSubmit()\">\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <mat-form-field>\n        <span matPrefix></span>\n        <input matInput placeholder=\"Staff Name\" [formControl]=\"staffName\" [errorStateMatcher]=\"matcher\">\n        <mat-error *ngIf=\"staffName.hasError('required')\">\n          Event title\n          <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"col-6\">\n      <mat-form-field>\n        <input matInput placeholder=\"Employee ID\" [formControl]=\"employeeID\" [errorStateMatcher]=\"matcher\">\n        <mat-error *ngIf=\"employeeID.hasError('required')\">\n          Event title\n          <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"col-4\">\n      <mat-form-field>\n        <mat-select placeholder=\"Leave type\" [formControl]=\"leaveType\" [errorStateMatcher]=\"matcher\">\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"leaveType.hasError('required')\">Please choose an event type</mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"From date\" [formControl]=\"fromDate\" [errorStateMatcher]=\"matcher\"\n          required readonly>\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker touchUi (click)=\"Hello()\"></mat-datepicker>\n        <mat-error *ngIf=\"fromDate.hasError('required')\">\n          Event date\n          <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"col-1\">\n      <select class=\"form-control\">\n        <option value=\"AM\" select>AM</option>\n        <option value=\"PM\">PM</option>\n      </select>\n    </div>\n    <div class=\"col-4\">\n      <mat-form-field>\n        <input matInput [min]=\"fromDate.value\" [matDatepicker]=\"picker1\" placeholder=\"To date\"\n        [formControl]=\"toDate\" [errorStateMatcher]=\"matcher\" required readonly>\n        <mat-datepicker-toggle touchUi matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n      </mat-form-field>\n    </div>\n    <div class=\"col-1\">\n      <select class=\"form-control\">\n        <option value=\"AM\">AM</option>\n        <option value=\"PM\">PM</option>\n      </select>\n    </div>\n    <div class=\"col-2\">\n      <!-- if large scren size is 23 else size is 14-15 -->\n      <div style=\"font-size:22vh\">\n        5\n      </div>\n    </div>\n  </div>\n  <button mat-raised-button color=\"primary\" style=\"float:right\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ApplyLeaveComponent, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyLeaveComponent", function() { return ApplyLeaveComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplyLeaveComponent = /** @class */ (function () {
    function ApplyLeaveComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.date = Date();
        this.result = '';
        this.isSubmit = false;
        //validation
        this.matcher = new MyErrorStateMatcher();
        this.staffName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.employeeID = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.leaveType = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.fromDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.toDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
    }
    ApplyLeaveComponent.prototype.ngOnInit = function () {
        this.eventForm = this.formBuilder.group({
            staffName: this.staffName,
            empID: this.employeeID,
            leaveType: this.leaveType,
            fromDate: this.fromDate,
            toDate: this.toDate
        });
    };
    ApplyLeaveComponent.prototype.Hello = function () {
    };
    ApplyLeaveComponent.prototype.onSubmit = function () {
        // if (this.eventForm.valid) {
        //   this.result = 'Add success'
        //   this.isSubmit = true;
        //  console.log(this.eventForm.value)
        // } else {
        //   console.log('invalid')
        // }
    };
    ApplyLeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apply-leave',
            template: __webpack_require__(/*! ./apply-leave.component.html */ "./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.html"),
            styles: [__webpack_require__(/*! ./apply-leave.component.css */ "./src/app/calendar/components/main-content/components/apply-leave/apply-leave.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ApplyLeaveComponent);
    return ApplyLeaveComponent;
}());

var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map