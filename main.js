(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet class=\"item\"></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'shipsy';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/layout/layout.module */ "./src/app/shared/layout/layout.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_shipments_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/shipments.service */ "./src/app/shared/services/shipments.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutes"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]
            ],
            providers: [_shared_services_shipments_service__WEBPACK_IMPORTED_MODULE_6__["ShipmentsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
];
var AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { initialNavigation: 'enabled' });


/***/ }),

/***/ "./src/app/shared/layout/layout.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/layout/layout.module.ts ***!
  \************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/layout/sidebar/sidebar.component */ "./src/app/shared/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_layout_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/layout/shipments/shipments.component */ "./src/app/shared/layout/shipments/shipments.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [_shared_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _shared_layout_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_3__["ShipmentsComponent"]],
            exports: [_shared_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _shared_layout_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_3__["ShipmentsComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/shared/layout/shipments/shipments.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/layout/shipments/shipments.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n    <div>\n        <input type=\"text\" placeholder=\" search\" name=\"search\" [(ngModel)]=\"searchString\" (ngModelChange)=\"search(searchString)\">\n    </div>\n    <hr>\n    <div class=\"content\">\n        <div class=\"filter\">\n            Filter Tasks <input type=\"date\" name=\"date\" [(ngModel)]=\"date\" (ngModelChange)=\"search(date)\">\n        </div>\n        <div class=\"shipments\">\n            <div class=\"shipment-item\" *ngFor=\"let character of characterResponse\">\n                <div class=\"row\">\n                    <div class=\"col-md-2 pl-0 pr-0\">\n                        <i class=\"fas fa-arrow-down\" style=\"color: #a5af78;\"></i>\n                    </div>\n                    <div class=\"col-md-8 pl-0 pr-0\">\n                        {{ character.name }} | {{ character.actor }} <br>\n                        <span class=\"shipment-row\">{{ character.house }} | {{ character.dateOfBirth }}</span>\n                    </div>\n                    <div class=\"col-md-2 pl-0 pr-0\">\n                        <i class=\"fas fa-check\" style=\"color: #a5af78;\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/layout/shipments/shipments.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/layout/shipments/shipments.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  padding-left: 8px; }\n\nhr {\n  border-top: 2px dashed #aaa;\n  margin: 2px 0;\n  margin-left: 5px; }\n\n.filter {\n  color: #225590;\n  font-weight: 700;\n  margin: 7px 0;\n  margin-left: -8px; }\n\ninput[type=text] {\n  max-width: 100%;\n  background: url('search.png') no-repeat scroll 7px 7px;\n  border: none;\n  box-shadow: none;\n  margin-top: 7px; }\n\ninput[type=date] {\n  font-size: 10px;\n  float: right;\n  margin-right: 10px;\n  border-radius: 5px; }\n\n*:focus {\n  outline: none; }\n\n.shipments {\n  max-height: 500px;\n  min-height: 500px;\n  color: #4279b8;\n  font-size: 12px;\n  overflow: scroll;\n  background-color: #f5f5f5;\n  box-shadow: inset 1px 0px 5px 2px rgba(0, 0, 0, 0.3);\n  overflow-x: hidden;\n  border-radius: 4px; }\n\n.shipment-row {\n  color: #aaa; }\n\n.shipment-item {\n  cursor: pointer;\n  margin: 12px 0; }\n\n.shipment-item :hover {\n    background-color: #777777;\n    color: #f5f5f5; }\n\n/* Box styles */\n\n.myBox {\n  border: none;\n  padding: 5px;\n  font: 24px/36px sans-serif;\n  width: 200px;\n  height: 200px;\n  overflow: scroll; }\n\n/* Scrollbar styles */\n\n::-webkit-scrollbar {\n  width: 6px;\n  height: 12px; }\n\n::-webkit-scrollbar-track {\n  background: #ffffff;\n  border-radius: 10px; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #818181; }\n\n::-webkit-scrollbar-thumb:hover {\n  background: #727171; }\n"

/***/ }),

/***/ "./src/app/shared/layout/shipments/shipments.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/layout/shipments/shipments.component.ts ***!
  \****************************************************************/
