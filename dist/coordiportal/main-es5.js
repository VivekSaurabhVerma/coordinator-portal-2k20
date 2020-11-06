function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-animations.ts":
  /*!***********************************!*\
    !*** ./src/app/app-animations.ts ***!
    \***********************************/

  /*! exports provided: translateRight, navAnimation, footerAnimation, routeAnimate */

  /***/
  function srcAppAppAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translateRight", function () {
      return translateRight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "navAnimation", function () {
      return navAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "footerAnimation", function () {
      return footerAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routeAnimate", function () {
      return routeAnimate;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var translateRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('tR', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show=>hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      transform: "translateX(50px)",
      offset: 0.1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: "translateX(-100px)",
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: "translateX(-50px)",
      opacity: "0.5",
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: "translateX(0px)",
      offset: 1
    })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hide=>show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      transform: "translateX(-50px)",
      offset: 0.1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: "translateX(100px)",
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: "translateX(50px)",
      opacity: "0.5",
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: "translateX(0px)",
      offset: 1
    })])))]);
    var navAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('navAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateY(-200px)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateY(-160px)",
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateY(-80px)",
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.7",
      transform: "translateY(-30px)",
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateY(0px)",
      offset: 1.0
    })])))]);
    var footerAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('footerAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateY(200px)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateY(160px)",
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateY(80px)",
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.7",
      transform: "translateY(30px)",
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateY(0px)",
      offset: 1.0
    })])))]);
    var routeAnimate = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('department=>departmentdetail', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateY(600px) scale(0)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateY(400px) scale(0.1)",
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      transform: "translateY(300px) scale(0.1)",
      offset: 0.35
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      transform: "translateY(200px) scale(0.5)",
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateY(0px) scale(1)",
      offset: 1.0
    })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('departmentdetail=>department', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateY(-600px) scale(0)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateY(-400px) scale(0.1)",
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      transform: "translateY(-300px) scale(0.1)",
      offset: 0.35
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      transform: "translateY(-200px) scale(0.5)",
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateY(0px) scale(1)",
      offset: 1.0
    })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>memories', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0s')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*<=>*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.7",
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      offset: 1.0
    })])))]);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _departments_departments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./departments/departments.component */
    "./src/app/departments/departments.component.ts");
    /* harmony import */


    var _departmentdetail_departmentdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./departmentdetail/departmentdetail.component */
    "./src/app/departmentdetail/departmentdetail.component.ts");
    /* harmony import */


    var _managerdetail_managerdetail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./managerdetail/managerdetail.component */
    "./src/app/managerdetail/managerdetail.component.ts");
    /* harmony import */


    var _coordimemories_coordimemories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./coordimemories/coordimemories.component */
    "./src/app/coordimemories/coordimemories.component.ts");
    /* harmony import */


    var _results_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./results/results.component */
    "./src/app/results/results.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
      data: {
        animation: 'home'
      }
    }, {
      path: 'departments',
      component: _departments_departments_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentsComponent"],
      data: {
        animation: 'department'
      }
    }, {
      path: 'departmentdetail',
      component: _departmentdetail_departmentdetail_component__WEBPACK_IMPORTED_MODULE_4__["DepartmentdetailComponent"],
      data: {
        animation: 'departmentdetail'
      }
    }, {
      path: 'departmentdetail/:dep',
      component: _departmentdetail_departmentdetail_component__WEBPACK_IMPORTED_MODULE_4__["DepartmentdetailComponent"],
      data: {
        animation: 'departmentdetail'
      }
    }, {
      path: 'managerdetail/:dep',
      component: _managerdetail_managerdetail_component__WEBPACK_IMPORTED_MODULE_5__["ManagerdetailComponent"],
      data: {
        animation: 'managerdetail'
      }
    }, {
      path: 'memories',
      component: _coordimemories_coordimemories_component__WEBPACK_IMPORTED_MODULE_6__["CoordimemoriesComponent"],
      data: {
        animation: 'memories'
      }
    }, {
      path: 'results',
      component: _results_results_component__WEBPACK_IMPORTED_MODULE_7__["ResultsComponent"],
      data: {
        animation: 'results'
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app-animations */
    "./src/app/app-animations.ts");
    /* harmony import */


    var _currentscreen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./currentscreen.service */
    "./src/app/currentscreen.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _services_communicator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/communicator.service */
    "./src/app/services/communicator.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_div_41_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_41_div_1_Template_p_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.redirect("results");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "RESULTS OF REVERSE VIDEO CHALLENGE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_41_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_41_div_8_Template_p_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.redirect("results");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "RESULTS OF REVERSE VIDEO CHALLENGE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_41_div_1_Template, 4, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_41_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.redirectAnotherPage("https://twitter.com/Techfest_IITB\n          ");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_41_Template_span_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.redirectAnotherPage("https://www.linkedin.com/company/techfest/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_41_Template_span_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.redirectAnotherPage("https://www.facebook.com/iitbombaytechfest");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_41_Template_span_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.redirectAnotherPage("https://www.instagram.com/techfest_iitbombay/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_41_Template_span_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.redirectAnotherPage("https://www.youtube.com/user/techfestiitbombay");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_41_div_8_Template, 4, 0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@footerAnimation", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.smallWidth);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.smallWidth);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(cs, route, router, ngxService, commService) {
        _classCallCheck(this, AppComponent);

        this.cs = cs;
        this.route = route;
        this.router = router;
        this.ngxService = ngxService;
        this.commService = commService;
        this.title = 'coordiportal';
        this.smallWidth = false;
        this.stateRegister = 'show';
        this.footer = true;
        this.mobile = false;
        this.overflowHidden = true;
        this.showx = false;
        this.isSafari = false;
        this.bodyMobile = true;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
          // Stop the foreground loading after 5s

          setTimeout(function () {
            _this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId

          }, 1000);
          setInterval(function () {
            _this.changeOrder();
          });

          if (this.getMobileOperatingSystem() == "iOS") {
            this.bodyMobile = false;
          }
        }
      }, {
        key: "changeOrder",
        value: function changeOrder() {
          window.innerWidth < 992 ? this.smallWidth = true : this.smallWidth = false;
          if (window.location.href.includes('managerdetail')) this.footer = false;else this.footer = true;

          if (window.location.href.includes('memories')) {
            var navlinks = document.querySelectorAll('.nav-link');
            navlinks.forEach(function (item) {
              item.classList.remove('active');
            });
            document.querySelector('#memories').classList.add('active');
          }

          if (window.location.href.includes('department')) {
            var _navlinks = document.querySelectorAll('.nav-link');

            _navlinks.forEach(function (item) {
              item.classList.remove('active');
            });

            document.querySelector('#departments').classList.add('active');
          }

          if (window.innerWidth < 675) this.mobile = true;else this.mobile = false;

          if (window.innerWidth > 1070) {
            this.overflowHidden = true;
          } else {
            this.overflowHidden = false;
          }

          var is_safari = navigator.userAgent.indexOf("Safari");

          if (is_safari == 104 && this.mobile == false) {
            this.isSafari = true;
          } else this.isSafari = false; // console.log(is_safari);

        }
      }, {
        key: "changeScreen",
        value: function changeScreen(event, name) {
          this.cs.setCurrentScreen(name);
          this.router.navigate(['']);
          var navlinks = document.querySelectorAll('.nav-link');
          navlinks.forEach(function (item) {
            item.classList.remove('active');
          });
          event.target.classList.add('active');
        }
      }, {
        key: "toggleTrigger",
        value: function toggleTrigger() {
          this.stateRegister == 'hide' ? this.stateRegister = 'show' : this.stateRegister = 'hide';
        }
      }, {
        key: "log",
        value: function log(e) {
          console.log(e);
        }
      }, {
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          // console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'])
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
        }
      }, {
        key: "redirect",
        value: function redirect(path) {
          this.router.navigate([path]);
        }
      }, {
        key: "redirectAnotherPage",
        value: function redirectAnotherPage(link) {
          // window.location.href=link;
          window.open(link);
        }
      }, {
        key: "routeAnimationComplete",
        value: function routeAnimationComplete(e) {
          this.commService.statusReceiver(e);
        }
      }, {
        key: "showCross",
        value: function showCross() {
          this.showx ? this.showx = false : this.showx = true;
        }
      }, {
        key: "getMobileOperatingSystem",
        value: function getMobileOperatingSystem() {
          var userAgent = navigator.userAgent || navigator.vendor; // Windows Phone must come first because its UA also contains "Android"

          if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
          }

          if (/android/i.test(userAgent)) {
            return "Android";
          } // iOS detection from: http://stackoverflow.com/a/9039885/177710


          if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
          }

          return "unknown";
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_currentscreen_service__WEBPACK_IMPORTED_MODULE_2__["CurrentscreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_communicator_service__WEBPACK_IMPORTED_MODULE_5__["CommunicatorService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 42,
      vars: 22,
      consts: [["fgsType", "rectangle-bounce-pulse-out", "fgsColor", "#0a193b", "pbColor", "#0a193b"], [1, "main-container"], [1, "navbar", "navbar-expand-lg", "bg-dark", "navbar-dark", "transparent-nav"], ["target", "_blank", "href", "http://techfest.org/", 1, "navbar-brand"], ["src", "assets/logo.png", 1, "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavbar", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "line-1"], [1, "line-1", "line-m"], [1, "sl-1"], [1, "sl-2"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse", "main-container-mobile"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], [1, "nav-link", "active", 3, "click"], [1, "nav-link", 3, "click"], ["id", "departments", 1, "nav-link", 3, "click"], ["id", "memories", 1, "nav-link", 3, "click"], [1, "blur-div", 3, "click", "mouseenter", "mouseleave"], [1, "blur"], ["id", "register", 1, "nav-link", 2, "min-height", "100%", "width", "100%", "position", "absolute"], [1, "blur-text"], [1, "nav-link"], [1, "main-container-mobile"], ["outlet", "outlet"], ["class", "footer row", 4, "ngIf"], [1, "footer", "row"], ["class", "col-12 col-lg-6", 4, "ngIf"], [1, "col-12", "col-lg-6", "text-center", "text-lg-left"], [1, "fa", "fa-twitter", 3, "click"], [1, "fa", "fa-linkedin", 3, "click"], [1, "fa", "fa-facebook", 3, "click"], [1, "fa", "fa-instagram", 3, "click"], [1, "fa", "fa-youtube", 3, "click"], ["class", "col-12 col-lg-6 results-div", 4, "ngIf"], [1, "col-12", "col-lg-6"], [1, "footer-text", "text-center", "font-weight-bold", 3, "click"], [1, "underline-footer", "d-inline-block", 2, "overflow-x", "hidden"], [1, "col-12", "col-lg-6", "results-div"], [1, "footer-text", "text-lg-right", "text-center", 3, "click"], [1, "underline-footer", "d-inline-block", 2, "overflow-x", "hidden", "font-weight", "bolder"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-ui-loader", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() {
            return ctx.showCross();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_16_listener($event) {
            return ctx.changeScreen($event, "home");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_19_listener($event) {
            return ctx.changeScreen($event, "whytf");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "WHY TF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_22_listener() {
            return ctx.redirect("departments");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "DEPARTMENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_25_listener() {
            return ctx.redirect("memories");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "COORDIE MEMORIES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_28_listener() {
            return ctx.redirectAnotherPage("https://docs.google.com/forms/d/e/1FAIpQLScfj7PY-xHs5qVLuMoQ1useoIYowsRx9mUvorze02WrBm06xQ/viewform?usp=sf_link\n");
          })("mouseenter", function AppComponent_Template_div_mouseenter_28_listener() {
            return ctx.toggleTrigger();
          })("mouseleave", function AppComponent_Template_div_mouseleave_28_listener() {
            return ctx.toggleTrigger();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@tR.done", function AppComponent_Template_a_animation_tR_done_32_listener($event) {
            return ctx.log($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "REGISTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_35_listener() {
            return ctx.redirectAnotherPage("https://docs.google.com/forms/d/e/1FAIpQLScfj7PY-xHs5qVLuMoQ1useoIYowsRx9mUvorze02WrBm06xQ/viewform?usp=sf_link\n");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "REGISTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@routeAnimations.done", function AppComponent_Template_div_animation_routeAnimations_done_38_listener($event) {
            return ctx.routeAnimationComplete($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "router-outlet", null, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AppComponent_div_41_Template, 9, 3, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide-overflow", ctx.overflowHidden)("safari-class", ctx.isSafari);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@navAnimation", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx.showx);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx.showx);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx.showx);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", !ctx.showx);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", !ctx.showx);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@tR", ctx.stateRegister);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", !ctx.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footer);
        }
      },
      directives: [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["ɵb"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["@media screen and (min-width: 675px) {\n  body[_ngcontent-%COMP%] {\n    position: relative;\n    min-height: 100vh;\n  }\n\n  .main-container[_ngcontent-%COMP%] {\n    padding-bottom: 10vh;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    min-width: 90vw;\n    height: 10vh;\n  }\n}\n\n\n\n\n\n.logo[_ngcontent-%COMP%] {\n  width: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.transparent-nav[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n\n\n\n.nav-link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 2px;\n  background: #fff;\n  transition: width 0.2s;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n  transition: width 0.4s;\n}\n\n.nav-item[_ngcontent-%COMP%]:nth-child(5)   .nav-link[_ngcontent-%COMP%]:hover::after {\n  width: 0;\n}\n\n.nav-link.active[_ngcontent-%COMP%]::after {\n  width: 100%;\n  transition: width 0.4s;\n}\n\n\n\n.blur-div[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n\n.blur[_ngcontent-%COMP%] {\n  width: 110%;\n  transform: translateX(-5%);\n  position: absolute;\n  min-height: 100%;\n  background-color: #fff;\n  -webkit-filter: blur(1px);\n          filter: blur(1px);\n  opacity: 0.2;\n  border-radius: 25px;\n}\n\n\n\nbody[_ngcontent-%COMP%] {\n  background: url(\"/assets/backg.jpg\");\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 100vh;\n  max-width: 100vw;\n  overflow-x: hidden;\n  \n  \n}\n\n.safari-class[_ngcontent-%COMP%] {\n  background-repeat: repeat-y;\n  background-attachment: scroll;\n  background-size: contain;\n}\n\n@media screen and (min-width: 1400px) {\n  body[_ngcontent-%COMP%] {\n    overflow: hidden;\n  }\n}\n\n@media screen and (min-width: 992px) {\n  body[_ngcontent-%COMP%] {\n    min-height: 100vh;\n  }\n}\n\n\n\n.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #ffffff;\n  opacity: 1;\n  font-size: 20px;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.navbar-toggler[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  padding-left: 5vw;\n  padding-right: 5vw;\n}\n\n.footer-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-top: 16px;\n  font-size: 22px;\n}\n\n.fa[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #ffffff;\n  border: 1px solid #ffffff;\n  border-radius: 100%;\n  height: 56px;\n  width: 56px;\n  text-align: center;\n  padding-top: 10px;\n  margin-right: 24px;\n  opacity: 0.5;\n  transition: opacity 0.25s ease-in-out;\n}\n\n.fa[_ngcontent-%COMP%]:nth-child(1) {\n  margin-left: 32px;\n}\n\n\n\n.underline-footer[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 5px;\n  background: #fff;\n  transition: width 0.2s;\n  -webkit-animation: underline 5s infinite;\n          animation: underline 5s infinite;\n}\n\n.results-div[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n@-webkit-keyframes underline {\n  0% {\n    width: 100%;\n  }\n\n  50% {\n    width: 100%;\n    transform: translateX(500px);\n    opacity: 0;\n  }\n  51% {\n    width: 100%;\n    transform: translateX(-400px);\n    opacity: 0;\n  }\n\n  52% {\n    opacity: 1;\n  }\n\n  100% {\n    width: 100%;\n    transform: translateX(0);\n  }\n}\n\n@keyframes underline {\n  0% {\n    width: 100%;\n  }\n\n  50% {\n    width: 100%;\n    transform: translateX(500px);\n    opacity: 0;\n  }\n  51% {\n    width: 100%;\n    transform: translateX(-400px);\n    opacity: 0;\n  }\n\n  52% {\n    opacity: 1;\n  }\n\n  100% {\n    width: 100%;\n    transform: translateX(0);\n  }\n}\n\n\n\n@media screen and (max-width: 675px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n\n  .main-container-mobile[_ngcontent-%COMP%] {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    padding-bottom: 16px;\n  }\n\n  .fa[_ngcontent-%COMP%] {\n    font-size: 24px;\n    color: #ffffff;\n    border: 1px solid #ffffff;\n    border-radius: 100%;\n    height: 42px;\n    width: 42px;\n    text-align: center;\n    padding-top: 7.5px;\n    margin-right: 14px;\n    opacity: 0.5;\n  }\n\n  .fa[_ngcontent-%COMP%]:nth-child(1) {\n    margin-left: 0px;\n  }\n\n  .fa[_ngcontent-%COMP%]:last-child {\n    margin-right: 0;\n  }\n}\n\n@media screen and (max-width: 1225px) {\n  .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .nav-item[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n\n@media screen and (min-width: 992px) {\n  \n}\n\n@media screen and (max-width: 1100px) and (min-width: 675px) {\n  .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .nav-item[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n\n@supports (-webkit-touch-callout: none) {\n  body[_ngcontent-%COMP%] {\n    background-attachment: scroll;\n  }\n}\n\n@media screen and (max-width: 675px) {\n  .footer[_ngcontent-%COMP%] {\n    margin-top: 32px;\n  }\n\n  \n\n  body[_ngcontent-%COMP%] {\n    background: url(\"/assets/backg_phone.png\");\n    overflow: hidden;\n    \n    background-position: bottom;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    min-height: 100vh;\n    max-width: 100vw;\n  }\n\n  .navbar-toggler[_ngcontent-%COMP%] {\n    background-color: #fff;\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    position: relative;\n  }\n\n  .line-1[_ngcontent-%COMP%] {\n    display: block;\n    border: 1px solid black;\n    width: 15px;\n    margin-top: 5px;\n    transform: translate3d(4px, -24px, 0);\n  }\n\n  .line-m[_ngcontent-%COMP%] {\n    display: block;\n    border: 1px solid black;\n    width: 10px;\n    margin-top: 5px;\n    transform: translate3d(8px, -24px, 0);\n  }\n\n  .footer-text[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .sl-1[_ngcontent-%COMP%] {\n    display: block;\n    border: 1px solid black;\n    width: 50%;\n    position: absolute;\n    margin: 0 !important;\n    bottom: 50%;\n    transform: rotate(45deg);\n  }\n\n  .sl-2[_ngcontent-%COMP%] {\n    display: block;\n    border: 1px solid black;\n    width: 50%;\n    position: absolute;\n    margin: 0 !important;\n    bottom: 50%;\n    transform: rotate(-45deg);\n  }\n}\n\n\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.fa[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  opacity: 1;\n  transition: 0.25s ease-in-out;\n}\n\n.hide-overflow[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQXVCOztBQUV2QjtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUNGOztBQUVBOzs7Ozs7Ozs7Q0FTQzs7QUFFRCxzQkFBc0I7O0FBRXRCO0VBQ0UsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUEsMEJBQTBCOztBQUMxQjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsUUFBUTtFQUNSLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUEsNkJBQTZCOztBQUU3QjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUEsMEJBQTBCOztBQUUxQjtFQUNFLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUEsMkJBQTJCOztBQUMzQjtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsZ0NBQWdDOztBQUNoQztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsUUFBUTtFQUNSLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHdDQUFnQztVQUFoQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBeEJBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUEsK0JBQStCOztBQUUvQjtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTs7Ozs7R0FLQztBQUNIOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBOzs7Ozs7Ozs7R0FTQzs7RUFFRDtJQUNFLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7SUFDZixxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBLDJCQUEyQjs7QUFDM0I7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKip4cGVyaW1lbnRhbCoqKioqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NzVweCkge1xuICBib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cblxuICAubWFpbi1jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHZoO1xuICB9XG5cbiAgLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBtaW4td2lkdGg6IDkwdnc7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICB9XG59XG5cbi8qQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NzVweCl7XG5cdC5mb290ZXJ7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTB2aDtcblx0fVxuXG5cdC5mYXtcblx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXHR9XG59XG4qL1xuXG4vKioqKioqKioqKioqKioqKioqKioqL1xuXG4ubG9nbyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi50cmFuc3BhcmVudC1uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4vKioqKlVuZGVybGluZSBFZmZlY3QqKioqKi9cbi5uYXYtbGluazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xufVxuXG4ubmF2LWxpbms6aG92ZXI6OmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHM7XG59XG5cbi5uYXYtaXRlbTpudGgtY2hpbGQoNSkgLm5hdi1saW5rOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAwO1xufVxuXG4ubmF2LWxpbmsuYWN0aXZlOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzO1xufVxuXG4vKioqKioqKipCbHVyIGVmZmVjdCoqKioqKioqKi9cblxuLmJsdXItZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ibHVyIHtcbiAgd2lkdGg6IDExMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZpbHRlcjogYmx1cigxcHgpO1xuICBvcGFjaXR5OiAwLjI7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iYWNrZy5qcGdcIik7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgLypib3JkZXI6MnB4IHNvbGlkIHJlZDsqL1xuICAvKm92ZXJmbG93OiBoaWRkZW47Ki9cbn1cblxuLnNhZmFyaS1jbGFzcyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIGJvZHkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbn1cblxuLyoqKioqKioqTkFWQkFSKioqKioqKioqKioqL1xuLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5uYXYtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cblxuLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiA1dnc7XG4gIHBhZGRpbmctcmlnaHQ6IDV2dztcbn1cblxuLmZvb3Rlci10ZXh0IHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmZhIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgaGVpZ2h0OiA1NnB4O1xuICB3aWR0aDogNTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mYTpudGgtY2hpbGQoMSkge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cblxuLyoqKioqKkZvb3RlciBVbmRlcmxpbmUqKioqKioqKiovXG4udW5kZXJsaW5lLWZvb3Rlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xuICBhbmltYXRpb246IHVuZGVybGluZSA1cyBpbmZpbml0ZTtcbn1cblxuLnJlc3VsdHMtZGl2OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5Aa2V5ZnJhbWVzIHVuZGVybGluZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUxJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDUyJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzVweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxuXG4gIC5tYWluLWNvbnRhaW5lci1tb2JpbGUge1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGhlaWdodDogNDJweDtcbiAgICB3aWR0aDogNDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDcuNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICAuZmE6bnRoLWNoaWxkKDEpIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG5cbiAgLmZhOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjI1cHgpIHtcbiAgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLm5hdi1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLyouZm9vdGVye1xuXHRcdHBvc2l0aW9uOmZpeGVkO1xuXHRcdGJvdHRvbTowO1xuXHRcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXHRcdHdpZHRoOjkwdnc7XG5cdH0qL1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIGFuZCAobWluLXdpZHRoOiA2NzVweCkge1xuICAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAubmF2LWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxufVxuXG5Ac3VwcG9ydHMgKC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZSkge1xuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzVweCkge1xuICAuZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICB9XG5cbiAgLypcdGJvZHkuYm9keS1tb2JpbGUtY2xhc3N7XG5cdFx0YmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iYWNrZ19waG9uZS5wbmdcIik7XG5cdFx0b3ZlcmZsb3c6aGlkZGVuO1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcblx0XHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuXHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0ICAgXHRtaW4taGVpZ2h0OjEwMHZoO1xuXHQgIFx0bWF4LXdpZHRoOjEwMHZ3O1xuXHR9Ki9cblxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JhY2tnX3Bob25lLnBuZ1wiKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8qYmFja2dyb3VuZC1zaXplOiBjb250YWluOyovXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICB9XG5cbiAgLm5hdmJhci10b2dnbGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmxpbmUtMSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAtMjRweCwgMCk7XG4gIH1cblxuICAubGluZS1tIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIC0yNHB4LCAwKTtcbiAgfVxuXG4gIC5mb290ZXItdGV4dCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLnNsLTEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGJvdHRvbTogNTAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuXG4gIC5zbC0yIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBib3R0b206IDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG59XG5cbi8qKioqKkZpbmFsIGNoYW5nZXMqKioqKioqKi9cbi5uYXYtbGluazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcbn1cblxuLmhpZGUtb3ZlcmZsb3cge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4iXX0= */"],
      data: {
        animation: [_app_animations__WEBPACK_IMPORTED_MODULE_1__["translateRight"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["navAnimation"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["footerAnimation"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["routeAnimate"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          animations: [_app_animations__WEBPACK_IMPORTED_MODULE_1__["translateRight"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["navAnimation"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["footerAnimation"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["routeAnimate"]]
        }]
      }], function () {
        return [{
          type: _currentscreen_service__WEBPACK_IMPORTED_MODULE_2__["CurrentscreenService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]
        }, {
          type: _services_communicator_service__WEBPACK_IMPORTED_MODULE_5__["CommunicatorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _departments_departments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./departments/departments.component */
    "./src/app/departments/departments.component.ts");
    /* harmony import */


    var _departmentdetail_departmentdetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./departmentdetail/departmentdetail.component */
    "./src/app/departmentdetail/departmentdetail.component.ts");
    /* harmony import */


    var _managerdetail_managerdetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./managerdetail/managerdetail.component */
    "./src/app/managerdetail/managerdetail.component.ts");
    /* harmony import */


    var _coordimemories_coordimemories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./coordimemories/coordimemories.component */
    "./src/app/coordimemories/coordimemories.component.ts");
    /* harmony import */


    var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-useful-swiper */
    "./node_modules/ngx-useful-swiper/__ivy_ngcc__/fesm2015/ngx-useful-swiper.js");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
    /* harmony import */


    var ngx_glide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-glide */
    "./node_modules/ngx-glide/__ivy_ngcc__/fesm2015/ngx-glide.js");
    /* harmony import */


    var _results_results_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./results/results.component */
    "./src/app/results/results.component.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");

    var DEFAULT_SWIPER_CONFIG = {
      direction: 'horizontal',
      slidesPerView: 'auto'
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SWIPER_CONFIG"],
        useValue: DEFAULT_SWIPER_CONFIG
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_10__["NgxUsefulSwiperModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SwiperModule"], ngx_glide__WEBPACK_IMPORTED_MODULE_12__["NgxGlideModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_14__["NgxUiLoaderModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _departments_departments_component__WEBPACK_IMPORTED_MODULE_6__["DepartmentsComponent"], _departmentdetail_departmentdetail_component__WEBPACK_IMPORTED_MODULE_7__["DepartmentdetailComponent"], _managerdetail_managerdetail_component__WEBPACK_IMPORTED_MODULE_8__["ManagerdetailComponent"], _coordimemories_coordimemories_component__WEBPACK_IMPORTED_MODULE_9__["CoordimemoriesComponent"], _results_results_component__WEBPACK_IMPORTED_MODULE_13__["ResultsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_10__["NgxUsefulSwiperModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SwiperModule"], ngx_glide__WEBPACK_IMPORTED_MODULE_12__["NgxGlideModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_14__["NgxUiLoaderModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _departments_departments_component__WEBPACK_IMPORTED_MODULE_6__["DepartmentsComponent"], _departmentdetail_departmentdetail_component__WEBPACK_IMPORTED_MODULE_7__["DepartmentdetailComponent"], _managerdetail_managerdetail_component__WEBPACK_IMPORTED_MODULE_8__["ManagerdetailComponent"], _coordimemories_coordimemories_component__WEBPACK_IMPORTED_MODULE_9__["CoordimemoriesComponent"], _results_results_component__WEBPACK_IMPORTED_MODULE_13__["ResultsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_10__["NgxUsefulSwiperModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SwiperModule"], ngx_glide__WEBPACK_IMPORTED_MODULE_12__["NgxGlideModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_14__["NgxUiLoaderModule"]],
          providers: [{
            provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SWIPER_CONFIG"],
            useValue: DEFAULT_SWIPER_CONFIG
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/coordimemories/coordie-memories.ts":
  /*!****************************************************!*\
    !*** ./src/app/coordimemories/coordie-memories.ts ***!
    \****************************************************/

  /*! exports provided: memories */

  /***/
  function srcAppCoordimemoriesCoordieMemoriesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "memories", function () {
      return memories;
    });

    var memories = [{
      id: 1,
      name: 'Harini Rathod',
      description: "TF experience has been a fantastic experience you'd carry to relive on. Co-coordies turned to cool buddies; The TF Coordie experience is so much to share besides handling impromptu events and cracking deals. One week's experience in the sets got no words, The empowered feeling when the organizers follow you and the love you get from them when the fest ends are equally amazing. And yeah; not to mention the best part...,infinite freebies!",
      image: 'assets/memories/harini rathod-min.png'
    }, {
      id: 2,
      name: 'Aradhya Agarwal',
      description: '"Pure adrenaline rush" - I don\'t think anything summarises my Techfest experience better than these 3 words.Working in the Lectures department, it was a really thrilling experience for me and a great learning curve too. I got exposure to a variety of tasks. From planning the detailed run-throughs to making sure that they were executed impeccably, it was quite hectic but thoroughly enjoyable too!Got to thank all the people who were there with me during that time, from Naman and my co-cordies to the amazing team of organisers I could work with.',
      image: 'assets/memories/aradhya-min.png'
    }, {
      id: 3,
      name: 'Meetal Manke',
      description: 'My experience as a coordinator in Techfest was overwhelming, if it were to be said in a word! The best feeling that I experienced was the satisfaction at the end of each of the three days of Techfest when we saw how beautifully all our efforts which we put into making that one thing, paid off and we realised that yes! This was worth it!! The unforgettable memories and making life long friends was what that Techfest meant to me!!',
      image: 'assets/memories/meetal -min.png'
    }, {
      id: 4,
      name: 'Prabal Gautam',
      description: 'Coordinator year accorded me with enormous learning and beautiful memories which will remain forever with me. Fascinating work begins from day 0 like making room arrangements, provide accommodation and much more. Infinite beverages, waking up till 4am playing games and sleeping in the hospitality room added fun to my work. Chilling with organizers and co-coordinators after the day relaxed me and gave positive energy to start my next day with more will power.',
      image: 'assets/memories/prabal gautam-min.png'
    }, {
      id: 5,
      name: 'Shibani Dhar',
      description: "Techfest was an experience that made my whole college life memorable. The moments that we lived then are gonna stay with me for a really long time. It is really difficult to document all my memories in some words because it's actually the emotions, bonding, energy that we have during the fest that makes it special. I worked in Infrastructure department and had major work just before and during the fest. Yoga room, yoga room ki bingo chips, main gate ki chai in morning after allnighter  are some things that make me nostagic even now. Techfest gave me an oppurtunity to interact with so many people and make so many new friends. I still remember the feeling when we stood on the stage after the Technoholix event and everyone was happy, nostalgic, senti, excited at the same time. I still remember that feeling as I'm writing this!",
      image: 'assets/memories/Shibani-min.png'
    }, {
      id: 6,
      name: 'Apoorv Giriya',
      description: "Initially I became a member of FnB just for the 'food' part but it was later that I realised, it was just a cherry on the top of the cake. We were asked to make deals with different companies. At first, I was nervous as I was not very good at communication but as we interacted with more and more people I gained a lot of confidence and my verbal skills also improved. I remember all the treats we had after successful deals, the night outs with friends and all planning we had done a few days before the fest. I will never forget the final day, when the fest came to its conclusion, we were all celebrating, with smiles on our faces yet tears rolling down our eyes, lifting each other, recalling all the bittersweet memories we had made together, as I became a part of 'The Techfest Family'.",
      image: 'assets/memories/apoorv-min.png'
    }, {
      id: 7,
      name: 'Deepak Lakhera',
      description: 'Techfest for me, has been a sea of emotions, of friendships forged and memories made that I will cherish forever. We had a bonfire each night and even though we were exhausted beyond what was physically possible, no one slept! The head banging on the concert night and the high that it gives you is irreplaceable. Keeping to it’s tagline “#DreamOn!”, it truely is an otherworldy dreamy affair <3 It’s more of a journey than just a 3 day extravaganza, from the dreadful days of databasing to the time when you see the first pillar stand tall in the back longue, you have grown as a person.I had my coordie year as a part of the Ozone family, and was given the responsibility of wall painting/graffiti of the mainwall',
      image: 'assets/memories/deepak lakhera-min.png'
    }, {
      id: 8,
      name: 'Rajat Jain',
      description: '“Some moments are so full of life, you wish you could live them again & again!” I’m wearing my co-ordie tshirt(quarantine companion :)) as I write this & I can’t help but hark back to all those blissful memories TF 2020 gave me. Those SAC night-outs for debugging the app, exploiting the co-ordie batch to it’s fullest, the euphoria of being on the stage on the last day & the senti because it ended (the view of the dense excited crowd is still so fresh) , the imperishable bonds,  the photoshoots and the TAJ treat - TF has etched a special placed in my heart. To add to the adventure, we bonded with random groups and I feel that’s the beauty of this fest. The adrenaline kick of being a part of the BTS group of the mammoth fest that the outside-world sees is something I wouldn’t trade off for anything else, ever.',
      image: 'assets/memories/rajat-min.png'
    }, {
      id: 9,
      name: 'Ayush Dahale',
      description: "Talking about TechFest, the first that comes to my mind is the friends I made, the moments we cherished and the memories we made.I can still recall how impossible it seemed to conduct Esports events in TechFest, but we finally did it and everyone's hardwork finally paid off. All those sleepless nights, the fest madness and finally the feeling of accomplishment when every team member rushes the main stage and it finally ends, all of this will have a special place in my heart. And the most important thing of all is TechFest taught me is #DreamOn",
      image: 'assets/memories/ayush dahale-min.png'
    }, {
      id: 10,
      name: 'Sudarshan',
      description: "Working as a marketing coordie during Techfest 2k19 has been one of the best highlights of my stay at the insti till now! I started working in the summers itself, contacting the top executives for association and handling the sponsor deliverables during fest was my task. Undoubtedly, those sleepless nights will be worth cherishing when you get to be on that big stage on the final night! Sometimes I envy why did it end this soon. I would urge anyone who has the opportunity to be a part of Asia's largest  Sci-Tech fest! Don't miss it for the world!",
      image: 'assets/memories/sudarshan-min.png'
    }];
    /***/
  },

  /***/
  "./src/app/coordimemories/coordimemories.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/coordimemories/coordimemories.component.ts ***!
    \************************************************************/

  /*! exports provided: CoordimemoriesComponent */

  /***/
  function srcAppCoordimemoriesCoordimemoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoordimemoriesComponent", function () {
      return CoordimemoriesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _coordie_memories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./coordie-memories */
    "./src/app/coordimemories/coordie-memories.ts");
    /* harmony import */


    var _memories_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./memories-animations */
    "./src/app/coordimemories/memories-animations.ts");
    /* harmony import */


    var _services_communicator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/communicator.service */
    "./src/app/services/communicator.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CoordimemoriesComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@translate.done", function CoordimemoriesComponent_div_1_Template_div_animation_translate_done_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.statusFalse($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var m_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@translate", ctx_r0.getState(m_r1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", m_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r1.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", m_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var CoordimemoriesComponent = /*#__PURE__*/function () {
      function CoordimemoriesComponent(commService) {
        _classCallCheck(this, CoordimemoriesComponent);

        this.commService = commService;
        this.memories_list = _coordie_memories__WEBPACK_IMPORTED_MODULE_1__["memories"];
      }

      _createClass(CoordimemoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getState",
        value: function getState(m) {
          var status = this.commService.giveStatus();

          if (status && m.id % 2 != 0) {
            return "right";
          }

          if (status && m.id % 2 == 0) return "left";
          return "none";
        }
      }, {
        key: "statusFalse",
        value: function statusFalse(e) {
          if (e['totalTime'] > 10) {
            this.commService.statusFalse();
          }
        }
      }]);

      return CoordimemoriesComponent;
    }();

    CoordimemoriesComponent.ɵfac = function CoordimemoriesComponent_Factory(t) {
      return new (t || CoordimemoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_communicator_service__WEBPACK_IMPORTED_MODULE_3__["CommunicatorService"]));
    };

    CoordimemoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CoordimemoriesComponent,
      selectors: [["app-coordimemories"]],
      decls: 2,
      vars: 1,
      consts: [[1, "container"], ["class", "row mb-5 memory-row", 4, "ngFor", "ngForOf"], [1, "row", "mb-5", "memory-row"], [1, "col-12", "col-md-4", "text-center", "left-image"], [1, "coordi-image", 3, "src"], [1, "col-12", "col-md-8", "coordi-text"], [1, "description-text"], [1, "name"], [1, "col-12", "col-md-4", "text-center", "right-image"]],
      template: function CoordimemoriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CoordimemoriesComponent_div_1_Template, 10, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.memories_list);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".coordi-image[_ngcontent-%COMP%]{\n\twidth:100%;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\tmax-height:250px;\n\t-o-object-position: top;\n\t   object-position: top;\n}\n\n.coordi-text[_ngcontent-%COMP%]{\n\tborder-top:2px solid #fff;\n\tpadding-top:8px;\n}\n\n.description-text[_ngcontent-%COMP%]{\n\tcolor:#fff;\n\tfont-size: 16px;\n}\n\n.name[_ngcontent-%COMP%]{\n\tcolor:#fff;\n\tfont-size: 22px;\n}\n\n.memory-row[_ngcontent-%COMP%]:nth-child(even)   .left-image[_ngcontent-%COMP%]{\n\tdisplay: none;\n}\n\n.memory-row[_ngcontent-%COMP%]:nth-child(odd)   .name[_ngcontent-%COMP%]{\n\ttext-align: right;\n}\n\n.memory-row[_ngcontent-%COMP%]:nth-child(odd)   .name[_ngcontent-%COMP%]::before{\n\tcontent:\"-\";\n}\n\n.memory-row[_ngcontent-%COMP%]:nth-child(even)   .name[_ngcontent-%COMP%]::after{\n\tcontent:\"-\";\n}\n\n.memory-row[_ngcontent-%COMP%]:nth-child(even)   .description-text[_ngcontent-%COMP%]{\n\ttext-align: right;\n}\n\n.memory-row[_ngcontent-%COMP%]:nth-child(odd)   .right-image[_ngcontent-%COMP%]{\n\tdisplay: none;\n}\n\n@media screen and (max-width:675px){\n\t.memory-row[_ngcontent-%COMP%]:nth-child(even)   .left-image[_ngcontent-%COMP%]{\n\t\tdisplay: initial;\n\t}\n\n\t.memory-row[_ngcontent-%COMP%]:nth-child(odd)   .name[_ngcontent-%COMP%]{\n\t\ttext-align: center;\n\t}\n\n\t.memory-row[_ngcontent-%COMP%]:nth-child(even)   .description-text[_ngcontent-%COMP%]{\n\t\ttext-align: center;\n\t}\n\n\t.memory-row[_ngcontent-%COMP%]:nth-child(odd)   .name[_ngcontent-%COMP%]::before{\n\t\tcontent:\"\";\n\t}\n\n\t.memory-row[_ngcontent-%COMP%]:nth-child(even)   .name[_ngcontent-%COMP%]::after{\n\t\tcontent:\"\";\n\t}\n\n\t.memory-row[_ngcontent-%COMP%]:nth-child(even)   .right-image[_ngcontent-%COMP%]{\n\t\tdisplay: none;\n\t}\n\n\t.coordi-text[_ngcontent-%COMP%]{\n\t\ttext-align: center;\n\t}\n\n\t.coordi-text[_ngcontent-%COMP%]{\n\t\tmargin-top:20px;\n\t\tpadding-top: 12px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vcmRpbWVtb3JpZXMvY29vcmRpbWVtb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDVixvQkFBaUI7SUFBakIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQix1QkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUdBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0M7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxVQUFVO0NBQ1g7O0NBRUE7RUFDQyxVQUFVO0NBQ1g7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7O0NBRUE7RUFDQyxrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb29yZGltZW1vcmllcy9jb29yZGltZW1vcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvb3JkaS1pbWFnZXtcblx0d2lkdGg6MTAwJTtcblx0b2JqZWN0LWZpdDogY292ZXI7XG5cdG1heC1oZWlnaHQ6MjUwcHg7XG5cdG9iamVjdC1wb3NpdGlvbjogdG9wO1xufVxuXG4uY29vcmRpLXRleHR7XG5cdGJvcmRlci10b3A6MnB4IHNvbGlkICNmZmY7XG5cdHBhZGRpbmctdG9wOjhweDtcbn1cblxuLmRlc2NyaXB0aW9uLXRleHR7XG5cdGNvbG9yOiNmZmY7XG5cdGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm5hbWV7XG5cdGNvbG9yOiNmZmY7XG5cdGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLm1lbW9yeS1yb3c6bnRoLWNoaWxkKGV2ZW4pIC5sZWZ0LWltYWdle1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4ubWVtb3J5LXJvdzpudGgtY2hpbGQob2RkKSAubmFtZXtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tZW1vcnktcm93Om50aC1jaGlsZChvZGQpIC5uYW1lOjpiZWZvcmV7XG5cdGNvbnRlbnQ6XCItXCI7XG59XG5cbi5tZW1vcnktcm93Om50aC1jaGlsZChldmVuKSAubmFtZTo6YWZ0ZXJ7XG5cdGNvbnRlbnQ6XCItXCI7XG59XG5cblxuLm1lbW9yeS1yb3c6bnRoLWNoaWxkKGV2ZW4pIC5kZXNjcmlwdGlvbi10ZXh0e1xuXHR0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1lbW9yeS1yb3c6bnRoLWNoaWxkKG9kZCkgLnJpZ2h0LWltYWdle1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY3NXB4KXtcblx0Lm1lbW9yeS1yb3c6bnRoLWNoaWxkKGV2ZW4pIC5sZWZ0LWltYWdle1xuXHRcdGRpc3BsYXk6IGluaXRpYWw7XG5cdH1cblxuXHQubWVtb3J5LXJvdzpudGgtY2hpbGQob2RkKSAubmFtZXtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHQubWVtb3J5LXJvdzpudGgtY2hpbGQoZXZlbikgLmRlc2NyaXB0aW9uLXRleHR7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0Lm1lbW9yeS1yb3c6bnRoLWNoaWxkKG9kZCkgLm5hbWU6OmJlZm9yZXtcblx0XHRjb250ZW50OlwiXCI7XG5cdH1cblxuXHQubWVtb3J5LXJvdzpudGgtY2hpbGQoZXZlbikgLm5hbWU6OmFmdGVye1xuXHRcdGNvbnRlbnQ6XCJcIjtcblx0fVxuXG5cdC5tZW1vcnktcm93Om50aC1jaGlsZChldmVuKSAucmlnaHQtaW1hZ2V7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG5cdC5jb29yZGktdGV4dHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHQuY29vcmRpLXRleHR7XG5cdFx0bWFyZ2luLXRvcDoyMHB4O1xuXHRcdHBhZGRpbmctdG9wOiAxMnB4O1xuXHR9XG59Il19 */"],
      data: {
        animation: [_memories_animations__WEBPACK_IMPORTED_MODULE_2__["translate"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoordimemoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-coordimemories',
          templateUrl: './coordimemories.component.html',
          styleUrls: ['./coordimemories.component.css'],
          animations: [_memories_animations__WEBPACK_IMPORTED_MODULE_2__["translate"]]
        }]
      }], function () {
        return [{
          type: _services_communicator_service__WEBPACK_IMPORTED_MODULE_3__["CommunicatorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/coordimemories/memories-animations.ts":
  /*!*******************************************************!*\
    !*** ./src/app/coordimemories/memories-animations.ts ***!
    \*******************************************************/

  /*! exports provided: translate */

  /***/
  function srcAppCoordimemoriesMemoriesAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translate", function () {
      return translate;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var translate = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('translate', [//left to right
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s 0s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateX(-600px)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.2",
      transform: "translateX(-480px)",
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      transform: "translateX(-300px)",
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateX(0)",
      offset: 1.0
    })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s 0s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateX(600px)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.2",
      transform: "translateX(480px)",
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      transform: "translateX(300px)",
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateX(0)",
      offset: 1.0
    })])))]);
    /***/
  },

  /***/
  "./src/app/currentscreen.service.ts":
  /*!******************************************!*\
    !*** ./src/app/currentscreen.service.ts ***!
    \******************************************/

  /*! exports provided: CurrentscreenService */

  /***/
  function srcAppCurrentscreenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentscreenService", function () {
      return CurrentscreenService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CurrentscreenService = /*#__PURE__*/function () {
      function CurrentscreenService() {
        _classCallCheck(this, CurrentscreenService);

        this.currentscreen = 'home';
      }

      _createClass(CurrentscreenService, [{
        key: "setCurrentScreen",
        value: function setCurrentScreen(screen) {
          this.currentscreen = screen;
        }
      }, {
        key: "getCurrentScreen",
        value: function getCurrentScreen() {
          return this.currentscreen;
        }
      }]);

      return CurrentscreenService;
    }();

    CurrentscreenService.ɵfac = function CurrentscreenService_Factory(t) {
      return new (t || CurrentscreenService)();
    };

    CurrentscreenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CurrentscreenService,
      factory: CurrentscreenService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentscreenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/departmentdetail/department-animations.ts":
  /*!***********************************************************!*\
    !*** ./src/app/departmentdetail/department-animations.ts ***!
    \***********************************************************/

  /*! exports provided: fade */

  /***/
  function srcAppDepartmentdetailDepartmentAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fade", function () {
      return fade;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>fade', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.25s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.7",
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      offset: 1.0
    })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.25s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateY(600px)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.2",
      transform: "translateY(400px)",
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      transform: "translateY(300px)",
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.8",
      transform: "translateY(150px)",
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateY(0px)",
      offset: 1.0
    })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>showPrevious', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.25s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateY(-600px)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.2",
      transform: "translateY(-400px)",
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      transform: "translateY(-300px)",
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.8",
      transform: "translateY(-150px)",
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateY(0px)",
      offset: 1.0
    })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>fadeReverse', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.25s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.2",
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      offset: 1.0
    })])))]);
    /***/
  },

  /***/
  "./src/app/departmentdetail/departmentdetail.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/departmentdetail/departmentdetail.component.ts ***!
    \****************************************************************/

  /*! exports provided: DepartmentdetailComponent */

  /***/
  function srcAppDepartmentdetailDepartmentdetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepartmentdetailComponent", function () {
      return DepartmentdetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./events */
    "./src/app/departmentdetail/events.ts");
    /* harmony import */


    var _app_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app-animations */
    "./src/app/app-animations.ts");
    /* harmony import */


    var _department_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./department-animations */
    "./src/app/departmentdetail/department-animations.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DepartmentdetailComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@fade.done", function DepartmentdetailComponent_div_0_div_1_Template_div_animation_fade_done_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.callbackHandler();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DepartmentdetailComponent_div_0_div_1_Template_img_mouseenter_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.showOtherImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function DepartmentdetailComponent_div_0_div_1_Template_img_mouseleave_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.showOtherImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@fade.done", function DepartmentdetailComponent_div_0_div_1_Template_div_animation_fade_done_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.callbackHandler();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_div_0_div_1_Template_img_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DepartmentdetailComponent_div_0_div_1_Template_div_mouseenter_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.toggleTrigger();
        })("mouseleave", function DepartmentdetailComponent_div_0_div_1_Template_div_mouseleave_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.toggleTrigger();
        })("click", function DepartmentdetailComponent_div_0_div_1_Template_div_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.redirectTo("managerdetail/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@tR.done", function DepartmentdetailComponent_div_0_div_1_Template_a_animation_tR_done_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.log($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Your manager peeps");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_div_0_div_1_Template_img_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.changeEvent("showPrevious");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_div_0_div_1_Template_p_click_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.showActive($event, 0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_div_0_div_1_Template_p_click_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.showActive($event, 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_div_0_div_1_Template_p_click_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.showActive($event, 2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_div_0_div_1_Template_p_click_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.showActive($event, 3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_div_0_div_1_Template_p_click_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.showActive($event, 4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_div_0_div_1_Template_p_click_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.showActive($event, 5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_div_0_div_1_Template_img_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.changeEvent("show");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", ctx_r4.trigger);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx_r4.multiple);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/departments/", ctx_r4.current_event.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", !ctx_r4.multiple);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/departments/", ctx_r4.current_event.image2, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", ctx_r4.trigger);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.current_event.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.current_event.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@tR", ctx_r4.stateRegister);
      }
    }

    function DepartmentdetailComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentdetailComponent_div_0_div_1_Template, 32, 11, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.mobile);
      }
    }

    function DepartmentdetailComponent_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@fade.done", function DepartmentdetailComponent_div_1_div_1_Template_div_animation_fade_done_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r24.callbackHandler();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DepartmentdetailComponent_div_1_div_1_Template_img_mouseenter_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.showOtherImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function DepartmentdetailComponent_div_1_div_1_Template_img_mouseleave_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r27.showOtherImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@fade.done", function DepartmentdetailComponent_div_1_div_1_Template_div_animation_fade_done_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r28.callbackHandler();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_div_1_div_1_Template_img_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DepartmentdetailComponent_div_1_div_1_Template_div_mouseenter_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r30.toggleTrigger();
        })("mouseleave", function DepartmentdetailComponent_div_1_div_1_Template_div_mouseleave_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r31.toggleTrigger();
        })("click", function DepartmentdetailComponent_div_1_div_1_Template_div_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r32.redirectTo("managerdetail/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@tR.done", function DepartmentdetailComponent_div_1_div_1_Template_a_animation_tR_done_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r33.log($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Your manager peeps");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", ctx_r23.trigger);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx_r23.multiple);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/departments/", ctx_r23.currentpage.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", !ctx_r23.multiple);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/departments/", ctx_r23.currentpage.image2, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", ctx_r23.trigger);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.currentpage.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r23.currentpage.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@tR", ctx_r23.stateRegister);
      }
    }

    function DepartmentdetailComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentdetailComponent_div_1_div_1_Template, 21, 11, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.mobile);
      }
    }

    function DepartmentdetailComponent_div_2_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DepartmentdetailComponent_div_2_div_1_div_11_Template_div_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r37.toggleTrigger();
        })("mouseleave", function DepartmentdetailComponent_div_2_div_1_div_11_Template_div_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r39.toggleTrigger();
        })("click", function DepartmentdetailComponent_div_2_div_1_div_11_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r40.redirectTo("managerdetail/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@tR.done", function DepartmentdetailComponent_div_2_div_1_div_11_Template_a_animation_tR_done_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r41.log($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Your manager peeps");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@tR", ctx_r36.stateRegister);
      }
    }

    function DepartmentdetailComponent_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@fade.done", function DepartmentdetailComponent_div_2_div_1_Template_div_animation_fade_done_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r42.callbackHandler();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DepartmentdetailComponent_div_2_div_1_div_11_Template, 6, 1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var event_r35 = ctx.$implicit;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/departments/", event_r35.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", ctx_r34.trigger);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r35.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", event_r35.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", event_r35.name == "competitions");
      }
    }

    function DepartmentdetailComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentdetailComponent_div_2_div_1_Template, 12, 5, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.events);
      }
    }

    function DepartmentdetailComponent_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@fade.done", function DepartmentdetailComponent_div_3_div_1_Template_div_animation_fade_done_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r46.callbackHandler();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DepartmentdetailComponent_div_3_div_1_Template_div_mouseenter_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r48.toggleTrigger();
        })("mouseleave", function DepartmentdetailComponent_div_3_div_1_Template_div_mouseleave_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r49.toggleTrigger();
        })("click", function DepartmentdetailComponent_div_3_div_1_Template_div_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r50.redirectTo("managerdetail/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@tR.done", function DepartmentdetailComponent_div_3_div_1_Template_a_animation_tR_done_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r51.log($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your manager peeps");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var event_r45 = ctx.$implicit;

        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/departments/", event_r45.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", ctx_r44.trigger);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r45.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", event_r45.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@tR", ctx_r44.stateRegister);
      }
    }

    function DepartmentdetailComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentdetailComponent_div_3_div_1_Template, 17, 5, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.events);
      }
    }

    var DepartmentdetailComponent = /*#__PURE__*/function () {
      function DepartmentdetailComponent(route, router) {
        _classCallCheck(this, DepartmentdetailComponent);

        this.route = route;
        this.router = router;
        this.events = _events__WEBPACK_IMPORTED_MODULE_1__["events"];
        this.current_event = _events__WEBPACK_IMPORTED_MODULE_1__["events"][0];
        this.current_index = 0;
        this.stateRegister = 'show';
        this.multiple = false;
        this.mobile = false;
        this.eventspage = false;
      }

      _createClass(DepartmentdetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.params.subscribe(function (params) {
            if (params['dep'] == 'events') {
              _this2.events = _events__WEBPACK_IMPORTED_MODULE_1__["events"];
              _this2.eventspage = true;
            }

            if (params['dep'] == 'creatives') {
              _this2.currentpage = _events__WEBPACK_IMPORTED_MODULE_1__["creatives"];
            }

            if (params['dep'] == 'marketing') {
              _this2.currentpage = _events__WEBPACK_IMPORTED_MODULE_1__["marketing"];
            }

            if (params['dep'] == 'hospitality') {
              _this2.currentpage = _events__WEBPACK_IMPORTED_MODULE_1__["hospitality"];
            }

            if (params['dep'] == 'fnb') {
              _this2.currentpage = _events__WEBPACK_IMPORTED_MODULE_1__["fnb"];
            }

            if (params['dep'] == 'infrastructure') {
              _this2.currentpage = _events__WEBPACK_IMPORTED_MODULE_1__["infrastructure"];
            }

            if (params['dep'] == 'mediaandpublicity') {
              _this2.currentpage = _events__WEBPACK_IMPORTED_MODULE_1__["mediaandpublicity"];
            }

            if (params['dep'] == 'web') {
              _this2.currentpage = _events__WEBPACK_IMPORTED_MODULE_1__["web"];
            }

            if (params['dep'] != 'events') _this2.events = [_this2.currentpage];
          });
          setInterval(function () {
            _this2.intervalFunction();
          });
        }
      }, {
        key: "showActive",
        value: function showActive(event, index) {
          var items = document.querySelectorAll('.indicators p');
          items.forEach(function (item) {
            item.classList.remove('active');
          });
          event.target.classList.add('active');
          this.trigger = 'fade';
          this.current_index = index;
          this.animation_origin = 'circle';
        }
      }, {
        key: "showNext",
        value: function showNext() {
          this.trigger = "showPrevious";
          this.current_event = this.events[this.current_index];
        }
      }, {
        key: "toggleTrigger",
        value: function toggleTrigger() {
          this.stateRegister == 'hide' ? this.stateRegister = 'show' : this.stateRegister = 'hide';
        }
      }, {
        key: "log",
        value: function log(e) {
          console.log(e);
        }
      }, {
        key: "showOtherImage",
        value: function showOtherImage() {
          if (this.mobile) return;
          this.multiple ? this.multiple = false : this.multiple = true;
        }
      }, {
        key: "changeEvent",
        value: function changeEvent(target) {
          this.trigger = "fade";
          this.animation_origin = target;

          if (target == 'show') {
            //show==showNext
            this.current_index = (this.current_index + 1) % 6;
          }

          if (target == 'showPrevious') {
            //show==showNext
            this.current_index = (this.current_index - 1 + 6) % 6;
          }

          this.activeDotHandler();
        }
      }, {
        key: "callbackHandler",
        value: function callbackHandler() {
          if (this.animation_origin == 'show') {
            this.trigger = "show";
          } else if (this.animation_origin == 'showPrevious') this.trigger = "showPrevious";else if (this.animation_origin == 'circle') this.trigger = "fadeReverse";

          this.current_event = this.events[this.current_index];
        }
      }, {
        key: "activeDotHandler",
        value: function activeDotHandler() {
          var items = document.querySelectorAll('.indicators p.circle');
          items.forEach(function (item) {
            item.classList.remove('active');
          });
          console.log(items);
          items[this.current_index].classList.add('active');
        }
      }, {
        key: "redirectTo",
        value: function redirectTo(path) {
          if (path.includes('managerdetail')) {
            if (!window.location.href.includes('events')) this.router.navigate([path + this.currentpage.managerlink]);else this.router.navigate([path + 'events']);
          } else this.router.navigate([path]);
        }
      }, {
        key: "intervalFunction",
        value: function intervalFunction() {
          if (window.innerWidth < 675) {
            this.mobile = true;
          } else {
            this.mobile = false;
          }
        }
      }]);

      return DepartmentdetailComponent;
    }();

    DepartmentdetailComponent.ɵfac = function DepartmentdetailComponent_Factory(t) {
      return new (t || DepartmentdetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    DepartmentdetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DepartmentdetailComponent,
      selectors: [["app-departmentdetail"]],
      decls: 4,
      vars: 4,
      consts: [["class", "container-fluid", 4, "ngIf"], ["class", "mobile", 4, "ngIf"], [1, "container-fluid"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12", "col-md-5"], [1, "single-pics", 2, "width", "100%", "object-fit", "cover", "margin-top", "-5%", 3, "src", "mouseenter"], [1, "multiple-pics", 2, "width", "100%", "object-fit", "cover", "margin-top", "-8%", "transform", "scale(1.1)", 3, "src", "mouseleave"], [1, "col-12", "col-md-6"], [1, "text"], [1, "row", 2, "border-bottom", "2px solid white", "padding-bottom", "0", "margin-bottom", "16px"], [1, "col-10"], [1, "head", "text-uppercase", 2, "margin-bottom", "0"], [1, "col-2", "text-right"], ["src", "/assets/cross.png", 1, "cross", 3, "click"], [1, "description"], ["id", "events-blur-div", 1, "blur-div", 2, "text-align", "right", 3, "mouseenter", "mouseleave", "click"], [1, "blur"], ["id", "register", 1, "nav-link", 2, "min-height", "100%", "width", "100%", "position", "absolute"], [1, "blur-text"], [1, "text-uppercase", "text-white", "button-text"], [1, "col-md-1", "d-none", "d-md-block", "indicators"], ["src", "assets/up.png", 1, "navigatearrows", 3, "click"], [1, "circle", "active", 3, "click"], [1, "circle", 3, "click"], ["src", "assets/down.png", 1, "navigatearrows", 3, "click"], ["class", "row justify-content-center", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-7"], [1, "blur-div", 2, "text-align", "right", 3, "mouseenter", "mouseleave", "click"], [1, "mobile"], ["class", "row mb-5", 4, "ngFor", "ngForOf"], [1, "row", "mb-5"], [1, "col-12", "col-md-4"], [1, "single-pics", 2, "width", "100%", "object-fit", "cover", "margin-top", "10%", "transform", "scale(1.2)", 3, "src"], [1, "col-12", "text-center"], ["class", "blur-div", "style", "text-align: right", 3, "mouseenter", "mouseleave", "click", 4, "ngIf"]],
      template: function DepartmentdetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DepartmentdetailComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentdetailComponent_div_1_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentdetailComponent_div_2_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DepartmentdetailComponent_div_3_Template, 2, 1, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eventspage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.eventspage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile && ctx.eventspage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile && !ctx.eventspage);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".head[_ngcontent-%COMP%]{\n\tcolor:#ffffff;\n\tfont-size: 56px;\n\tfont-weight: bold;\n\t\n}\n\n.head[_ngcontent-%COMP%]:before{\n  content: '\\2807';\n  font-size: 56px;\n}\n\n.description[_ngcontent-%COMP%]{\n\tcolor:#ffffff;\n\tfont-size:25px; \n}\n\n.circle[_ngcontent-%COMP%]{\n\tbackground-color:rgba(128,128,128,1); \n\tborder-radius: 100%;\n\theight:15px;\n\twidth:15px;\n\tmargin-left:12.5px;\n}\n\n.circle.active[_ngcontent-%COMP%]{\n\tbackground-color:#fff;\n\theight:20px;\n\twidth:20px;\n\tmargin-left:10px;\n}\n\n.indicators[_ngcontent-%COMP%]{\n\tpadding-top: 7.5%;\n\tpadding-left:4%;\n}\n\n.indicators[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .indicators[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], .cross[_ngcontent-%COMP%]{\n\tcursor:pointer;\n}\n\n.blur-div[_ngcontent-%COMP%]{\n\tposition:relative;\n\tcursor: pointer;\n}\n\n.blur[_ngcontent-%COMP%]{\n\twidth:45%;\n\ttransform: translateX(-5%);\n\tposition:absolute;\n\t\n\tleft:62.5%;\n\tmin-height:120%;\n\tbottom:-10%;\n\tbackground-color: #fff;\n\t-webkit-filter:blur(1px);\n\t        filter:blur(1px);\n\topacity:0.2;\n\tborder-radius: 25px;\n}\n\n.button-text[_ngcontent-%COMP%]{\n\tfont-size:24px;\n}\n\n.cross[_ngcontent-%COMP%]{\n\theight:30px;\n\twidth:30px;\n\ttext-align: right;\n\tmargin-top:35%;\n\ttransform: rotate(0);\n\ttransition: 0.5s;\n}\n\n.cross[_ngcontent-%COMP%]:hover{\n\ttransform: rotate(90deg);\n\ttransition: 0.5s;\n}\n\n.multiple-pics[_ngcontent-%COMP%], .single-pics[_ngcontent-%COMP%]{\n\t-webkit-animation: fader 0.2s ease-in-out;\n\t        animation: fader 0.2s ease-in-out;\n}\n\n@-webkit-keyframes fader{\n\tfrom {opacity:0;}\n\tto {opacity:1;}\n}\n\n@keyframes fader{\n\tfrom {opacity:0;}\n\tto {opacity:1;}\n}\n\n@media screen and (max-width:675px){\n\t.head[_ngcontent-%COMP%], .head[_ngcontent-%COMP%]:before{\n\t\tmargin-top: 16px;\n\t\tfont-size: 32px;\n\t}\n\n\t.cross[_ngcontent-%COMP%]{\n\t\theight:20px;\n\t\twidth:20px;\n\t\ttext-align: right;\n\t\tmargin-top:32px;\n\t\ttransform: rotate(0);\n\t\ttransition: 0.5s;\n\t}\n\n\t.description[_ngcontent-%COMP%]{\n\t\tfont-size:16px; \n\t\ttext-align: center;\n\t}\n\n\t.blur-text[_ngcontent-%COMP%]{\n\t\ttext-align: center;\n\t}\n\n\t.blur[_ngcontent-%COMP%]{\n\t\twidth:75%;\n\t\ttransform: translateX(-66.5%);\n\t\tposition:absolute;\n\t\tmin-height:120%;\n\t\tbottom:-10%;\n\t\tbackground-color: #fff;\n\t\t-webkit-filter:blur(1px);\n\t\t        filter:blur(1px);\n\t\topacity:0.2;\n\t\tborder-radius: 25px;\n\t}\n\n\t.mobile[_ngcontent-%COMP%]{\n\t\tmargin-bottom: 100px;\n\t}\n\n\t.button-text[_ngcontent-%COMP%]{\n\t\tfont-size:18px;\n\t}\n}\n\n\n\n.navigatearrows[_ngcontent-%COMP%]{\n\theight:40px;\n\twidth:40px;\n}\n\n#events-blur-div[_ngcontent-%COMP%]   .blur[_ngcontent-%COMP%]{\n\twidth:50%;\n\ttransform: translateX(-17%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwYXJ0bWVudGRldGFpbC9kZXBhcnRtZW50ZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixtQ0FBbUM7QUFDcEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxVQUFVO0NBQ1Ysa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCwwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCLDBCQUEwQjtDQUMxQixVQUFVO0NBQ1YsZUFBZTtDQUNmLFdBQVc7Q0FDWCxzQkFBc0I7Q0FDdEIsd0JBQWdCO1NBQWhCLGdCQUFnQjtDQUNoQixXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsV0FBVztDQUNYLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsY0FBYztDQUNkLG9CQUFvQjtDQUNwQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MseUNBQWlDO1NBQWpDLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLE1BQU0sU0FBUyxDQUFDO0NBQ2hCLElBQUksU0FBUyxDQUFDO0FBQ2Y7O0FBSEE7Q0FDQyxNQUFNLFNBQVMsQ0FBQztDQUNoQixJQUFJLFNBQVMsQ0FBQztBQUNmOztBQUdBO0NBQ0M7RUFDQyxnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsY0FBYztFQUNkLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHdCQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLG9CQUFvQjtDQUNyQjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjtBQUNEOztBQUdBLHlCQUF5Qjs7QUFDekI7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtBQUNYOztBQUVBO0NBQ0MsU0FBUztDQUNULDJCQUEyQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2RlcGFydG1lbnRkZXRhaWwvZGVwYXJ0bWVudGRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWR7XG5cdGNvbG9yOiNmZmZmZmY7XG5cdGZvbnQtc2l6ZTogNTZweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdC8qYm9yZGVyLWJvdHRvbToycHggc29saWQgI2ZmZmZmZjsqL1xufVxuXG4uaGVhZDpiZWZvcmV7XG4gIGNvbnRlbnQ6ICdcXDI4MDcnO1xuICBmb250LXNpemU6IDU2cHg7XG59XG5cbi5kZXNjcmlwdGlvbntcblx0Y29sb3I6I2ZmZmZmZjtcblx0Zm9udC1zaXplOjI1cHg7IFxufVxuXG4uY2lyY2xle1xuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTI4LDEyOCwxMjgsMSk7IFxuXHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRoZWlnaHQ6MTVweDtcblx0d2lkdGg6MTVweDtcblx0bWFyZ2luLWxlZnQ6MTIuNXB4O1xufVxuXG4uY2lyY2xlLmFjdGl2ZXtcblx0YmFja2dyb3VuZC1jb2xvcjojZmZmO1xuXHRoZWlnaHQ6MjBweDtcblx0d2lkdGg6MjBweDtcblx0bWFyZ2luLWxlZnQ6MTBweDtcbn1cblxuLmluZGljYXRvcnN7XG5cdHBhZGRpbmctdG9wOiA3LjUlO1xuXHRwYWRkaW5nLWxlZnQ6NCU7XG59XG5cbi5pbmRpY2F0b3JzIGltZywuaW5kaWNhdG9ycyAuY2lyY2xlLCAuY3Jvc3N7XG5cdGN1cnNvcjpwb2ludGVyO1xufVxuXG4uYmx1ci1kaXZ7XG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ibHVye1xuXHR3aWR0aDo0NSU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0Lypib3JkZXI6MnB4IHNvbGlkIGdyZWVuOyovXG5cdGxlZnQ6NjIuNSU7XG5cdG1pbi1oZWlnaHQ6MTIwJTtcblx0Ym90dG9tOi0xMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGZpbHRlcjpibHVyKDFweCk7XG5cdG9wYWNpdHk6MC4yO1xuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uYnV0dG9uLXRleHR7XG5cdGZvbnQtc2l6ZToyNHB4O1xufVxuXG4uY3Jvc3N7XG5cdGhlaWdodDozMHB4O1xuXHR3aWR0aDozMHB4O1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0bWFyZ2luLXRvcDozNSU7XG5cdHRyYW5zZm9ybTogcm90YXRlKDApO1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uY3Jvc3M6aG92ZXJ7XG5cdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcblx0dHJhbnNpdGlvbjogMC41cztcbn1cblxuLm11bHRpcGxlLXBpY3MsLnNpbmdsZS1waWNze1xuXHRhbmltYXRpb246IGZhZGVyIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZXJ7XG5cdGZyb20ge29wYWNpdHk6MDt9XG5cdHRvIHtvcGFjaXR5OjE7fVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Njc1cHgpe1xuXHQuaGVhZCwuaGVhZDpiZWZvcmV7XG5cdFx0bWFyZ2luLXRvcDogMTZweDtcblx0XHRmb250LXNpemU6IDMycHg7XG5cdH1cblxuXHQuY3Jvc3N7XG5cdFx0aGVpZ2h0OjIwcHg7XG5cdFx0d2lkdGg6MjBweDtcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcblx0XHRtYXJnaW4tdG9wOjMycHg7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMCk7XG5cdFx0dHJhbnNpdGlvbjogMC41cztcblx0fVxuXG5cdC5kZXNjcmlwdGlvbntcblx0XHRmb250LXNpemU6MTZweDsgXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0LmJsdXItdGV4dHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHQuYmx1cntcblx0XHR3aWR0aDo3NSU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02Ni41JSk7XG5cdFx0cG9zaXRpb246YWJzb2x1dGU7XG5cdFx0bWluLWhlaWdodDoxMjAlO1xuXHRcdGJvdHRvbTotMTAlO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0ZmlsdGVyOmJsdXIoMXB4KTtcblx0XHRvcGFjaXR5OjAuMjtcblx0XHRib3JkZXItcmFkaXVzOiAyNXB4O1xuXHR9XG5cblx0Lm1vYmlsZXtcblx0XHRtYXJnaW4tYm90dG9tOiAxMDBweDtcblx0fVxuXG5cdC5idXR0b24tdGV4dHtcblx0XHRmb250LXNpemU6MThweDtcblx0fVxufVxuXG5cbi8qKioqKkZpbmFsIGNoYW5nZXMqKioqKiovXG4ubmF2aWdhdGVhcnJvd3N7XG5cdGhlaWdodDo0MHB4O1xuXHR3aWR0aDo0MHB4O1xufVxuXG4jZXZlbnRzLWJsdXItZGl2IC5ibHVye1xuXHR3aWR0aDo1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTclKTtcbn1cbiJdfQ== */"],
      data: {
        animation: [_app_animations__WEBPACK_IMPORTED_MODULE_2__["translateRight"], _department_animations__WEBPACK_IMPORTED_MODULE_3__["fade"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentdetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-departmentdetail',
          templateUrl: './departmentdetail.component.html',
          styleUrls: ['./departmentdetail.component.css'],
          animations: [_app_animations__WEBPACK_IMPORTED_MODULE_2__["translateRight"], _department_animations__WEBPACK_IMPORTED_MODULE_3__["fade"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/departmentdetail/events.ts":
  /*!********************************************!*\
    !*** ./src/app/departmentdetail/events.ts ***!
    \********************************************/

  /*! exports provided: events, creatives, web, fnb, hospitality, marketing, infrastructure, mediaandpublicity */

  /***/
  function srcAppDepartmentdetailEventsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "events", function () {
      return events;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "creatives", function () {
      return creatives;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "web", function () {
      return web;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fnb", function () {
      return fnb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hospitality", function () {
      return hospitality;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "marketing", function () {
      return marketing;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "infrastructure", function () {
      return infrastructure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mediaandpublicity", function () {
      return mediaandpublicity;
    });

    var events = [{
      managerlink: '',
      image: 'technoholix-1-min.png',
      image2: 'techx-2-min.png',
      name: 'TECHNOHOLIX',
      description: 'After a day full of competitions and workshops, it is time to let loose with Technoholix. As a Technoholix coordie, you will plan night shows as well as the grand gymkhana concert night which will remain in the memories of 20k+ people from all over the country. Not only this, but you will also interact with a lot of international artists!'
    }, {
      managerlink: '',
      image: 'ozone-1-min.png',
      image2: 'ozone-2-min.png',
      name: 'ozone',
      description: 'Ever thought of which department serves the purpose of recreation in a Technical festival, well, it’s Ozone or On the spot Zone. Ozone reveals the fun side of Techfest: A place to hang around for the festive excitement and adrenaline rush. Get a chance to experience and manage the thrill and excitement from a vicinity.'
    }, {
      managerlink: '',
      image: 'robowars-1-min.png',
      image2: 'robowars-2-min.png',
      name: 'robowars',
      description: 'Techfest is an emotion and the best emotion of this fest is the International Robowars - one of the biggest crowd pullers in the fest. What does Robowars have for you? By joining us, you will learn strategy making, planning events from scratch, management and the most important thing - International Interaction.'
    }, {
      managerlink: '',
      image: 'lecture 1-min.png',
      image2: 'lecture 2-min.png',
      name: 'lectures',
      description: 'Do you wish to meet, interact, and cater to some of the most noteworthy personalities from around the world? Well, this is your chance! Be it celebrities, sportspersons, politicians, scientists, inventors, or motivational personalities, we got the best in every field and you are going to play a key role in bringing them to our fest.'
    }, {
      managerlink: '',
      image: 'exhi-1-min.png',
      image2: 'exhi-2-min.png',
      name: 'exhibitions',
      description: 'Ever wished to interact with top innovators from around the globe and see their inventions up close? Then Exhibitions is the right place for you. We bring the best technological innovations to Techfest. Have a dream that you want to see in Techfest? Join our prestigious team and help us bring them to Techfest! Ps : Cars ka enthu hai toh this is the department for you!'
    }, {
      managerlink: 'events',
      image: 'compi-1-min.png',
      image2: 'compi-2-min.png',
      name: 'competitions',
      description: 'Competitions are the heart of Techfest where thousands of participants from all around the globe come to showcase their talent. If you are looking for an opportunity to ideate, deal with professionals, lead a group of organizers and witness other fun and challenging tasks, then Competitions is the right department for you.'
    }];
    var creatives = {
      managerlink: 'creatives',
      image: 'creatives-1-min copy.png',
      image2: 'creatives-2-min copy.png',
      name: 'creatives',
      description: 'Design is so simple that\'s why it is so complicated. Shocked? Design is the method of putting form and content together. Design can be art. Design can be aesthetics. Want to get the thrill of seeing your designs on amazing artworks, too good to be true website interfaces, and mindblowing hoodies? Join the CREATIVES team to learn to do all of this and soo much more. No prior knowledge needed. Come be a part of the evergrowing Techfest family!'
    };
    var web = {
      managerlink: 'web',
      image: 'web-1-min.png',
      image2: 'web-2-min.png',
      name: 'web',
      description: 'Ever wondered what connects Techfest to the whole world? You guessed it right. The Web Department! We strive to create visually appealing websites and applications that convey the core idea behind the fest to everyone out there. As a Web Coordinator you\'ll work on the main website of Techfest and the Techfest App, collaborate with the Creatives Department and learn a lot along the way with loads of fun!'
    };
    var fnb = {
      managerlink: 'fnb',
      image: 'fnb-1-min.png',
      image2: 'fnb-2-min.png',
      name: 'food & beverages',
      description: 'Food... Food Everywhere. FnB deals with the Food and Beverages requirements of the whole fest including artists, Celebrities and of course, us. As coordinators, you will be handling the Food Court and will be responsible for bringing food in the fest. So come, join FnB, explore the Foodie within you.'
    };
    var hospitality = {
      managerlink: 'hospitality',
      image: 'hospitality-1-min.png',
      image2: 'hospitality-2-min.png',
      name: 'hospitality',
      description: 'Love to interact with people? Ever wanted to make deals with companies and attend corporate meets? This is the perfect place for you. Hospitality looks after the accommodation of 5k+ visitors and ensures they have a wonderful experience. Come join us and be a part of the Techfest Hospi family!'
    };
    var marketing = {
      managerlink: 'marketing',
      image: 'marketing-1-min.png',
      image2: 'marketing-2-min.png',
      name: 'marketing',
      description: 'Behind every event is a sponsor. And behind every sponsor is someone from Marketing! As a Marketing Coordinator, you will be responsible for acquiring the budget for Techfest. A strong network, exposure to corporate meets, personal development, and infi kinds from companies are just a few of the many things we have to offer!'
    };
    var infrastructure = {
      managerlink: 'infrastructure',
      image: 'infra1.png',
      image2: 'infra 2-min.png',
      name: 'infrastructure',
      description: 'Infrastructure, the backbone of techfest, is the fundamental department which ensures a successful fest. It is our responsibility to optimize the use of the fest’s resources and budget, work on advertising and ensure that our dreams become a reality. Want to explore the core of techfest? This is the department for you. Ps : Bikes, walkies and hoodies are waiting for you.'
    };
    var mediaandpublicity = {
      managerlink: 'mediaandpublicity',
      image: 'media-1-min.png',
      image2: 'media-2-min.png',
      name: 'media & publicity',
      description: 'The Media and Publicity Department looks after the coverage of the fest through all offline and online channels. You will interact with journalists, celebrities, youtubers and influencers from around the world and crack deals with various media houses. Moreover, you will be responsible for managing Techfest’s massive media campaign, formulating publicity strategies and executing lucrative deals.'
    };
    /***/
  },

  /***/
  "./src/app/departments/departments.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/departments/departments.component.ts ***!
    \******************************************************/

  /*! exports provided: DepartmentsComponent */

  /***/
  function srcAppDepartmentsDepartmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function () {
      return DepartmentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @glidejs/glide */
    "./node_modules/@glidejs/glide/dist/glide.esm.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DepartmentsComponent = /*#__PURE__*/function () {
      function DepartmentsComponent(route, router) {
        _classCallCheck(this, DepartmentsComponent);

        this.route = route;
        this.router = router;
        this.mobile = false;
      }

      _createClass(DepartmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var config = {
            perView: 3,
            gap: 64,
            bound: true,
            breakpoints: {
              675: {
                perView: 1
              }
            }
          };
          new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__["default"]('.glide', config).mount();
          setInterval(function () {
            return _this3.intervalFunction();
          });
        }
      }, {
        key: "zoomIn",
        value: function zoomIn(event) {
          var element_description = event['path'][2].children[2];
          var element_num = event['path'][2].children[1];
          element_description.classList.add('text-name-hover');
          element_num.classList.add('border-white');
        }
      }, {
        key: "zoomOut",
        value: function zoomOut(event) {
          var element_description = event['path'][2].children[2];
          var element_num = event['path'][2].children[1];
          element_description.classList.remove('text-name-hover');
          element_num.classList.remove('border-white');
        }
      }, {
        key: "redirect",
        value: function redirect(link) {
          this.router.navigate([link]);
        }
      }, {
        key: "intervalFunction",
        value: function intervalFunction() {
          if (window.innerWidth < 675) this.mobile = true;else this.mobile = false;
        }
      }]);

      return DepartmentsComponent;
    }();

    DepartmentsComponent.ɵfac = function DepartmentsComponent_Factory(t) {
      return new (t || DepartmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    DepartmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DepartmentsComponent,
      selectors: [["app-departments"]],
      decls: 74,
      vars: 2,
      consts: [[1, "container", "glide-container", "mt-4"], [1, "glide"], ["data-glide-el", "track", 1, "glide__track"], [1, "glide__slides"], [1, "glide__slide"], [1, "d-image"], ["src", "/assets/events.png", 1, "glide-img", 3, "click", "mouseenter", "mouseleave"], [1, "text-num", "text-center", "text-uppercase"], [1, "text-name", "text-center", "text-uppercase"], ["src", "/assets/departments/creatives_main.png", 1, "glide-img", 3, "click", "mouseenter", "mouseleave"], ["src", "/assets/departments/web_main.png", 1, "glide-img", 3, "click", "mouseenter", "mouseleave"], ["src", "/assets/infrastructure.png", 1, "glide-img", 3, "click", "mouseenter", "mouseleave"], ["src", "/assets/departments/media_main.png", 1, "glide-img", 3, "click", "mouseenter", "mouseleave"], ["src", "/assets/departments/hospitality_main.png", 1, "glide-img", 3, "click", "mouseenter", "mouseleave"], ["src", "/assets/departments/fnb_main.png", 1, "glide-img", 3, "click", "mouseenter", "mouseleave"], ["src", "/assets/departments/marketing_main.png", 1, "glide-img", 3, "click", "mouseenter", "mouseleave"], ["data-glide-el", "controls", 1, "glide__arrows"], ["data-glide-dir", "<", 1, "glide__arrow", "glide__arrow--left"], ["src", "assets/left.png", 1, "navigateimg"], ["data-glide-dir", ">", 1, "glide__arrow", "glide__arrow--right"], ["src", "assets/right.png", 1, "navigateimg"], ["data-glide-el", "controls[nav]", 1, "glide__bullets"], ["data-glide-dir", "=0", 1, "glide__bullet"], ["data-glide-dir", "=1", 1, "glide__bullet"], ["data-glide-dir", "=2", 1, "glide__bullet"], ["data-glide-dir", "=3", 1, "glide__bullet"], ["data-glide-dir", "=4", 1, "glide__bullet"], ["data-glide-dir", "=5", 1, "glide__bullet"], ["data-glide-dir", "=6", 1, "glide__bullet"], ["data-glide-dir", "=7", 1, "glide__bullet"]],
      template: function DepartmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_img_click_6_listener() {
            return ctx.redirect("departmentdetail/events");
          })("mouseenter", function DepartmentsComponent_Template_img_mouseenter_6_listener($event) {
            return ctx.zoomIn($event);
          })("mouseleave", function DepartmentsComponent_Template_img_mouseleave_6_listener($event) {
            return ctx.zoomOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 01 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " events ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_img_click_13_listener() {
            return ctx.redirect("departmentdetail/creatives");
          })("mouseenter", function DepartmentsComponent_Template_img_mouseenter_13_listener($event) {
            return ctx.zoomIn($event);
          })("mouseleave", function DepartmentsComponent_Template_img_mouseleave_13_listener($event) {
            return ctx.zoomOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 02 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " creatives ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_img_click_20_listener() {
            return ctx.redirect("departmentdetail/web");
          })("mouseenter", function DepartmentsComponent_Template_img_mouseenter_20_listener($event) {
            return ctx.zoomIn($event);
          })("mouseleave", function DepartmentsComponent_Template_img_mouseleave_20_listener($event) {
            return ctx.zoomOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " 03 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " web ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_img_click_27_listener() {
            return ctx.redirect("departmentdetail/infrastructure");
          })("mouseenter", function DepartmentsComponent_Template_img_mouseenter_27_listener($event) {
            return ctx.zoomIn($event);
          })("mouseleave", function DepartmentsComponent_Template_img_mouseleave_27_listener($event) {
            return ctx.zoomOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 04 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " infrastructure ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_img_click_34_listener() {
            return ctx.redirect("departmentdetail/mediaandpublicity");
          })("mouseenter", function DepartmentsComponent_Template_img_mouseenter_34_listener($event) {
            return ctx.zoomIn($event);
          })("mouseleave", function DepartmentsComponent_Template_img_mouseleave_34_listener($event) {
            return ctx.zoomOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 05 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " media & publicity ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_img_click_41_listener() {
            return ctx.redirect("departmentdetail/hospitality");
          })("mouseenter", function DepartmentsComponent_Template_img_mouseenter_41_listener($event) {
            return ctx.zoomIn($event);
          })("mouseleave", function DepartmentsComponent_Template_img_mouseleave_41_listener($event) {
            return ctx.zoomOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 06 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " hospitality ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_img_click_48_listener() {
            return ctx.redirect("departmentdetail/fnb");
          })("mouseenter", function DepartmentsComponent_Template_img_mouseenter_48_listener($event) {
            return ctx.zoomIn($event);
          })("mouseleave", function DepartmentsComponent_Template_img_mouseleave_48_listener($event) {
            return ctx.zoomOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 07 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " food & beverages ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_img_click_55_listener() {
            return ctx.redirect("departmentdetail/marketing");
          })("mouseenter", function DepartmentsComponent_Template_img_mouseenter_55_listener($event) {
            return ctx.zoomIn($event);
          })("mouseleave", function DepartmentsComponent_Template_img_mouseleave_55_listener($event) {
            return ctx.zoomOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " 08 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " marketing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx.mobile);
        }
      },
      styles: [".image[_ngcontent-%COMP%]{\n\n  height: 300px;\n  width:100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.image[_ngcontent-%COMP%]:nth-child(odd){\n  \n}\n\n.index[_ngcontent-%COMP%]{\n  font-size: 24px;\n\n}\n\n.index[_ngcontent-%COMP%]{\n  border-bottom:1px solid #ffffff;\n}\n\n.name[_ngcontent-%COMP%]{\n  font-size: 32px;\n}\n\n.app-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.box-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.box-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 800px;\n  height: 500px;\n  max-width: 90%;\n  max-height: 90%;\n  padding: 24px;\n  margin: 24px auto;\n  border-radius: 4px;\n\n  color: #555;\n  background-color: #eee;\n  box-shadow:\n    0 6px 20px rgba(0, 0, 0, 0.18),\n    0 6px 6px rgba(0, 0, 0, 0.25);\n}\n\n.info-container[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n\n  line-height: 24px;\n}\n\n.action-container[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%] {\n  position: relative;\n\n  overflow: auto;\n  height: 300px;\n  min-height: 0;\n  margin: 8px 16px;\n  border-radius: 4px;\n\n  background-color: #fff;\n}\n\n.action-container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.vertical-container[_ngcontent-%COMP%], .horizontal-container[_ngcontent-%COMP%] {\n  min-height: 0 !important;\n}\n\n.action-button[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: calc(100% - 16px);\n  min-height: 35px;\n  padding: 4px 16px;\n  margin: 8px;\n  border: 1px solid #555;\n  border-radius: 4px;\n\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 14px;\n  text-align: center;\n}\n\n.action-button[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #555;\n}\n\n.swiper-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  color: #aaa;\n  background-color: #eee;\n}\n\n.swiper-slide-active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #aaa;\n}\n\n.d-image[_ngcontent-%COMP%]{\n  overflow: hidden;\n}\n\n.glide-img[_ngcontent-%COMP%]{\n  width:100%;\n  transition: 0.25s ease-in;\n  transform: scale(1);\n  height:275px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top;\n     object-position: top;\n}\n\n@media screen and (min-width:675px){\n  .glide-img[_ngcontent-%COMP%]:hover{\n    transform: scale(1.1);\n    transition: 0.25s ease-out;\n  }\n}\n\n.glide-container[_ngcontent-%COMP%]{\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  height:400px;\n  width:100%;\n}\n\n.text-num[_ngcontent-%COMP%]{\n  color:white;\n  font-size: 24px;\n  border-bottom: 1px solid rgb(128,128,128);\n  padding-bottom: 8px;\n  padding-top: 8px;\n  transition:0.2s ease-in;\n}\n\n.text-name[_ngcontent-%COMP%]{\n  color:#ffffff;\n  font-size: 28px;\n  padding-top: 8px;\n  transition:0.2s ease-in;\n}\n\n.text-name-hover[_ngcontent-%COMP%]{\n  transform: translateY(8px);\n  transition:0.2s ease-out;\n}\n\n.border-white[_ngcontent-%COMP%]{\n  border-bottom: 2px solid white;\n  transition:0.2s ease-out;\n}\n\n\n\n.glide[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  box-sizing: border-box; }\n\n.glide[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    box-sizing: inherit; }\n\n.glide__track[_ngcontent-%COMP%] {\n    overflow: hidden; }\n\n.glide__slides[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    list-style: none;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transform-style: preserve-3d;\n    touch-action: pan-Y;\n    overflow: hidden;\n    padding: 0;\n    white-space: nowrap;\n    display: flex;\n    flex-wrap: nowrap;\n    will-change: transform; }\n\n.glide__slides--dragging[_ngcontent-%COMP%] {\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n\n.glide__slide[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    flex-shrink: 0;\n    white-space: normal;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    -webkit-touch-callout: none;\n    -webkit-tap-highlight-color: transparent; }\n\n.glide__slide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      -webkit-user-select: none;\n              user-select: none;\n      -webkit-user-drag: none;\n      -moz-user-select: none;\n      -ms-user-select: none; }\n\n.glide__arrows[_ngcontent-%COMP%] {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.glide__bullets[_ngcontent-%COMP%] {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.glide--rtl[_ngcontent-%COMP%] {\n    direction: rtl; }\n\n\n\n.glide__arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  top: 35%;\n  z-index: 2;\n  color: white;\n  text-transform: uppercase;\n  padding: 9px 12px;\n  background-color: transparent;\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);\n  text-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);\n  opacity: 1;\n  cursor: pointer;\n  transition: opacity 150ms ease, border 300ms ease-in-out;\n  transform: translateY(-50%);\n  line-height: 1; }\n\n.glide__arrow[_ngcontent-%COMP%]:focus {\n    outline: none; }\n\n.glide__arrow[_ngcontent-%COMP%]:hover {\n    border-color: white; }\n\n.glide__arrow--left[_ngcontent-%COMP%] {\n    left: 2em; }\n\n.glide__arrow--right[_ngcontent-%COMP%] {\n    right: 2em; }\n\n.glide__arrow--disabled[_ngcontent-%COMP%] {\n    opacity: 0.33; }\n\n.glide__bullets[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  bottom: -2em;\n  left: 50%;\n  display: inline-flex;\n  list-style: none;\n  transform: translateX(-50%); }\n\n.glide__bullet[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 9px;\n  height: 9px;\n  padding: 0;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  transition: all 300ms ease-in-out;\n  cursor: pointer;\n  line-height: 0;\n  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);\n  margin: 0 0.25em; }\n\n.glide__bullet[_ngcontent-%COMP%]:focus {\n    outline: none; }\n\n.glide__bullet[_ngcontent-%COMP%]:hover, .glide__bullet[_ngcontent-%COMP%]:focus {\n    border: 2px solid white;\n    background-color: rgba(255, 255, 255, 0.5); }\n\n.glide__bullet--active[_ngcontent-%COMP%] {\n    background-color: white; }\n\n.glide--swipeable[_ngcontent-%COMP%] {\n  cursor: grab;\n  cursor: -webkit-grab; }\n\n.glide--dragging[_ngcontent-%COMP%] {\n  cursor: grabbing;\n  cursor: -webkit-grabbing; }\n\n\n\n@media screen and (max-width:675px){\n    .glide__bullets[_ngcontent-%COMP%]{\n      bottom:-1em;\n    }\n  }\n\n.navigateimg[_ngcontent-%COMP%]{\n    height:40px;\n    width:40px;\n  }\n\n.glide__arrow[_ngcontent-%COMP%]:first-child{\n    transform:translateX(-150%);\n  }\n\n.glide__arrow[_ngcontent-%COMP%]:last-child{\n    transform:translateX(150%);\n  }\n\n.glide__slide[_ngcontent-%COMP%]:nth-child(2)   img[_ngcontent-%COMP%]{\n  -o-object-position: bottom;\n     object-position: bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxlQUFlOztBQUVqQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBSUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEI7O2lDQUUrQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGtCQUFrQjs7RUFFbEIsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQix1QkFBb0I7S0FBcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHdCQUF3QjtBQUMxQjs7QUFJQSw2QkFBNkI7O0FBQzdCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0IsRUFBRTs7QUFDeEI7SUFDRSxtQkFBbUIsRUFBRTs7QUFDdkI7SUFDRSxnQkFBZ0IsRUFBRTs7QUFDcEI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixzQkFBc0IsRUFBRTs7QUFDeEI7TUFDRSx5QkFBaUI7U0FBakIsc0JBQWlCO1VBQWpCLHFCQUFpQjtjQUFqQixpQkFBaUIsRUFBRTs7QUFDdkI7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQix3Q0FBd0MsRUFBRTs7QUFDMUM7TUFDRSx5QkFBaUI7Y0FBakIsaUJBQWlCO01BQ2pCLHVCQUF1QjtNQUN2QixzQkFBc0I7TUFDdEIscUJBQXFCLEVBQUU7O0FBQzNCO0lBQ0UsMkJBQTJCO0lBQzNCLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQixFQUFFOztBQUNyQjtJQUNFLDJCQUEyQjtJQUMzQix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUIsRUFBRTs7QUFDckI7SUFDRSxjQUFjLEVBQUU7O0FBQ3BCLHlDQUF5Qzs7QUFFekM7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLDhDQUE4QztFQUM5QyxVQUFVO0VBQ1YsZUFBZTtFQUNmLHdEQUF3RDtFQUN4RCwyQkFBMkI7RUFDM0IsY0FBYyxFQUFFOztBQUNoQjtJQUNFLGFBQWEsRUFBRTs7QUFDakI7SUFDRSxtQkFBbUIsRUFBRTs7QUFDdkI7SUFDRSxTQUFTLEVBQUU7O0FBQ2I7SUFDRSxVQUFVLEVBQUU7O0FBQ2Q7SUFDRSxhQUFhLEVBQUU7O0FBRW5CO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osU0FBUztFQUNULG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsMkJBQTJCLEVBQUU7O0FBRS9CO0VBQ0UsMENBQTBDO0VBQzFDLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixjQUFjO0VBQ2QsK0NBQStDO0VBQy9DLGdCQUFnQixFQUFFOztBQUNsQjtJQUNFLGFBQWEsRUFBRTs7QUFDakI7SUFDRSx1QkFBdUI7SUFDdkIsMENBQTBDLEVBQUU7O0FBQzlDO0lBQ0UsdUJBQXVCLEVBQUU7O0FBRTdCO0VBQ0UsWUFBWTtFQUVaLG9CQUFvQixFQUFFOztBQUV4QjtFQUNFLGdCQUFnQjtFQUVoQix3QkFBd0IsRUFBRTs7QUFFMUIsMkJBQTJCOztBQUUzQjtJQUNFO01BQ0UsV0FBVztJQUNiO0VBQ0Y7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaOztBQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztBQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztBQUdGO0VBQ0UsMEJBQXVCO0tBQXZCLHVCQUF1QjtBQUN6Qjs7QUFHQSxnQkFBZ0I7O0FBQ2hCOzs7Ozs7OztFQVFFIiwiZmlsZSI6InNyYy9hcHAvZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXtcblxuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDoxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmltYWdlOm50aC1jaGlsZChvZGQpe1xuICAvKnRyYW5zZm9ybTogcm90YXRlM2QoNjBkZWcsNjBkZWcgLDMwZGVnKTsqL1xufVxuXG4uaW5kZXh7XG4gIGZvbnQtc2l6ZTogMjRweDtcblxufVxuXG4uaW5kZXh7XG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNmZmZmZmY7XG59XG5cbi5uYW1le1xuICBmb250LXNpemU6IDMycHg7XG59XG5cblxuXG4uYXBwLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uYm94LXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYm94LWNvbnRhaW5lciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1heC1oZWlnaHQ6IDkwJTtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luOiAyNHB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICBjb2xvcjogIzU1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm94LXNoYWRvdzpcbiAgICAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCksXG4gICAgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5pbmZvLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcblxuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmFjdGlvbi1jb250YWluZXIsXG4uY29udGVudC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIG1hcmdpbjogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYWN0aW9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi52ZXJ0aWNhbC1jb250YWluZXIsXG4uaG9yaXpvbnRhbC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICBtaW4taGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiA0cHggMTZweDtcbiAgbWFyZ2luOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG59XG5cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBjb2xvcjogI2FhYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLnN3aXBlci1zbGlkZS1hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbn1cblxuLmQtaW1hZ2V7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZ2xpZGUtaW1ne1xuICB3aWR0aDoxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBoZWlnaHQ6Mjc1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IHRvcDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2NzVweCl7XG4gIC5nbGlkZS1pbWc6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIHRyYW5zaXRpb246IDAuMjVzIGVhc2Utb3V0O1xuICB9XG59XG5cbi5nbGlkZS1jb250YWluZXJ7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDo0MDBweDtcbiAgd2lkdGg6MTAwJTtcbn1cblxuLnRleHQtbnVte1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDEyOCwxMjgsMTI4KTtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgdHJhbnNpdGlvbjowLjJzIGVhc2UtaW47XG59XG5cbi50ZXh0LW5hbWV7XG4gIGNvbG9yOiNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgdHJhbnNpdGlvbjowLjJzIGVhc2UtaW47XG59XG5cbi50ZXh0LW5hbWUtaG92ZXJ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xuICB0cmFuc2l0aW9uOjAuMnMgZWFzZS1vdXQ7XG59XG5cbi5ib3JkZXItd2hpdGV7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgdHJhbnNpdGlvbjowLjJzIGVhc2Utb3V0O1xufVxuXG5cblxuLyoqKioqKkdsaWRlIGNvcmUgY3NzKioqKioqKiovXG4uZ2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIC5nbGlkZSAqIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XG4gIC5nbGlkZV9fdHJhY2sge1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgLmdsaWRlX19zbGlkZXMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRvdWNoLWFjdGlvbjogcGFuLVk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtOyB9XG4gICAgLmdsaWRlX19zbGlkZXMtLWRyYWdnaW5nIHtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XG4gIC5nbGlkZV9fc2xpZGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gICAgLmdsaWRlX19zbGlkZSBhIHtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyB9XG4gIC5nbGlkZV9fYXJyb3dzIHtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgLmdsaWRlX19idWxsZXRzIHtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgLmdsaWRlLS1ydGwge1xuICAgIGRpcmVjdGlvbjogcnRsOyB9XG4vKioqKioqKioqKkdsaWRlIFRoZW1lIENTUyoqKioqKioqKioqKioqKi9cblxuLmdsaWRlX19hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMzUlO1xuICB6LWluZGV4OiAyO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDlweCAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMC4yNWVtIDAuNWVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0ZXh0LXNoYWRvdzogMCAwLjI1ZW0gMC41ZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZSwgYm9yZGVyIDMwMG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxpbmUtaGVpZ2h0OiAxOyB9XG4gIC5nbGlkZV9fYXJyb3c6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLmdsaWRlX19hcnJvdzpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTsgfVxuICAuZ2xpZGVfX2Fycm93LS1sZWZ0IHtcbiAgICBsZWZ0OiAyZW07IH1cbiAgLmdsaWRlX19hcnJvdy0tcmlnaHQge1xuICAgIHJpZ2h0OiAyZW07IH1cbiAgLmdsaWRlX19hcnJvdy0tZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuMzM7IH1cblxuLmdsaWRlX19idWxsZXRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBib3R0b206IC0yZW07XG4gIGxlZnQ6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxuXG4uZ2xpZGVfX2J1bGxldCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA5cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMDtcbiAgYm94LXNoYWRvdzogMCAwLjI1ZW0gMC41ZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbjogMCAwLjI1ZW07IH1cbiAgLmdsaWRlX19idWxsZXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLmdsaWRlX19idWxsZXQ6aG92ZXIsIC5nbGlkZV9fYnVsbGV0OmZvY3VzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cbiAgLmdsaWRlX19idWxsZXQtLWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxuLmdsaWRlLS1zd2lwZWFibGUge1xuICBjdXJzb3I6IGdyYWI7XG4gIGN1cnNvcjogLW1vei1ncmFiO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjsgfVxuXG4uZ2xpZGUtLWRyYWdnaW5nIHtcbiAgY3Vyc29yOiBncmFiYmluZztcbiAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7IH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NzVweCl7XG4gICAgLmdsaWRlX19idWxsZXRze1xuICAgICAgYm90dG9tOi0xZW07XG4gICAgfVxuICB9XG5cbiAgLm5hdmlnYXRlaW1ne1xuICAgIGhlaWdodDo0MHB4O1xuICAgIHdpZHRoOjQwcHg7XG4gIH1cblxuICAuZ2xpZGVfX2Fycm93OmZpcnN0LWNoaWxke1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xNTAlKTtcbiAgfVxuXG4gIC5nbGlkZV9fYXJyb3c6bGFzdC1jaGlsZHtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgxNTAlKTtcbiAgfVxuICBcblxuLmdsaWRlX19zbGlkZTpudGgtY2hpbGQoMikgaW1ne1xuICBvYmplY3QtcG9zaXRpb246IGJvdHRvbTtcbn1cblxuXG4vKkFkZGVkIGluIGxhc3QqL1xuLypcbi50ZXh0LW51bXtcbiAgICBkaXNwbGF5OiBub25lOyAgICBcbn1cblxuLnRleHQtbmFtZXtcbiAgYm9yZGVyLXRvcDoycHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLXRvcDoxNnB4O1xufSovXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-departments',
          templateUrl: './departments.component.html',
          styleUrls: ['./departments.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-animations.ts":
  /*!*****************************************!*\
    !*** ./src/app/home/home-animations.ts ***!
    \*****************************************/

  /*! exports provided: fade, slide, animateHead, animateContent */

  /***/
  function srcAppHomeHomeAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fade", function () {
      return fade;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slide", function () {
      return slide;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "animateHead", function () {
      return animateHead;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "animateContent", function () {
      return animateContent;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.1",
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      display: "none",
      offset: 1.0
    })])))]);
    var slide = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slide', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateX(600px)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateX(300px)",
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateX(0px)",
      offset: 1.0
    })])))]);
    var animateHead = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animateHead', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateX(-600px)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateX(-600px)",
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateX(-300px)",
      offset: 0.65
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateX(0px)",
      offset: 1.0
    })])))]);
    var animateContent = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animateContent', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateX(600px)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateX(600px)",
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateX(300px)",
      offset: 0.65
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateX(0px)",
      offset: 1.0
    })])))]);
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _home_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home-animations */
    "./src/app/home/home-animations.ts");
    /* harmony import */


    var _currentscreen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../currentscreen.service */
    "./src/app/currentscreen.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_div_0_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " WHY TECHFEST? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateHead", undefined);
      }
    }

    function HomeComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_0_p_2_Template, 2, 1, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " This is probably the question you\u2019re most curious to know the answer to! Techfest provides you with opportunities and skills that play an essential role in the development of your personality. From managing organizers to handling events, Techfest equips you with valuable skills such as leadership, professionalism, pressure handling and time management. All in all, if you want to make memories and build relationships, come join us. Be a part of the Techfest family. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.screen == "whytf");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateHead", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateContent", undefined);
      }
    }

    function HomeComponent_div_1_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateHead", undefined);
      }
    }

    function HomeComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_1_p_2_Template, 2, 1, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " A Coordinator's motivation fuels the flame that is Techfest. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Don't be a guest to your own fest.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "You are");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "indispensable");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "family");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "part of Techfest");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "part of Techfest");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.screen == "home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateHead", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateContent", undefined);
      }
    }

    function HomeComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(cs) {
        _classCallCheck(this, HomeComponent);

        this.cs = cs;
        this.screen = 'home';
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          setInterval(function () {
            _this4.setScreen();
          });
        }
      }, {
        key: "setScreen",
        value: function setScreen() {
          this.screen = this.cs.getCurrentScreen();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_currentscreen_service__WEBPACK_IMPORTED_MODULE_2__["CurrentscreenService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 3,
      vars: 3,
      consts: [["class", "row justify-content-center main-div", 4, "ngIf"], ["class", "row justify-content-center main-div", "id", "coordi-div", 4, "ngIf"], [1, "row", "justify-content-center", "main-div"], [1, "col-12", "col-sm-10", "col-md-8"], ["class", "head text-center text-md-left", "id", "whytf", 4, "ngIf"], [1, "row"], [1, "col-2", "divi", "text-md-right", "d-none", "d-md-inline-block"], [1, "line"], [1, "col-12", "col-md-10", "text-center", "text-md-left"], [1, "description-text"], ["id", "whytf", 1, "head", "text-center", "text-md-left"], ["id", "coordi-div", 1, "row", "justify-content-center", "main-div"], [1, "col-12", "col-sm-10", "col-md-9"], ["class", "head text-center text-md-left", 4, "ngIf"], ["id", "animation-container", 1, "col-12", "col-md-10", "text-center", "text-md-left"], [1, "text-div", 2, "margin-left", "0"], [1, "row", "animated-text", "text-uppercase"], [1, "d-inline-block"], [1, "lighter"], [1, "d-inline-block", "animated-main-text"], [1, "text1"], [1, "text2"], [1, "text3"], ["id", "textfinal"], [1, "head", "text-center", "text-md-left"], ["src", "assets/cp_title.png", "id", "cpimg"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 9, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 28, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 1, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screen == "whytf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screen == "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screen == "departments");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".head[_ngcontent-%COMP%]{\n\tfont-size: 64px;\n\tcolor: #ffffff;\n\tfont-weight:bold;\n}\n\n.main-div[_ngcontent-%COMP%]{\n\tmargin-top:48px;\n}\n\n.description-text[_ngcontent-%COMP%]{\n\tcolor:#ffffff;\n\tfont-size:24px;\n\tmargin-left:0;\n}\n\n.description-text[_ngcontent-%COMP%]:nth-child(1), .description-text[_ngcontent-%COMP%]:nth-child(2){\n\tmargin-bottom: 0;\n}\n\n.line[_ngcontent-%COMP%]{\n\t\n\tborder-left:64px solid #ffffff;\n\theight:2px;\n\tmargin-top: 16px;\n\tdisplay: inline-block;\n}\n\n#cpimg[_ngcontent-%COMP%]{\n\theight:68px;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n}\n\n#whytf[_ngcontent-%COMP%]:before{\n  content: '\\2807';\n  font-size: 64px;\n}\n\n@media screen and (max-width:1080px){\n\t#cpimg[_ngcontent-%COMP%]{\n\t\theight:56px;\n\t}\n}\n\n@media screen and (max-width:900px){\n\t#cpimg[_ngcontent-%COMP%]{\n\t\theight:48px;\n\t}\n}\n\n@media screen and (max-width:900px){\n\t#cpimg[_ngcontent-%COMP%]{\n\t\twidth:100%;\n\t\t-o-object-fit: contain;\n\t\t   object-fit: contain;\n\t}\n}\n\n@media screen and (max-width:675px){\n\t.head[_ngcontent-%COMP%], #whytf[_ngcontent-%COMP%]:before{\n\t\tfont-size: 32px;\n\t}\n\n\t.description-text[_ngcontent-%COMP%]{\n\t\tfont-size:16px;\n\t}\n}\n\n\n\n@-webkit-keyframes slideDown1{\n\t0% {transform: translateX(0); position: absolute; top: 0; opacity: 1;}\n\t100% {transform: translateY(100px); opacity: 0;}\n}\n\n@keyframes slideDown1{\n\t0% {transform: translateX(0); position: absolute; top: 0; opacity: 1;}\n\t100% {transform: translateY(100px); opacity: 0;}\n}\n\n@-webkit-keyframes slideDown{\n\t0% {transform: translateX(0); position: absolute; top: 0; opacity: 1;}\n\t100% {transform: translateY(100px); opacity: 0;}\n}\n\n@keyframes slideDown{\n\t0% {transform: translateX(0); position: absolute; top: 0; opacity: 1;}\n\t100% {transform: translateY(100px); opacity: 0;}\n}\n\n@-webkit-keyframes slideDownlast{\n\t0% {transform: translateX(0); position: absolute; top: 0; opacity: 1;}\n\t100% {transform: translateY(100px); opacity: 0;}\n}\n\n@keyframes slideDownlast{\n\t0% {transform: translateX(0); position: absolute; top: 0; opacity: 1;}\n\t100% {transform: translateY(100px); opacity: 0;}\n}\n\n.text1[_ngcontent-%COMP%] {\n\t-webkit-animation-name: slideDown1;\n\t        animation-name: slideDown1;\n\topacity: 0;\n\t-webkit-animation-duration: 2.5s;\n\t        animation-duration: 2.5s;\n\t-webkit-animation-iteration-count: 1;\n\t        animation-iteration-count: 1;\n\tanimation-direction: reverse;\n\t-webkit-animation-timing-function: cubic-bezier(.76,.05,.86,.06);\n\t        animation-timing-function: cubic-bezier(.76,.05,.86,.06);\n}\n\n.text2[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 0;\n\topacity: 0;\n\t-webkit-animation-name: slideDown;\n\t        animation-name: slideDown;\n\t-webkit-animation-delay: 2.5s;\n\t        animation-delay: 2.5s;\n\t-webkit-animation-duration: 2.5s;\n\t        animation-duration: 2.5s;\n\tanimation-direction: reverse;\n\t-webkit-animation-iteration-count: 1;\n\t        animation-iteration-count: 1;\n\t-webkit-animation-timing-function: cubic-bezier(.76,.05,.86,.06);\n\t        animation-timing-function: cubic-bezier(.76,.05,.86,.06);\n}\n\n.text3[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 0;\n\topacity: 0;\n\t-webkit-animation-name: slideDownlast;\n\t        animation-name: slideDownlast;\n\t-webkit-animation-duration: 2.5s;\n\t        animation-duration: 2.5s;\n\t-webkit-animation-delay: 5s;\n\t        animation-delay: 5s;\n\tanimation-direction: reverse;\n\t-webkit-animation-iteration-count: 1;\n\t        animation-iteration-count: 1;\n\t-webkit-animation-timing-function: cubic-bezier(.76,.05,.86,.06);\n\t        animation-timing-function: cubic-bezier(.76,.05,.86,.06);\n}\n\n#textfinal[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 0;\n\topacity: 1;\n\t-webkit-animation-name: showlast;\n\t        animation-name: showlast;\n\t-webkit-animation-duration: 7.5s;\n\t        animation-duration: 7.5s;\n\t-webkit-animation-iteration-count: 1;\n\t        animation-iteration-count: 1;\n}\n\n@-webkit-keyframes showlast {\n\t0% {opacity: 0;}\n\t99% {opacity: 0;}\n\t100% {opacity: 1;}\n}\n\n@keyframes showlast {\n\t0% {opacity: 0;}\n\t99% {opacity: 0;}\n\t100% {opacity: 1;}\n}\n\n.animated-text[_ngcontent-%COMP%]{\n\tcolor:#fff;\n\toverflow: hidden;\n\tfont-size: 48px;\n\twidth:100%; \n\tposition:relative;\n\toverflow:hidden;\n\theight:100px;\n\n}\n\n.lighter[_ngcontent-%COMP%]{\n\topacity: 0.4;\n}\n\n.animated-main-text[_ngcontent-%COMP%]{\n\tposition: relative;\n\tpadding-left: 12px;\n\tmin-width:70%;\n\tfont-weight:bold;\n}\n\n.text-div[_ngcontent-%COMP%]{\n\ttransform: translateX(-15px);\n}\n\n@media screen and (max-width:1150px){\n\t.animated-text[_ngcontent-%COMP%]{\n\t\tfont-size: 36px;\n\t}\n}\n\n@media screen and (max-width: 675px){\n\t.animated-text[_ngcontent-%COMP%]{\n\t\tfont-size: 21px;\n\t\tpadding-left:7.5%;\n\t\tmargin:auto;\n\t}\n\n\t.animated-main-text[_ngcontent-%COMP%]{\n\t\tmargin:auto;\n\t\tpadding-left: 5px;\n\t}\n\n\t.text-div[_ngcontent-%COMP%]{\n\t\ttransform: translateX(0px);\n\t}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBR0E7Q0FDQyxhQUFhO0NBQ2IsY0FBYztDQUNkLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLGNBQWM7Q0FDZCw4QkFBOEI7Q0FDOUIsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsb0JBQWlCO0lBQWpCLGlCQUFpQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0NBQ0M7RUFDQyxXQUFXO0NBQ1o7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsV0FBVztDQUNaO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLFVBQVU7RUFDVixzQkFBbUI7S0FBbkIsbUJBQW1CO0NBQ3BCO0FBQ0Q7O0FBSUE7Q0FDQztFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxjQUFjO0NBQ2Y7QUFDRDs7QUFHQSwwQkFBMEI7O0FBQzFCO0NBQ0MsSUFBSSx3QkFBd0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDO0NBQ3JFLE1BQU0sNEJBQTRCLEVBQUUsVUFBVSxDQUFDO0FBQ2hEOztBQUhBO0NBQ0MsSUFBSSx3QkFBd0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDO0NBQ3JFLE1BQU0sNEJBQTRCLEVBQUUsVUFBVSxDQUFDO0FBQ2hEOztBQUNBO0NBQ0MsSUFBSSx3QkFBd0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDO0NBQ3JFLE1BQU0sNEJBQTRCLEVBQUUsVUFBVSxDQUFDO0FBQ2hEOztBQUhBO0NBQ0MsSUFBSSx3QkFBd0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDO0NBQ3JFLE1BQU0sNEJBQTRCLEVBQUUsVUFBVSxDQUFDO0FBQ2hEOztBQUNBO0NBQ0MsSUFBSSx3QkFBd0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDO0NBQ3JFLE1BQU0sNEJBQTRCLEVBQUUsVUFBVSxDQUFDO0FBQ2hEOztBQUhBO0NBQ0MsSUFBSSx3QkFBd0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDO0NBQ3JFLE1BQU0sNEJBQTRCLEVBQUUsVUFBVSxDQUFDO0FBQ2hEOztBQUNBO0NBQ0Msa0NBQTBCO1NBQTFCLDBCQUEwQjtDQUMxQixVQUFVO0NBQ1YsZ0NBQXdCO1NBQXhCLHdCQUF3QjtDQUN4QixvQ0FBNEI7U0FBNUIsNEJBQTRCO0NBQzVCLDRCQUE0QjtDQUM1QixnRUFBd0Q7U0FBeEQsd0RBQXdEO0FBQ3pEOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixVQUFVO0NBQ1YsaUNBQXlCO1NBQXpCLHlCQUF5QjtDQUN6Qiw2QkFBcUI7U0FBckIscUJBQXFCO0NBQ3JCLGdDQUF3QjtTQUF4Qix3QkFBd0I7Q0FDeEIsNEJBQTRCO0NBQzVCLG9DQUE0QjtTQUE1Qiw0QkFBNEI7Q0FDNUIsZ0VBQXdEO1NBQXhELHdEQUF3RDtBQUN6RDs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sVUFBVTtDQUNWLHFDQUE2QjtTQUE3Qiw2QkFBNkI7Q0FDN0IsZ0NBQXdCO1NBQXhCLHdCQUF3QjtDQUN4QiwyQkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLDRCQUE0QjtDQUM1QixvQ0FBNEI7U0FBNUIsNEJBQTRCO0NBQzVCLGdFQUF3RDtTQUF4RCx3REFBd0Q7QUFDekQ7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFVBQVU7Q0FDVixnQ0FBd0I7U0FBeEIsd0JBQXdCO0NBQ3hCLGdDQUF3QjtTQUF4Qix3QkFBd0I7Q0FDeEIsb0NBQTRCO1NBQTVCLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLElBQUksVUFBVSxDQUFDO0NBQ2YsS0FBSyxVQUFVLENBQUM7Q0FDaEIsTUFBTSxVQUFVLENBQUM7QUFDbEI7O0FBSkE7Q0FDQyxJQUFJLFVBQVUsQ0FBQztDQUNmLEtBQUssVUFBVSxDQUFDO0NBQ2hCLE1BQU0sVUFBVSxDQUFDO0FBQ2xCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsWUFBWTs7QUFFYjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDO0VBQ0MsZUFBZTtDQUNoQjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLFdBQVc7RUFDWCxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQywwQkFBMEI7Q0FDM0I7O0FBRUQiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFke1xuXHRmb250LXNpemU6IDY0cHg7XG5cdGNvbG9yOiAjZmZmZmZmO1xuXHRmb250LXdlaWdodDpib2xkO1xufVxuXG4ubWFpbi1kaXZ7XG5cdG1hcmdpbi10b3A6NDhweDtcbn1cblxuXG4uZGVzY3JpcHRpb24tdGV4dHtcblx0Y29sb3I6I2ZmZmZmZjtcblx0Zm9udC1zaXplOjI0cHg7XG5cdG1hcmdpbi1sZWZ0OjA7XG59XG5cbi5kZXNjcmlwdGlvbi10ZXh0Om50aC1jaGlsZCgxKSwuZGVzY3JpcHRpb24tdGV4dDpudGgtY2hpbGQoMil7XG5cdG1hcmdpbi1ib3R0b206IDA7XG59XG4ubGluZXtcblx0Lyp3aWR0aDoyMHB4OyovXG5cdGJvcmRlci1sZWZ0OjY0cHggc29saWQgI2ZmZmZmZjtcblx0aGVpZ2h0OjJweDtcblx0bWFyZ2luLXRvcDogMTZweDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jY3BpbWd7XG5cdGhlaWdodDo2OHB4O1xuXHRvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuI3doeXRmOmJlZm9yZXtcbiAgY29udGVudDogJ1xcMjgwNyc7XG4gIGZvbnQtc2l6ZTogNjRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDgwcHgpe1xuXHQjY3BpbWd7XG5cdFx0aGVpZ2h0OjU2cHg7XG5cdH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5MDBweCl7XG5cdCNjcGltZ3tcblx0XHRoZWlnaHQ6NDhweDtcblx0fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjkwMHB4KXtcblx0I2NwaW1ne1xuXHRcdHdpZHRoOjEwMCU7XG5cdFx0b2JqZWN0LWZpdDogY29udGFpbjtcblx0fVxufVxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NzVweCl7XG5cdC5oZWFkLCN3aHl0ZjpiZWZvcmV7XG5cdFx0Zm9udC1zaXplOiAzMnB4O1xuXHR9XG5cblx0LmRlc2NyaXB0aW9uLXRleHR7XG5cdFx0Zm9udC1zaXplOjE2cHg7XG5cdH1cbn1cblxuXG4vKioqKioqKipCbG9jayAqKioqKioqKioqKi9cbkBrZXlmcmFtZXMgc2xpZGVEb3duMXtcblx0MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IG9wYWNpdHk6IDE7fVxuXHQxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpOyBvcGFjaXR5OiAwO31cbn1cbkBrZXlmcmFtZXMgc2xpZGVEb3due1xuXHQwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgb3BhY2l0eTogMTt9XG5cdDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7IG9wYWNpdHk6IDA7fVxufVxuQGtleWZyYW1lcyBzbGlkZURvd25sYXN0e1xuXHQwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgb3BhY2l0eTogMTt9XG5cdDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7IG9wYWNpdHk6IDA7fVxufVxuLnRleHQxIHtcblx0YW5pbWF0aW9uLW5hbWU6IHNsaWRlRG93bjE7XG5cdG9wYWNpdHk6IDA7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMi41cztcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcblx0YW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcblx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC43NiwuMDUsLjg2LC4wNik7XG59XG5cbi50ZXh0MiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRvcGFjaXR5OiAwO1xuXHRhbmltYXRpb24tbmFtZTogc2xpZGVEb3duO1xuXHRhbmltYXRpb24tZGVsYXk6IDIuNXM7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMi41cztcblx0YW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcblx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC43NiwuMDUsLjg2LC4wNik7XG59XG4udGV4dDMge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0b3BhY2l0eTogMDtcblx0YW5pbWF0aW9uLW5hbWU6IHNsaWRlRG93bmxhc3Q7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMi41cztcblx0YW5pbWF0aW9uLWRlbGF5OiA1cztcblx0YW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcblx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC43NiwuMDUsLjg2LC4wNik7XG59XG5cbiN0ZXh0ZmluYWwge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0b3BhY2l0eTogMTtcblx0YW5pbWF0aW9uLW5hbWU6IHNob3dsYXN0O1xuXHRhbmltYXRpb24tZHVyYXRpb246IDcuNXM7XG5cdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG59XG5cbkBrZXlmcmFtZXMgc2hvd2xhc3Qge1xuXHQwJSB7b3BhY2l0eTogMDt9XG5cdDk5JSB7b3BhY2l0eTogMDt9XG5cdDEwMCUge29wYWNpdHk6IDE7fVxufVxuXG4uYW5pbWF0ZWQtdGV4dHtcblx0Y29sb3I6I2ZmZjtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Zm9udC1zaXplOiA0OHB4O1xuXHR3aWR0aDoxMDAlOyBcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdG92ZXJmbG93OmhpZGRlbjtcblx0aGVpZ2h0OjEwMHB4O1xuXG59XG5cbi5saWdodGVye1xuXHRvcGFjaXR5OiAwLjQ7XG59XG5cbi5hbmltYXRlZC1tYWluLXRleHR7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZy1sZWZ0OiAxMnB4O1xuXHRtaW4td2lkdGg6NzAlO1xuXHRmb250LXdlaWdodDpib2xkO1xufVxuXG4udGV4dC1kaXZ7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTE1MHB4KXtcblx0LmFuaW1hdGVkLXRleHR7XG5cdFx0Zm9udC1zaXplOiAzNnB4O1xuXHR9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3NXB4KXtcblx0LmFuaW1hdGVkLXRleHR7XG5cdFx0Zm9udC1zaXplOiAyMXB4O1xuXHRcdHBhZGRpbmctbGVmdDo3LjUlO1xuXHRcdG1hcmdpbjphdXRvO1xuXHR9XG5cblx0LmFuaW1hdGVkLW1haW4tdGV4dHtcblx0XHRtYXJnaW46YXV0bztcblx0XHRwYWRkaW5nLWxlZnQ6IDVweDtcblx0fVxuXG5cdC50ZXh0LWRpdntcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcblx0fVxuXG59XG5cblxuXG5cblxuIl19 */"],
      data: {
        animation: [_home_animations__WEBPACK_IMPORTED_MODULE_1__["fade"], _home_animations__WEBPACK_IMPORTED_MODULE_1__["slide"], _home_animations__WEBPACK_IMPORTED_MODULE_1__["animateHead"], _home_animations__WEBPACK_IMPORTED_MODULE_1__["animateContent"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css'],
          animations: [_home_animations__WEBPACK_IMPORTED_MODULE_1__["fade"], _home_animations__WEBPACK_IMPORTED_MODULE_1__["slide"], _home_animations__WEBPACK_IMPORTED_MODULE_1__["animateHead"], _home_animations__WEBPACK_IMPORTED_MODULE_1__["animateContent"]]
        }]
      }], function () {
        return [{
          type: _currentscreen_service__WEBPACK_IMPORTED_MODULE_2__["CurrentscreenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/managerdetail/managerdetail.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/managerdetail/managerdetail.component.ts ***!
    \**********************************************************/

  /*! exports provided: ManagerdetailComponent */

  /***/
  function srcAppManagerdetailManagerdetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagerdetailComponent", function () {
      return ManagerdetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _managers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./managers */
    "./src/app/managerdetail/managers.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManagerdetailComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_0_div_2_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagerdetailComponent_div_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "creatives");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_0_div_3_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagerdetailComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagerdetailComponent_div_0_div_2_Template, 7, 0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagerdetailComponent_div_0_div_3_Template, 7, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ravi Jangir");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "999 646 9559");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_0_Template_span_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.whatsapp("999 646 9559");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_0_Template_span_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.redirectTo("https://www.facebook.com/profile.php?id=100030344860721");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_0_Template_span_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.redirectTo("https://www.instagram.com/r.jangir1107/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.mobile);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mobile);
      }
    }

    function ManagerdetailComponent_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_1_div_2_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagerdetailComponent_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "EVENTS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_1_div_3_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagerdetailComponent_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_1_div_5_Template_span_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var manager_r25 = ctx.$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.redirectTo(manager_r25.number);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_1_div_5_Template_span_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var manager_r25 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r28.redirectTo(manager_r25.fb);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_1_div_5_Template_span_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var manager_r25 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29.redirectTo(manager_r25.insta);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var manager_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/managers/", manager_r25.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](manager_r25.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](manager_r25.number);
      }
    }

    function ManagerdetailComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagerdetailComponent_div_1_div_2_Template, 7, 0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagerdetailComponent_div_1_div_3_Template, 7, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManagerdetailComponent_div_1_div_5_Template, 13, 3, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.mobile);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mobile);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.events_managers);
      }
    }

    function ManagerdetailComponent_div_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_2_div_2_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r32.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagerdetailComponent_div_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_2_div_3_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r34.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r31.managers);
      }
    }

    function ManagerdetailComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagerdetailComponent_div_2_div_2_Template, 7, 0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagerdetailComponent_div_2_div_3_Template, 7, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Vivek Saurabh Verma");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "946 230 0696");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_2_Template_span_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.redirectTo(ctx_r36.whatsapp("946 230 0696"));
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_2_Template_span_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.redirectTo("https://www.facebook.com/viveksaurabh.verma");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_2_Template_span_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.redirectTo("https://www.instagram.com/viveksaurabhverma/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.mobile);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.mobile);
      }
    }

    function ManagerdetailComponent_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_3_div_2_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r42.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagerdetailComponent_div_3_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_3_div_3_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r44.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r41.managers);
      }
    }

    function ManagerdetailComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagerdetailComponent_div_3_div_2_Template, 7, 0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagerdetailComponent_div_3_div_3_Template, 7, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Rahul Yadav");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "855 980 7091");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_3_Template_span_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.whatsapp("855 980 7091");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_3_Template_span_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.redirectTo("https://www.facebook.com/profile.php?id=100003785771726");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_3_Template_span_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.redirectTo("https://www.instagram.com/rahul7414yadav/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Shashwat Kumar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "879 318 9752");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_3_Template_span_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.whatsapp("879 318 9752");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_3_Template_span_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.redirectTo("https://www.facebook.com/shashwat.kumar.77377");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_3_Template_span_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.redirectTo("https://www.instagram.com/shashwat.kumar19/?hl=en");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.mobile);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.mobile);
      }
    }

    function ManagerdetailComponent_div_4_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_4_div_2_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r55.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagerdetailComponent_div_4_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_4_div_3_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r57.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r54.managers);
      }
    }

    function ManagerdetailComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagerdetailComponent_div_4_div_2_Template, 7, 0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagerdetailComponent_div_4_div_3_Template, 7, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Aman Mishra");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "730 419 8634");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_4_Template_span_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.whatsapp("730 419 8634");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_4_Template_span_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r61.redirectTo("https://www.facebook.com/amanmishra.2999/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_4_Template_span_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r62.redirectTo("https://www.instagram.com/amannmishraa/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ritwik Kadu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "878 872 7737");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_4_Template_span_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r63.whatsapp("878 872 7737");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_4_Template_span_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r64.redirectTo("https://www.facebook.com/ritwik.kadu/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_4_Template_span_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r65.redirectTo("https://www.instagram.com/ritwikkadu/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.mobile);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.mobile);
      }
    }

    function ManagerdetailComponent_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_5_div_2_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r68.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagerdetailComponent_div_5_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Food & Beverages");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_5_div_3_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r70.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagerdetailComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagerdetailComponent_div_5_div_2_Template, 7, 0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagerdetailComponent_div_5_div_3_Template, 7, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "S. Anand Natarajan");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "984 910 0940");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_5_Template_span_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.whatsapp("984 910 0940");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_5_Template_span_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.redirectTo("https://www.facebook.com/anandnatarajan.sriram");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_5_Template_span_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.redirectTo("https://www.instagram.com/s.anand.n/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.mobile);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.mobile);
      }
    }

    function ManagerdetailComponent_div_6_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_6_div_2_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r78.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagerdetailComponent_div_6_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hospitality");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_6_div_3_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r80.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagerdetailComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagerdetailComponent_div_6_div_2_Template, 7, 0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagerdetailComponent_div_6_div_3_Template, 7, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Prasanna Telawane");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "917 258 5090");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_6_Template_span_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r82.whatsapp("917 258 5090");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_6_Template_span_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r84.redirectTo("https://m.facebook.com/prasanna.vivek.telawane");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_6_Template_span_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r85.redirectTo("https://www.instagram.com/prasutelawane/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.mobile);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.mobile);
      }
    }

    function ManagerdetailComponent_div_7_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_7_div_2_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r88.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagerdetailComponent_div_7_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Media and Publicity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_7_div_3_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r90.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagerdetailComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagerdetailComponent_div_7_div_2_Template, 7, 0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagerdetailComponent_div_7_div_3_Template, 7, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Shashank Tomar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "956 008 6961");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_7_Template_span_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r92.redirectTo("https://api.whatsapp.com/send?phone=+9560086961");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_7_Template_span_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r94.redirectTo("https://www.facebook.com/shashanktomar.11");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_7_Template_span_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r95.redirectTo("https://www.instagram.com/shashankt.11/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Siddharth Singh");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "996 780 6330");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_7_Template_span_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r96.whatsapp("996 780 6330");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_7_Template_span_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r97.redirectTo("https://www.facebook.com/sid211101");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_7_Template_span_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r98.redirectTo("https://www.instagram.com/sid_singh476/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.mobile);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.mobile);
      }
    }

    var ManagerdetailComponent = /*#__PURE__*/function () {
      function ManagerdetailComponent(route, router) {
        _classCallCheck(this, ManagerdetailComponent);

        this.route = route;
        this.router = router;
        this.managers = "events";
        this.events_managers = _managers__WEBPACK_IMPORTED_MODULE_1__["events_managers"];
        this.mobile = false;
      }

      _createClass(ManagerdetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.route.params.subscribe(function (params) {
            _this5.managers = params['dep'];
          });
          setInterval(function () {
            return _this5.intervalFunction();
          });
        }
      }, {
        key: "redirectTo",
        value: function redirectTo(name) {
          name = name.replace(' ', '');
          name = name.replace(' ', '');

          if (name.length == 10) {
            name = 'https://api.whatsapp.com/send?phone=+91' + name;
          }

          if (name.includes('http')) // window.location.href=name;
            window.open(name);
          this.router.navigate([name]);
        }
      }, {
        key: "intervalFunction",
        value: function intervalFunction() {
          if (window.innerWidth < 675) this.mobile = true;else this.mobile = false;
        }
      }, {
        key: "whatsapp",
        value: function whatsapp(number) {
          number = number.replace(' ', '');
          number = number.replace(' ', ''); // window.location.href='https://api.whatsapp.com/send?phone=+91'+number;

          window.open('https://api.whatsapp.com/send?phone=+91' + number, '_blank');
        }
      }]);

      return ManagerdetailComponent;
    }();

    ManagerdetailComponent.ɵfac = function ManagerdetailComponent_Factory(t) {
      return new (t || ManagerdetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ManagerdetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManagerdetailComponent,
      selectors: [["app-managerdetail"]],
      decls: 8,
      vars: 8,
      consts: [["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [1, "container", "container-head"], ["class", "row text-center head-row", 4, "ngIf"], ["class", "row head-row", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-3", "main-manager-col"], [1, "row"], [1, "col-12", "manager-col"], ["src", "assets/managers/Ravi-min.png", 1, "manager-img"], [1, "manager-name", "text-center"], [1, "manager-num", "text-center"], [1, "row", "mt-4", 2, "padding-bottom", "32px"], [1, "col-12", "text-center", "icons"], [1, "fa", "fa-whatsapp", 3, "click"], [1, "fa", "fa-facebook", 3, "click"], [1, "fa", "fa-instagram", 3, "click"], [1, "row", "text-center", "head-row"], [1, "col-10"], [1, "text-left", "text-md-center"], ["src", "assets/creatives_manager_head.png", "id", "creatives-head-new", 1, "image-head"], [1, "col-2"], ["src", "/assets/cross.png", "id", "new-creatives-cross", 1, "cross", 3, "click"], [1, "row", "head-row"], [1, "events-head", "text-center", "text-uppercase"], [1, "text-right"], ["src", "/assets/cross.png", 1, "cross", "cross-creatives-mobile", 3, "click"], [1, "row", "justify-content-around"], ["class", "col-12 col-md-3 main-manager-col", 4, "ngFor", "ngForOf"], ["src", "assets/events_head.png", 1, "image-head"], ["src", "/assets/cross.png", 1, "cross", 3, "click"], [1, "events-head", "text-center"], ["id", "events-cross", "src", "/assets/cross.png", 1, "cross", 3, "click"], [1, "manager-img", 3, "src"], ["src", "assets/managers/Vivek-min.png", 1, "manager-img"], ["src", "assets/web_head.png", "id", "creatives-head", 1, "image-head"], ["id", "infra-container-head", 1, "container", "container-head"], [1, "col-12", "col-md-3", "main-manager-col", "two-people-col"], ["src", "assets/managers/rahul-yadav-min.png", 1, "manager-img"], ["src", "assets/managers/Shashwat-min.png", 1, "manager-img"], ["src", "assets/infra_head.png", "id", "infra-head", 1, "image-head"], ["id", "marketing-container-head", 1, "container", "container-head"], ["src", "assets/managers/Aman-min.png", 1, "manager-img"], ["src", "assets/managers/Ritwik-min.png", 1, "manager-img"], ["src", "assets/marketing_head.png", "id", "marketing-head", 1, "image-head"], ["src", "assets/managers/Anand-min.png", 1, "manager-img"], ["src", "assets/fnb_head.png", "id", "fnb-head", 1, "image-head"], ["src", "assets/managers/Prasanna-min.png", 1, "manager-img"], ["src", "assets/hospitality_head.png", "id", "hospitality-head", 1, "image-head"], ["src", "assets/managers/Shashank-min.png", 1, "manager-img"], ["src", "assets/managers/Siddharth-min.png", 1, "manager-img"], ["src", "assets/media_head.png", "id", "media-head", 1, "image-head"]],
      template: function ManagerdetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ManagerdetailComponent_div_0_Template, 18, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagerdetailComponent_div_1_Template, 6, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagerdetailComponent_div_2_Template, 18, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagerdetailComponent_div_3_Template, 31, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ManagerdetailComponent_div_4_Template, 31, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManagerdetailComponent_div_5_Template, 18, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ManagerdetailComponent_div_6_Template, 18, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ManagerdetailComponent_div_7_Template, 31, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.managers == "creatives");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.managers == "events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.managers == "web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.managers == "infrastructure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.managers == "marketing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.managers == "fnb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.managers == "hospitality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.managers == "mediaandpublicity");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".main-manager-col[_ngcontent-%COMP%]{\n\tmargin-right: 1px;\n}\n.events-head[_ngcontent-%COMP%]{\n\tcolor:#fff;\n\tfont-size:32px;\n\tmargin-bottom: 0;\n\ttransform:translateX(12%);\n\tfont-weight:bold;\n}\n.head-text[_ngcontent-%COMP%]{\n\tfont-size:64px;\n\tcolor:#fff;\n\tmargin-bottom:0;\n}\n.head-row[_ngcontent-%COMP%]{\n\tborder-bottom:2px solid #fff;\n}\n.cross[_ngcontent-%COMP%]{\n\theight:30px;\n\twidth:30px;\n\ttext-align: right;\n\tmargin-top:15%;\n\ttransform: rotate(0);\n\ttransition: 0.5s;\n\tcursor:pointer;\n}\n.cross[_ngcontent-%COMP%]:hover{\n\ttransform: translate3d(225%,10%,0) rotate(90deg);\n\ttransition: 0.5s;\n}\n.manager-img[_ngcontent-%COMP%]{\n\twidth:100%;\n\t-o-object-fit:cover;\n\t   object-fit:cover;\n\t-o-object-position: top;\n\t   object-position: top;\n\tmax-height: 300px;\n\tmargin-top: 32px;\n}\n.manager-name[_ngcontent-%COMP%], .manager-num[_ngcontent-%COMP%]{\n\tcolor:#ffffff;\n}\n.manager-name[_ngcontent-%COMP%]{\n\tfont-size:24px;\n\tfont-weight: bold;\n\tmargin-bottom: 0;\n}\n.manager-num[_ngcontent-%COMP%]{\n\tfont-size: 20px;\n}\n.manager-col[_ngcontent-%COMP%]{\n\tborder-bottom:2px solid #fff;\n}\n.fa[_ngcontent-%COMP%]{\n\tfont-size: 28px;\n\tcolor:#ffffff;\n\tborder:1px solid #ffffff;\n\tborder-radius: 100%; \n\theight:48px; \n\twidth:48px; \n\ttext-align: center;\n\tpadding-top:8px;\n\tmargin-right:16px;\n\topacity:0.5;\n\ttransition:opacity 0.25s ease-in;\n}\n.fa[_ngcontent-%COMP%]:last-child{\n\tmargin-right: 0;\n}\n\n.image-head[_ngcontent-%COMP%]{\n\tmargin-left:15%;\n\tmargin-bottom: -16px;\n}\n#events-cross[_ngcontent-%COMP%]{\n\ttransform: translate3d(60%,30%,0);\n\tmargin-top:12.5%;\n}\n@media screen and (max-width:675px){\n\t.head-text[_ngcontent-%COMP%]{\n\t\tfont-size:20px;\n\t}\n\n\t.cross[_ngcontent-%COMP%]{\n\t\theight:16px;\n\t\twidth:16px;\n\t\ttransform: translateY(30%);\n\t}\n\n\t.image-head[_ngcontent-%COMP%]{\n\t\theight:30px;\n\t\t-o-object-fit: cover;\n\t\t   object-fit: cover;\n\t\tmargin-bottom: -16px;\n\t\tmargin-left: -16px;\n\t}\n\n\t#events-cross[_ngcontent-%COMP%]{\n\t\tmargin-top:50%;\n\t}\n\n\t.fa[_ngcontent-%COMP%]{\n\t\tfont-size:24px;\n\t\topacity:1;\n\t\theight:40px; \n\t\twidth:40px; \n\t\tpadding-top:6px;\n\t\tmargin-right:16px;\n\t}\n\n}\n\n.fa[_ngcontent-%COMP%]:hover{\n\topacity:1;\n\ttransition:0.25s ease-in;\n  cursor: pointer;\n}\n.container-head[_ngcontent-%COMP%]{\n\tmax-width: 70vw;\n}\n.cross[_ngcontent-%COMP%]{\n\ttransform: translate3d(225%,10%,0);\n}\n#creatives-head[_ngcontent-%COMP%]{\n\tmargin-left:10%;\n}\n#infra-head[_ngcontent-%COMP%]{\n\tmargin-left:-1%;\n}\n#marketing-head[_ngcontent-%COMP%]{\n\tmargin-left:7.5%;\n\theight:70px;\n}\n#infra-head[_ngcontent-%COMP%]{\n\theight:80px;\n}\n@media screen and (max-width:1280px){\n\t#infra-container-head[_ngcontent-%COMP%], #marketing-container-head[_ngcontent-%COMP%]{\n\t\tmax-width:80vw;\n\t}\n}\n#hospitality-head[_ngcontent-%COMP%]{\n\tmax-width:100%;\n\tmargin-left: 10%;\n}\n#fnb-head[_ngcontent-%COMP%]{\n\tmax-width:75%;\n\tmargin-left: 25%;\n}\n#creatives-head-new[_ngcontent-%COMP%]{\n\tmax-width:75%;\n\tmargin-left: 20%;\n\tmargin-bottom:-2%;\n}\n#new-creatives-cross[_ngcontent-%COMP%]{\n\ttransform: translate3d(225%,-25%,0);\n\ttransition: 0.5s;\n}\n#new-creatives-cross[_ngcontent-%COMP%]:hover{\n\ttransform: translate3d(225%,-25%,0) rotate(90deg);\n\ttransition: 0.5s;\n}\n#media-head[_ngcontent-%COMP%]{\n\tmax-width:90%;\n\tmargin-left: 15%;\n\tmargin-bottom:-5%;\n}\n.cross-creatives-mobile[_ngcontent-%COMP%]{\n\ttransform: translate3d(100%,50%,0);\n}\n@media screen and (min-width:675px){\n\t.two-people-col[_ngcontent-%COMP%]{\n\t\tmargin-right: 72px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlcmRldGFpbC9tYW5hZ2VyZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBRUE7Q0FDQyxVQUFVO0NBQ1YsY0FBYztDQUNkLGdCQUFnQjtDQUNoQix5QkFBeUI7Q0FDekIsZ0JBQWdCO0FBQ2pCO0FBSUE7Q0FDQyxjQUFjO0NBQ2QsVUFBVTtDQUNWLGVBQWU7QUFDaEI7QUFFQTtDQUNDLDRCQUE0QjtBQUM3QjtBQUVBO0NBQ0MsV0FBVztDQUNYLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsY0FBYztDQUNkLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmO0FBRUE7Q0FDQyxnREFBZ0Q7Q0FDaEQsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxVQUFVO0NBQ1YsbUJBQWdCO0lBQWhCLGdCQUFnQjtDQUNoQix1QkFBb0I7SUFBcEIsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLGFBQWE7QUFDZDtBQUVBO0NBQ0MsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLGVBQWU7QUFDaEI7QUFFQTtDQUNDLDRCQUE0QjtBQUM3QjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7Q0FDeEIsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLGdDQUFnQztBQUNqQztBQUVBO0NBQ0MsZUFBZTtBQUNoQjtBQUVBLDJCQUEyQjtBQUMzQjtDQUNDLGVBQWU7Q0FDZixvQkFBb0I7QUFDckI7QUFFQTtDQUNDLGlDQUFpQztDQUNqQyxnQkFBZ0I7QUFDakI7QUFFQTtDQUNDO0VBQ0MsY0FBYztDQUNmOztDQUVBO0VBQ0MsV0FBVztFQUNYLFVBQVU7RUFDViwwQkFBMEI7Q0FDM0I7O0NBRUE7RUFDQyxXQUFXO0VBQ1gsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsY0FBYztDQUNmOztDQUVBO0VBQ0MsY0FBYztFQUNkLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7O0FBRUQ7QUFHQSwwQkFBMEI7QUFDMUI7Q0FDQyxTQUFTO0NBQ1Qsd0JBQXdCO0VBQ3ZCLGVBQWU7QUFDakI7QUFFQTtDQUNDLGVBQWU7QUFDaEI7QUFFQTtDQUNDLGtDQUFrQztBQUNuQztBQUVBO0NBQ0MsZUFBZTtBQUNoQjtBQUVBO0NBQ0MsZUFBZTtBQUNoQjtBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFdBQVc7QUFDWjtBQUVBO0NBQ0MsV0FBVztBQUNaO0FBRUE7Q0FDQztFQUNDLGNBQWM7Q0FDZjtBQUNEO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0MsbUNBQW1DO0NBQ25DLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsaURBQWlEO0NBQ2pELGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLGtDQUFrQztBQUNuQztBQUVBO0NBQ0M7RUFDQyxrQkFBa0I7Q0FDbkI7QUFDRCIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXJkZXRhaWwvbWFuYWdlcmRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKipleHBlcmltZW50cyoqKiovXG4ubWFpbi1tYW5hZ2VyLWNvbHtcblx0bWFyZ2luLXJpZ2h0OiAxcHg7XG59XG5cbi5ldmVudHMtaGVhZHtcblx0Y29sb3I6I2ZmZjtcblx0Zm9udC1zaXplOjMycHg7XG5cdG1hcmdpbi1ib3R0b206IDA7XG5cdHRyYW5zZm9ybTp0cmFuc2xhdGVYKDEyJSk7XG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG5cblxuXG4uaGVhZC10ZXh0e1xuXHRmb250LXNpemU6NjRweDtcblx0Y29sb3I6I2ZmZjtcblx0bWFyZ2luLWJvdHRvbTowO1xufVxuXG4uaGVhZC1yb3d7XG5cdGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNmZmY7XG59XG5cbi5jcm9zc3tcblx0aGVpZ2h0OjMwcHg7XG5cdHdpZHRoOjMwcHg7XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRtYXJnaW4tdG9wOjE1JTtcblx0dHJhbnNmb3JtOiByb3RhdGUoMCk7XG5cdHRyYW5zaXRpb246IDAuNXM7XG5cdGN1cnNvcjpwb2ludGVyO1xufVxuXG4uY3Jvc3M6aG92ZXJ7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjI1JSwxMCUsMCkgcm90YXRlKDkwZGVnKTtcblx0dHJhbnNpdGlvbjogMC41cztcbn1cblxuLm1hbmFnZXItaW1ne1xuXHR3aWR0aDoxMDAlO1xuXHRvYmplY3QtZml0OmNvdmVyO1xuXHRvYmplY3QtcG9zaXRpb246IHRvcDtcblx0bWF4LWhlaWdodDogMzAwcHg7XG5cdG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5tYW5hZ2VyLW5hbWUsLm1hbmFnZXItbnVte1xuXHRjb2xvcjojZmZmZmZmO1xufVxuXG4ubWFuYWdlci1uYW1le1xuXHRmb250LXNpemU6MjRweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5tYW5hZ2VyLW51bXtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWFuYWdlci1jb2x7XG5cdGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNmZmY7XG59XG5cbi5mYXtcblx0Zm9udC1zaXplOiAyOHB4O1xuXHRjb2xvcjojZmZmZmZmO1xuXHRib3JkZXI6MXB4IHNvbGlkICNmZmZmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDEwMCU7IFxuXHRoZWlnaHQ6NDhweDsgXG5cdHdpZHRoOjQ4cHg7IFxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmctdG9wOjhweDtcblx0bWFyZ2luLXJpZ2h0OjE2cHg7XG5cdG9wYWNpdHk6MC41O1xuXHR0cmFuc2l0aW9uOm9wYWNpdHkgMC4yNXMgZWFzZS1pbjtcbn1cblxuLmZhOmxhc3QtY2hpbGR7XG5cdG1hcmdpbi1yaWdodDogMDtcbn1cblxuLyoqKioqSW1hZ2UgaGVhZGluZ3MqKioqKioqL1xuLmltYWdlLWhlYWR7XG5cdG1hcmdpbi1sZWZ0OjE1JTtcblx0bWFyZ2luLWJvdHRvbTogLTE2cHg7XG59XG5cbiNldmVudHMtY3Jvc3N7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNjAlLDMwJSwwKTtcblx0bWFyZ2luLXRvcDoxMi41JTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NzVweCl7XG5cdC5oZWFkLXRleHR7XG5cdFx0Zm9udC1zaXplOjIwcHg7XG5cdH1cblxuXHQuY3Jvc3N7XG5cdFx0aGVpZ2h0OjE2cHg7XG5cdFx0d2lkdGg6MTZweDtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAlKTtcblx0fVxuXG5cdC5pbWFnZS1oZWFke1xuXHRcdGhlaWdodDozMHB4O1xuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdG1hcmdpbi1ib3R0b206IC0xNnB4O1xuXHRcdG1hcmdpbi1sZWZ0OiAtMTZweDtcblx0fVxuXG5cdCNldmVudHMtY3Jvc3N7XG5cdFx0bWFyZ2luLXRvcDo1MCU7XG5cdH1cblxuXHQuZmF7XG5cdFx0Zm9udC1zaXplOjI0cHg7XG5cdFx0b3BhY2l0eToxO1xuXHRcdGhlaWdodDo0MHB4OyBcblx0XHR3aWR0aDo0MHB4OyBcblx0XHRwYWRkaW5nLXRvcDo2cHg7XG5cdFx0bWFyZ2luLXJpZ2h0OjE2cHg7XG5cdH1cblxufVxuXG5cbi8qKioqKipMYXN0IGNoYW5nZXMqKioqKioqL1xuLmZhOmhvdmVye1xuXHRvcGFjaXR5OjE7XG5cdHRyYW5zaXRpb246MC4yNXMgZWFzZS1pbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGFpbmVyLWhlYWR7XG5cdG1heC13aWR0aDogNzB2dztcbn1cblxuLmNyb3Nze1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIyNSUsMTAlLDApO1xufVxuXG4jY3JlYXRpdmVzLWhlYWR7XG5cdG1hcmdpbi1sZWZ0OjEwJTtcbn1cblxuI2luZnJhLWhlYWR7XG5cdG1hcmdpbi1sZWZ0Oi0xJTtcbn1cblxuI21hcmtldGluZy1oZWFke1xuXHRtYXJnaW4tbGVmdDo3LjUlO1xuXHRoZWlnaHQ6NzBweDtcbn1cblxuI2luZnJhLWhlYWR7XG5cdGhlaWdodDo4MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCl7XG5cdCNpbmZyYS1jb250YWluZXItaGVhZCwjbWFya2V0aW5nLWNvbnRhaW5lci1oZWFke1xuXHRcdG1heC13aWR0aDo4MHZ3O1xuXHR9XG59XG5cbiNob3NwaXRhbGl0eS1oZWFke1xuXHRtYXgtd2lkdGg6MTAwJTtcblx0bWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuI2ZuYi1oZWFke1xuXHRtYXgtd2lkdGg6NzUlO1xuXHRtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4jY3JlYXRpdmVzLWhlYWQtbmV3e1xuXHRtYXgtd2lkdGg6NzUlO1xuXHRtYXJnaW4tbGVmdDogMjAlO1xuXHRtYXJnaW4tYm90dG9tOi0yJTtcbn1cblxuI25ldy1jcmVhdGl2ZXMtY3Jvc3N7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjI1JSwtMjUlLDApO1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4jbmV3LWNyZWF0aXZlcy1jcm9zczpob3Zlcntcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMjUlLC0yNSUsMCkgcm90YXRlKDkwZGVnKTtcblx0dHJhbnNpdGlvbjogMC41cztcbn1cblxuI21lZGlhLWhlYWR7XG5cdG1heC13aWR0aDo5MCU7XG5cdG1hcmdpbi1sZWZ0OiAxNSU7XG5cdG1hcmdpbi1ib3R0b206LTUlO1xufVxuXG4uY3Jvc3MtY3JlYXRpdmVzLW1vYmlsZXtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDUwJSwwKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2NzVweCl7XG5cdC50d28tcGVvcGxlLWNvbHtcblx0XHRtYXJnaW4tcmlnaHQ6IDcycHg7XG5cdH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerdetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-managerdetail',
          templateUrl: './managerdetail.component.html',
          styleUrls: ['./managerdetail.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/managerdetail/managers.ts":
  /*!*******************************************!*\
    !*** ./src/app/managerdetail/managers.ts ***!
    \*******************************************/

  /*! exports provided: events_managers */

  /***/
  function srcAppManagerdetailManagersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "events_managers", function () {
      return events_managers;
    });

    var events_managers = [{
      name: 'Aditya Agarwal',
      number: "972 539 8965",
      fb: 'https://www.facebook.com/profile.php?id=100027327345411',
      insta: 'https://www.instagram.com/aditya._.2812/',
      image: 'Aditya-min.png'
    }, {
      name: 'Ashay Arun Veer',
      number: "970 284 5935",
      fb: 'https://www.facebook.com/ashay.veer.9',
      insta: 'https://www.instagram.com/ashay.veer/',
      image: 'Ashay-min.png'
    }, {
      name: 'Deepanshu Mathankar',
      number: "996 722 1353",
      fb: 'https://www.facebook.com/deepanshu.mathankar.9',
      insta: 'https://www.instagram.com/_d.m._08/',
      image: 'Deepanshu-min.png'
    }, {
      name: 'Krishnakant Suryawanshi',
      number: "774 702 5637",
      fb: 'https://www.facebook.com/profile.php?id=100009027406299',
      insta: 'https://www.instagram.com/_mr_krshna_/',
      image: 'Krishnakant.png'
    }, {
      name: 'Nisarg Toliya',
      number: "992 023 1926",
      fb: 'https://www.facebook.com/sunil.narine123',
      insta: 'https://www.instagram.com/awesome_nisarg/',
      image: 'Nisarg-min.png'
    }, {
      name: 'Nitesh Kumar',
      number: "637 784 7750",
      fb: 'https://www.facebook.com/profile.php?id=100008669533650',
      insta: 'https://www.instagram.com/nitesh._saran/',
      image: 'NItesh-min.png'
    }, {
      name: 'Rahul Shanbhag',
      number: "916 709 6849",
      fb: 'https://www.facebook.com/rahul.shanbhag.31',
      insta: 'https://www.instagram.com/rahul_shanbhag/',
      image: 'rahul-Shanbhag-min.png'
    }, {
      name: 'Rohit Karandikar',
      number: "976 988 9950",
      fb: 'https://www.facebook.com/rohit.karandikar.7/',
      insta: 'https://www.instagram.com/rohitkarandikar/',
      image: 'Rohit.png'
    }, {
      name: 'Shubham Anand',
      number: "620 444 7516",
      fb: 'https://www.facebook.com/toshubhamanand',
      insta: 'https://www.instagram.com/shubham.anand22/',
      image: 'Shubham A-min.png'
    }, {
      name: 'Shubham Gautam',
      number: "637 696 0986",
      fb: 'https://www.facebook.com/profile.php?id=100023492582460',
      insta: 'https://www.instagram.com/shubhu_087/',
      image: 'Shubham G-min.png'
    }, {
      name: 'Tushar Jindal',
      number: "916 656 5064",
      fb: 'https://www.facebook.com/tushar.jindal.940',
      insta: 'https://www.instagram.com/tushar.jindal.940/?hl=en',
      image: 'Tushar-min.png'
    }, {
      name: 'Yash Jain',
      number: "997 797 0523",
      fb: 'https://www.facebook.com/ash.guts',
      insta: 'https://www.instagram.com/yash.jain999/',
      image: 'Yash-min.png'
    }];
    /***/
  },

  /***/
  "./src/app/results/results.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/results/results.component.ts ***!
    \**********************************************/

  /*! exports provided: ResultsComponent */

  /***/
  function srcAppResultsResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultsComponent", function () {
      return ResultsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ResultsComponent_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResultsComponent_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RESULTS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResultsComponent_p_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_p_6_Template_img_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.redirect("");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResultsComponent_p_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_p_7_Template_img_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.redirect("");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ResultsComponent = /*#__PURE__*/function () {
      function ResultsComponent(route, router) {
        _classCallCheck(this, ResultsComponent);

        this.route = route;
        this.router = router;
        this.mobile = false;
      }

      _createClass(ResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          setInterval(function () {
            return _this6.intervalFn();
          });
        }
      }, {
        key: "intervalFn",
        value: function intervalFn() {
          if (window.innerWidth < 675) this.mobile = true;else this.mobile = false;
        }
      }, {
        key: "redirect",
        value: function redirect(path) {
          this.router.navigate([path]);
        }
      }]);

      return ResultsComponent;
    }();

    ResultsComponent.ɵfac = function ResultsComponent_Factory(t) {
      return new (t || ResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultsComponent,
      selectors: [["app-results"]],
      decls: 48,
      vars: 4,
      consts: [[1, "container-fluid"], [1, "row", "text-center", "head-row"], [1, "col-10"], ["class", "text-left text-md-center", 4, "ngIf"], ["class", "text-center text-header mobile-text-results", 4, "ngIf"], [1, "col-2"], [4, "ngIf"], [1, "row", "justify-content-around"], [1, "col-12", "col-md-3"], [1, "row"], [1, "col-12", "manager-col"], [1, "manager-num", "text-center", "mt-2", "mb-0"], [1, "image"], ["src", "assets/results/1.png", 1, "manager-img"], [1, "medal-img"], ["src", "assets/gold.png"], ["href", "https://www.facebook.com/story.php?story_fbid=250180469572878&id=100037427807045", "target", "_blank", 1, "round-button"], ["id", "play", 1, "fa", "fa-play"], [1, "manager-name", "text-center"], [1, "manager-num", "text-center", "mt-2", "position-label", "mb-0"], ["src", "assets/results/2.png", 1, "manager-img"], ["src", "assets/silver.png"], ["href", "https://www.facebook.com/story.php?story_fbid=243064550315925&id=100038371443841", "target", "_blank", 1, "round-button"], ["src", "assets/results/3.png", 1, "manager-img"], ["src", "assets/bronze.png"], ["href", "https://www.facebook.com/story.php?story_fbid=2719501461627084&id=100007017701738", "target", "_blank", 1, "round-button"], [1, "text-left", "text-md-center"], ["src", "assets/reversevc.png", 1, "image-head"], [1, "text-center", "text-header", "mobile-text-results"], ["id", "events-cross", "src", "/assets/cross.png", 1, "cross", 3, "click"], ["id", "events-cross-mobile", "src", "/assets/cross.png", 1, "cross", 3, "click"]],
      template: function ResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResultsComponent_p_3_Template, 2, 0, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResultsComponent_p_4_Template, 2, 0, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResultsComponent_p_6_Template, 2, 0, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ResultsComponent_p_7_Template, 2, 0, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1st");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Anchal Yadav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2nd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Rahul Kumawat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "3rd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Rajat Mehra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".head-text[_ngcontent-%COMP%]{\n\tfont-size:64px;\n\tcolor:#fff;\n\tmargin-bottom:0;\n}\n\n.head-row[_ngcontent-%COMP%]{\n\tborder-bottom:2px solid #fff;\n\ttransform: translateY(-35%);\n}\n\n.cross[_ngcontent-%COMP%]{\n\theight:30px;\n\twidth:30px;\n\ttext-align: right;\n\ttransform: translateY(4px) rotate(0);\n\ttransition: 0.5s;\n\tcursor:pointer;\n}\n\n.cross[_ngcontent-%COMP%]:hover{\n\ttransform: translateY(4px) rotate(90deg);\n\ttransition: 0.5s;\n}\n\n.manager-img[_ngcontent-%COMP%]{\n\twidth:300px;\n\t-o-object-fit:cover;\n\t   object-fit:cover;\n\t-o-object-position: top;\n\t   object-position: top;\n\theight: 275px;\n}\n\n.manager-name[_ngcontent-%COMP%], .manager-num[_ngcontent-%COMP%]{\n\tfont-size:24px;\n\tcolor:#ffffff;\n}\n\n.manager-name[_ngcontent-%COMP%]{\n\tfont-weight: bold;\n\tmargin-bottom: 0;\n\tmargin-top:32px;\n}\n\n.fa[_ngcontent-%COMP%]{\n\tfont-size: 32px;\n\tcolor:#ffffff;\n\tborder:1px solid #ffffff;\n\tborder-radius: 100%; \n\theight:56px; \n\twidth:56px; \n\ttext-align: center;\n\tpadding-top:10px;\n\tmargin-right:14px;\n\topacity:0.8;\n}\n\n.fa[_ngcontent-%COMP%]:last-child{\n\tmargin-right: 0;\n}\n\n\n\n.image-head[_ngcontent-%COMP%]{\n\theight:100px;\n\tmargin-bottom: -32px;\n}\n\n#events-cross[_ngcontent-%COMP%]{\n\tmargin-top:12.5%;\n}\n\n\n\n.image[_ngcontent-%COMP%]{\n\twidth:300px;\n\theight: 275px;\n\tposition: relative;\n\tmargin:auto;\n}\n\n.medal-img[_ngcontent-%COMP%]{\n\tposition: absolute;\n\ttext-align:center;\n\twidth: 100%;\n\tbottom:-15%;\n}\n\n.medal-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n\twidth:40%;\n}\n\n@media screen and (max-width:675px){\n\t.head-text[_ngcontent-%COMP%]{\n\t\tfont-size:20px;\n\t}\n\n\t.cross[_ngcontent-%COMP%]{\n\t\theight:16px;\n\t\twidth:16px;\n\t\ttransform: translateY(0px);\n\t}\n\n\n\t#events-cross[_ngcontent-%COMP%]{\n\t\tmargin-top:50%;\n\t}\n\n\t.text-header[_ngcontent-%COMP%]{\n\t\tcolor:#fff;\n\t\tfont-weight: bold;\n\t\tmargin-bottom: 0;\n\t\ttransform: translateX(24px);\n\t}\n\n\t.head-row[_ngcontent-%COMP%]{\n\t\ttransform: translateY(-0%);\n\t}\n\n\t.position-label[_ngcontent-%COMP%]{\n\t\tmargin-top:64px !important;\n\t}\n\n}\n\n\n\n.round-button[_ngcontent-%COMP%] {\n\tposition:absolute;\n\ttop:35%;\n\tleft:36%;\n\tbox-sizing: border-box;\n\tdisplay:block;\n\twidth:80px;\n\theight:80px;\n\tpadding-top: 14px;\n\tpadding-left: 8px;\n\tline-height: 20px;\n\tborder: 6px solid #fff;\n\tborder-radius: 50%;\n\tcolor:#0a193b;\n\ttext-align:center;\n\ttext-decoration:none;\n\tbackground-color: white;\n\tfont-size:20px;\n\tfont-weight:bold;\n\ttransition: all 0.3s ease;\n}\n\n#play[_ngcontent-%COMP%]{\n\tcolor:#0a193b;\n\ttransform: translateY(-10%);\n\topacity: 1;\n}\n\n.round-button[_ngcontent-%COMP%]:hover {\n\tbackground-color: white;\n\tbox-shadow: 0px 0px 10px #0A193B;\n}\n\n.mobile-text-results[_ngcontent-%COMP%]{\n\tfont-size: 40px;\n}\n\n#events-cross-mobile[_ngcontent-%COMP%]{\n\theight:25px;\n\twidth:25px;\n\ttransform: translate3d(0,70%,0);\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxjQUFjO0NBQ2QsVUFBVTtDQUNWLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsb0NBQW9DO0NBQ3BDLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyx3Q0FBd0M7Q0FDeEMsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLG1CQUFnQjtJQUFoQixnQkFBZ0I7Q0FDaEIsdUJBQW9CO0lBQXBCLG9CQUFvQjtDQUNwQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsYUFBYTtBQUNkOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixlQUFlO0FBQ2hCOztBQUdBO0NBQ0MsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7Q0FDeEIsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsV0FBVztBQUNaOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQSwyQkFBMkI7O0FBQzNCO0NBQ0MsWUFBWTtDQUNaLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQSw2Q0FBNkM7O0FBQzdDO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsV0FBVztBQUNaOztBQUVBO0NBQ0MsU0FBUztBQUNWOztBQUtBO0NBQ0M7RUFDQyxjQUFjO0NBQ2Y7O0NBRUE7RUFDQyxXQUFXO0VBQ1gsVUFBVTtFQUNWLDBCQUEwQjtDQUMzQjs7O0NBR0E7RUFDQyxjQUFjO0NBQ2Y7O0NBRUE7RUFDQyxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiwyQkFBMkI7Q0FDNUI7O0NBRUE7RUFDQywwQkFBMEI7Q0FDM0I7O0NBRUE7RUFDQywwQkFBMEI7Q0FDM0I7O0FBRUQ7O0FBR0EsdUJBQXVCOztBQUN2QjtDQUNDLGlCQUFpQjtDQUNqQixPQUFPO0NBQ1AsUUFBUTtDQUNSLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2IsVUFBVTtDQUNWLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLHVCQUF1QjtDQUN2QixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsVUFBVTtBQUNYOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLCtCQUErQjs7QUFFaEMiLCJmaWxlIjoic3JjL2FwcC9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkLXRleHR7XG5cdGZvbnQtc2l6ZTo2NHB4O1xuXHRjb2xvcjojZmZmO1xuXHRtYXJnaW4tYm90dG9tOjA7XG59XG5cbi5oZWFkLXJvd3tcblx0Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2ZmZjtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zNSUpO1xufVxuXG4uY3Jvc3N7XG5cdGhlaWdodDozMHB4O1xuXHR3aWR0aDozMHB4O1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCkgcm90YXRlKDApO1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xuXHRjdXJzb3I6cG9pbnRlcjtcbn1cblxuLmNyb3NzOmhvdmVye1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KSByb3RhdGUoOTBkZWcpO1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ubWFuYWdlci1pbWd7XG5cdHdpZHRoOjMwMHB4O1xuXHRvYmplY3QtZml0OmNvdmVyO1xuXHRvYmplY3QtcG9zaXRpb246IHRvcDtcblx0aGVpZ2h0OiAyNzVweDtcbn1cblxuLm1hbmFnZXItbmFtZSwubWFuYWdlci1udW17XG5cdGZvbnQtc2l6ZToyNHB4O1xuXHRjb2xvcjojZmZmZmZmO1xufVxuXG4ubWFuYWdlci1uYW1le1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWFyZ2luLWJvdHRvbTogMDtcblx0bWFyZ2luLXRvcDozMnB4O1xufVxuXG5cbi5mYXtcblx0Zm9udC1zaXplOiAzMnB4O1xuXHRjb2xvcjojZmZmZmZmO1xuXHRib3JkZXI6MXB4IHNvbGlkICNmZmZmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDEwMCU7IFxuXHRoZWlnaHQ6NTZweDsgXG5cdHdpZHRoOjU2cHg7IFxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmctdG9wOjEwcHg7XG5cdG1hcmdpbi1yaWdodDoxNHB4O1xuXHRvcGFjaXR5OjAuODtcbn1cblxuLmZhOmxhc3QtY2hpbGR7XG5cdG1hcmdpbi1yaWdodDogMDtcbn1cblxuLyoqKioqSW1hZ2UgaGVhZGluZ3MqKioqKioqL1xuLmltYWdlLWhlYWR7XG5cdGhlaWdodDoxMDBweDtcblx0bWFyZ2luLWJvdHRvbTogLTMycHg7XG59XG5cbiNldmVudHMtY3Jvc3N7XG5cdG1hcmdpbi10b3A6MTIuNSU7XG59XG5cbi8qKioqKioqKkFic29sdXRlbHkgcG9zaXRpb25pbmcgbGVhdmVzKioqKioqKi9cbi5pbWFnZXtcblx0d2lkdGg6MzAwcHg7XG5cdGhlaWdodDogMjc1cHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bWFyZ2luOmF1dG87XG59XG5cbi5tZWRhbC1pbWd7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3R0b206LTE1JTtcbn1cblxuLm1lZGFsLWltZyBpbWd7XG5cdHdpZHRoOjQwJTtcbn1cblxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NzVweCl7XG5cdC5oZWFkLXRleHR7XG5cdFx0Zm9udC1zaXplOjIwcHg7XG5cdH1cblxuXHQuY3Jvc3N7XG5cdFx0aGVpZ2h0OjE2cHg7XG5cdFx0d2lkdGg6MTZweDtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcblx0fVxuXG5cblx0I2V2ZW50cy1jcm9zc3tcblx0XHRtYXJnaW4tdG9wOjUwJTtcblx0fVxuXG5cdC50ZXh0LWhlYWRlcntcblx0XHRjb2xvcjojZmZmO1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI0cHgpO1xuXHR9XG5cblx0LmhlYWQtcm93e1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMCUpO1xuXHR9XG5cblx0LnBvc2l0aW9uLWxhYmVse1xuXHRcdG1hcmdpbi10b3A6NjRweCAhaW1wb3J0YW50O1xuXHR9XG5cbn1cblxuXG4vKioqKipQbGF5IEJ1dHRvbiAqKioqKi9cbi5yb3VuZC1idXR0b24ge1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0dG9wOjM1JTtcblx0bGVmdDozNiU7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGRpc3BsYXk6YmxvY2s7XG5cdHdpZHRoOjgwcHg7XG5cdGhlaWdodDo4MHB4O1xuXHRwYWRkaW5nLXRvcDogMTRweDtcblx0cGFkZGluZy1sZWZ0OiA4cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRib3JkZXI6IDZweCBzb2xpZCAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGNvbG9yOiMwYTE5M2I7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZToyMHB4O1xuXHRmb250LXdlaWdodDpib2xkO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4jcGxheXtcblx0Y29sb3I6IzBhMTkzYjtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xuXHRvcGFjaXR5OiAxO1xufVxuXG4ucm91bmQtYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMEExOTNCO1xufVxuXG4ubW9iaWxlLXRleHQtcmVzdWx0c3tcblx0Zm9udC1zaXplOiA0MHB4O1xufVxuXG4jZXZlbnRzLWNyb3NzLW1vYmlsZXtcblx0aGVpZ2h0OjI1cHg7XG5cdHdpZHRoOjI1cHg7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCw3MCUsMCk7XG5cbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-results',
          templateUrl: './results.component.html',
          styleUrls: ['./results.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/communicator.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/communicator.service.ts ***!
    \**************************************************/

  /*! exports provided: CommunicatorService */

  /***/
  function srcAppServicesCommunicatorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunicatorService", function () {
      return CommunicatorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CommunicatorService = /*#__PURE__*/function () {
      function CommunicatorService() {
        _classCallCheck(this, CommunicatorService);

        this.status = false;
      }

      _createClass(CommunicatorService, [{
        key: "statusReceiver",
        value: function statusReceiver(e) {
          if (e['toState'] == 'memories') this.status = true;
        }
      }, {
        key: "giveStatus",
        value: function giveStatus() {
          return this.status;
        }
      }, {
        key: "statusFalse",
        value: function statusFalse() {
          this.status = false;
        }
      }]);

      return CommunicatorService;
    }();

    CommunicatorService.ɵfac = function CommunicatorService_Factory(t) {
      return new (t || CommunicatorService)();
    };

    CommunicatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CommunicatorService,
      factory: CommunicatorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommunicatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\dkver\dev\coordi-portal-techfest-master\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map