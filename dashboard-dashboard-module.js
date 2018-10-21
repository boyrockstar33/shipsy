(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex\">\n    <app-sidebar (dashboardMenuClickEvent)=\"recieveDashboardClickEvent($event)\"></app-sidebar>\n    <app-shipments *ngIf=\"statusFlagsFromSidebar.dashboardMenu\"></app-shipments>\n    <div class=\"content\">\n        <iframe id=\"map\" src=\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d112241.52972623214!2d77.09831097900393!3d28.463044793322762!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1539949100352\" width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>    \n    </div>\n</div>\n<div class=\"card\">\n    <table class=\"\">\n        <tr>\n            <td class=\"border-right\">Total orders</td>\n            <td class=\"border-right\">30 Mins +</td>\n            <td class=\"border-right\">20 - 30 Mins +</td>\n            <td class=\"border-right\">10 - 20 Mins +</td>\n            <td>0 - 10 Mins +</td>\n        </tr>\n        <tr class=\"second-row\">\n            <td style=\"color: #2b577c\" class=\"border-right\">80</td>\n            <td style=\"color: #c04547\" class=\"border-right\">20</td>\n            <td style=\"color: #8ac253\" class=\"border-right\">20</td>\n            <td style=\"color: #8ac253\" class=\"border-right\">20</td>\n            <td style=\"color: #8ac253\">20</td>\n        </tr>\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex;\n  margin: 0;\n  align-items: stretch;\n  height: 100%; }\n\napp-sidebar {\n  flex: 1;\n  order: 1;\n  max-width: 50px; }\n\napp-shipments {\n  max-height: 10% !important;\n  order: 2;\n  max-height: 100%; }\n\n.content {\n  flex: 1;\n  order: 3; }\n\n.card {\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  display: block;\n  margin-left: 35%;\n  padding: 5px;\n  margin-top: 5px;\n  box-shadow: 10px 10px 5px -9px rgba(0, 0, 0, 0.3); }\n\n@media (max-width: 976px) {\n    .card {\n      display: none; } }\n\n.second-row {\n  font-weight: 700;\n  font-size: 34px; }\n\ntd {\n  padding-right: 15px;\n  padding-left: 10px; }\n\n.border-right {\n  border-right: 1px solid #ddd; }\n\n@media (max-width: 600px) {\n  #map {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.statusFlagsFromSidebar = {};
    }
    DashboardComponent.prototype.recieveDashboardClickEvent = function ($event) {
        this.statusFlagsFromSidebar = $event;
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/layout/layout.module */ "./src/app/shared/layout/layout.module.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _dashboard_routing__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutes"]],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
            exports: []
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");


var routes = [
    {
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        data: {
            meta: {
                title: '',
                override: true,
                description: ''
            }
        }
    }
];
var DashboardRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map