/*! exports provided: ShipmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentsComponent", function() { return ShipmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shipments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shipments.service */ "./src/app/shared/services/shipments.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShipmentsComponent = /** @class */ (function () {
    function ShipmentsComponent(_ShipmentsService) {
        this._ShipmentsService = _ShipmentsService;
    }
    ShipmentsComponent.prototype.ngOnInit = function () {
        this.getShipments();
    };
    ShipmentsComponent.prototype.getShipments = function () {
        var _this = this;
        this._ShipmentsService.getCharacters()
            .subscribe(function (response) {
            _this.characterResponse = response;
            _this.characterResponseForSearch = _this.characterResponse;
        });
    };
    ShipmentsComponent.prototype.onDateChange = function () {
        this.searchString = this.date.toString();
        console.log(this.searchString);
    };
    ShipmentsComponent.prototype.search = function (text) {
        var _this = this;
        console.log(text);
        this.characterResponse = [];
        var key = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](text).replace(/[\s]/g, "");
        if (key.length) {
            this.characterResponseForSearch.filter(function (elem) {
                if (lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](elem.name)
                    .replace(/[\s]/g, "")
                    .includes(key)) {
                    _this.characterResponse.push(elem);
                }
                else if (lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](elem.actor)
                    .replace(/[\s]/g, "")
                    .includes(key)) {
                    _this.characterResponse.push(elem);
                }
                else if (lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](elem.house)
                    .replace(/[\s]/g, "")
                    .includes(key)) {
                    _this.characterResponse.push(elem);
                }
                else if (lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](elem.dateOfBirth)
                    .replace(/[\s]/g, "")
                    .includes(key)) {
                    _this.characterResponse.push(elem);
                }
            });
        }
        else {
            this.characterResponse = this.characterResponseForSearch;
        }
    };
    ShipmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipments',
            template: __webpack_require__(/*! ./shipments.component.html */ "./src/app/shared/layout/shipments/shipments.component.html"),
            styles: [__webpack_require__(/*! ./shipments.component.scss */ "./src/app/shared/layout/shipments/shipments.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_shipments_service__WEBPACK_IMPORTED_MODULE_1__["ShipmentsService"]])
    ], ShipmentsComponent);
    return ShipmentsComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/sidebar/sidebar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/layout/sidebar/sidebar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"item\" [ngClass]=\"{'active-link': statusFlagsObject.dashboardMenu==true}\">\n        <i class=\"fas fa-tachometer-alt item\" (click)=\"menuClick('dashboardMenu')\"></i>\n    </div>\n    <div class=\"item\" [routerLink]=\"['/consigmentdetails']\" [ngClass]=\"{'active-link': statusFlagsObject.reportsMenu==true}\">\n        <i class=\"fas fa-tachometer-alt item\" (click)=\"menuClick('reportsMenu')\"></i>\n    </div>\n    <div class=\"item\" [ngClass]=\"{'active-link': statusFlagsObject.analyticsMenu==true}\">\n        <i class=\"fas fa-tachometer-alt item\" (click)=\"menuClick('analyticsMenu')\"></i>\n    </div>\n    <div class=\"item\" [ngClass]=\"{'active-link': statusFlagsObject.performanceMenu==true}\">\n        <i class=\"fas fa-tachometer-alt item\" (click)=\"menuClick('performanceMenu')\"></i>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/layout/sidebar/sidebar.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/layout/sidebar/sidebar.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  background-color: #fff;\n  display: flex;\n  flex-direction: column; }\n\n.item {\n  cursor: pointer;\n  margin: 5px 4px;\n  font-size: 26px; }\n\ni {\n  color: #aaa; }\n\n.active-link i {\n  color: #225590; }\n"

/***/ }),

/***/ "./src/app/shared/layout/sidebar/sidebar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/sidebar/sidebar.component.ts ***!
  \************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.dashboardMenu = false;
        this.reportsMenu = false;
        this.analyticsMenu = false;
        this.performanceMenu = false;
        this.statusFlagsObject = {};
        this.dashboardMenuClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reportsMenuClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.setFlags();
    };
    SidebarComponent.prototype.eventEmitterMethod = function (data) {
        this.dashboardMenuClickEvent.emit(data);
    };
    SidebarComponent.prototype.setFlags = function () {
        this.statusFlagsObject = {
            "dashboardMenu": this.dashboardMenu,
            "reportsMenu": this.reportsMenu,
            "analyticsMenu": this.analyticsMenu,
            "performanceMenu": this.performanceMenu
        };
    };
    SidebarComponent.prototype.menuClick = function (key) {
        if (key == "dashboardMenu") {
            this.dashboardMenu = !this.dashboardMenu;
            this.reportsMenu = this.analyticsMenu = this.performanceMenu = false;
            this.statusFlagsObject["dashboardMenu"] = this.dashboardMenu;
        }
        if (key == "reportsMenu") {
            this.reportsMenu = !this.reportsMenu;
            this.dashboardMenu = this.analyticsMenu = this.performanceMenu = false;
            this.statusFlagsObject["reportsMenu"] = this.reportsMenu;
        }
        if (key == "analyticsMenu") {
            this.analyticsMenu = !this.analyticsMenu;
            this.reportsMenu = this.dashboardMenu = this.performanceMenu = false;
            this.statusFlagsObject["analyticsMenu"] = this.analyticsMenu;
        }
        if (key == "performanceMenu") {
            this.performanceMenu = !this.performanceMenu;
            this.reportsMenu = this.analyticsMenu = this.dashboardMenu = false;
            this.statusFlagsObject["performanceMenu"] = this.performanceMenu;
        }
        this.setFlags();
        this.eventEmitterMethod(this.statusFlagsObject);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "dashboardMenuClickEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "reportsMenuClickEvent", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/layout/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/layout/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/shipments.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/shipments.service.ts ***!
  \******************************************************/
/*! exports provided: ShipmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentsService", function() { return ShipmentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShipmentsService = /** @class */ (function () {
    function ShipmentsService(http) {
        this.http = http;
        this.apiUrl = 'http://hp-api.herokuapp.com/api/';
        // if(!environment.isServer){
        //     this._httpHeaders = {
        //         headers: new HttpHeaders({
        //             // 'x-auth-token': JSON.parse(sessionStorage.getItem('schoolBotAdminUser')).id_token
        //             'Authorization': 'Bearer' + ' ' + JSON.parse(sessionStorage.getItem('schoolBotAdminUser')).id_token
        //         }),
        //         observe: 'response' as 'response'
        //     };
        // }
    }
    ShipmentsService.prototype.getCharacters = function () {
        return this.http.get(this.apiUrl + 'characters');
    };
    ShipmentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ShipmentsService);
    return ShipmentsService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/a/Desktop/Frontend/shipsy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map