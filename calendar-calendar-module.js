(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "./src/app/calendar/calendar-app.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calendar/calendar-app.component.ts ***!
  \****************************************************/
/*! exports provided: CalendarAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarAppComponent", function() { return CalendarAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarAppComponent = /** @class */ (function () {
    function CalendarAppComponent() {
    }
    CalendarAppComponent.prototype.ngOnInit = function () {
    };
    CalendarAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar-app',
            template: "\n   <app-side-nav></app-side-nav>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], CalendarAppComponent);
    return CalendarAppComponent;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calendar_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-app.component */ "./src/app/calendar/calendar-app.component.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/side-nav/side-nav.component */ "./src/app/calendar/components/side-nav/side-nav.component.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/calendar/components/toolbar/toolbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '',
        component: _calendar_app_component__WEBPACK_IMPORTED_MODULE_2__["CalendarAppComponent"],
        children: [
            { path: '', loadChildren: './components/main-content/main-content.module#MainContentModule' }
        ]
    },
    { path: '', redirectTo: '' }
];
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
            ],
            declarations: [_calendar_app_component__WEBPACK_IMPORTED_MODULE_2__["CalendarAppComponent"], _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__["SideNavComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"]],
        })
    ], CalendarModule);
    return CalendarModule;
}());



/***/ }),

/***/ "./src/app/calendar/components/side-nav/side-nav.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/calendar/components/side-nav/side-nav.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-sidenav-container{\n    flex: 1;\n    width: 100%;\n    min-width: 100%;\n    height: 100%;\n    min-height: 100%;\n    position: fixed;\n}\n.app-sidenav-content{\n    display: flex;\n    height: 100%;\n   flex-direction: column;\n}\n.app-sidenav{\n  width: 240px;\n}\n.wrapper{\n    margin: 50px;\n}\n.font-custom{\n    font-weight: 400;\n    font-size: 24px;\n    line-height: 32px; \n }"

/***/ }),

/***/ "./src/app/calendar/components/side-nav/side-nav.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/calendar/components/side-nav/side-nav.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"app-sidenav-container\">\n  <mat-sidenav #sidenav class=\"app-sidenav mat-elevation-z2\" [opened]=\"!isScreenSmall()\" [mode]=\"isScreenSmall()? 'over':'side'\">\n    <mat-toolbar color=\"primary\" class=\"font-custom\">\n      Menu\n    </mat-toolbar>\n    <mat-nav-list>\n      <mat-list-item>\n        <mat-icon>calendar_view_day</mat-icon>\n      </mat-list-item>\n      <mat-list-item>\n        <a mat-line [routerLink]=\"['/calendar', 'year']\">Year</a>\n      </mat-list-item>\n      <mat-list-item>\n        <a mat-line [routerLink]=\"['/calendar', 'month']\">\n          Month\n        </a>\n      </mat-list-item>\n      <mat-list-item>\n        <a mat-line [routerLink]=\"['/calendar', 'day']\">Day</a>\n      </mat-list-item>\n      <mat-list-item>\n          <a mat-line [routerLink]=\"['/calendar', 'allEvents']\">View All</a>\n      </mat-list-item>\n      <mat-list-item>\n        <mat-icon>event</mat-icon>\n      </mat-list-item>\n      <mat-list-item>\n        <a mat-line [routerLink]=\"['/calendar', 'addevent']\">Add Event</a>\n      </mat-list-item>\n      <mat-list-item>\n        <a mat-line [routerLink]=\"['/calendar', 'applyleave']\">Apply Leave</a>\n      </mat-list-item>\n    </mat-nav-list>\n  </mat-sidenav>\n  <div class=\"app-sidenav-content\">\n    <app-toolbar (toggleSidenav)=\"sidenav.toggle()\"></app-toolbar>\n    <div class=\"wrapper\">\n      <router-outlet></router-outlet>\n    </div>\n\n  </div>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/calendar/components/side-nav/side-nav.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/calendar/components/side-nav/side-nav.component.ts ***!
  \********************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SMALL_WIDTH_BREAKPOINT = 720;
var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(zone, router) {
        var _this = this;
        this.router = router;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.mediaMatcher.addListener(function (mql) {
            zone.run(function () { return _this.mediaMatcher = mql; });
        });
    }
    SideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function () {
            if (_this.isScreenSmall()) {
                _this.sidenav.close();
            }
        });
    };
    SideNavComponent.prototype.isScreenSmall = function () {
        return this.mediaMatcher.matches;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"])
    ], SideNavComponent.prototype, "sidenav", void 0);
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/calendar/components/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.css */ "./src/app/calendar/components/side-nav/side-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/calendar/components/toolbar/toolbar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/calendar/components/toolbar/toolbar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button mat-button class=\"sidenav-toggle\" (click)=\"toggleSidenav.emit()\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  \n  <span class=\"font-custom\">Calendar</span>\n  <!-- <span class=\"example-spacer\"></span>\n  <button mat-button [matMenuTriggerFor]=\"menu\">\n      <mat-icon >more_vert</mat-icon>\n  </button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item >New Contact</button>\n</mat-menu> -->\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/calendar/components/toolbar/toolbar.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/calendar/components/toolbar/toolbar.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-toggle {\n  display: none;\n  padding: 0;\n  margin: 0;\n  min-width: 56px; }\n  @media (max-width: 720px) {\n    .sidenav-toggle {\n      display: flex;\n      align-items: center;\n      justify-content: center; } }\n  .sidenav-toggle mat-icon {\n    font-size: 30px;\n    height: 56px;\n    width: 56px;\n    line-height: 56px;\n    color: white; }\n  .example-spacer {\n  flex: 1 1 auto; }\n  .font-custom {\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px; }\n"

/***/ }),

/***/ "./src/app/calendar/components/toolbar/toolbar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/calendar/components/toolbar/toolbar.component.ts ***!
  \******************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "toggleSidenav", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/calendar/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/calendar/components/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module.js.map