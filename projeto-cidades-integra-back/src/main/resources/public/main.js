(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-city/add-city.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-city/add-city.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\n    width: 80%;\n    margin: auto;\n    margin-top: 20px;\n}\nmat-card-actions{\n    margin-left: 5px !important;\n}\n.before-form span{\n    font-family: 'Roboto', sans-serif;\n    font-weight: normal;\n    font-size: 20px;\n    margin-right: 10px;\n}\n.parent{\n    color: #9E9E9E;\n    cursor: pointer;\n}\nmat-card-content, mat-card-actions{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;;\n    align-items: baseline;\n\n}\nmat-form-field{\n    flex: 1 1 auto;\n    flex-basis: 30%;\n    margin: 5px;\n}\n@media(max-width: 600px){\n    mat-form-field{\n        flex-basis: 100%;\n    }\n    \n}\n@media(max-width: 800px){\n    mat-form-field{\n        flex-basis: 40%;\n    }\n    \n}"

/***/ }),

/***/ "./src/app/add-city/add-city.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-city/add-city.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" *ngIf=\"!pageError\">\n  <div class=\"before-form\">\n    <span>Adicionar uma nova Cidade</span>\n  </div>\n  <form [formGroup]=\"form\" (ngSubmit)=\"sendForm()\">\n    <div class=\"main\">\n      <mat-card>\n        <mat-card-content>\n          <mat-form-field>\n            <input matInput placeholder=\"ibgeId\" formControlName=\"ibgeId\" [errorStateMatcher]=\"matcher\" type=\"number\" />\n            <mat-icon matPrefix>format_list_numbered</mat-icon>\n            <mat-hint *ngIf=\"form.controls['ibgeId'].pristine\">Digite um Id</mat-hint>\n            <mat-error *ngIf=\"form.controls['ibgeId'].hasError('required') && !form.controls['ibgeId'].hasError('pattern') && !form.controls['ibgeId'].hasError('alreadyExists')\">\n              É sério, é só digitar um Id certo.\n            </mat-error>\n            <mat-error *ngIf=\"form.controls['ibgeId'].hasError('pattern') && !form.controls['ibgeId'].hasError('alreadyExists')\">\n              Um Id só pode conter números sem pontos ou vírgulas.\n            </mat-error>\n            <mat-error *ngIf=\"form.controls['ibgeId'].hasError('alreadyExists')\">\n              Este id já existe, por favor digite um outro.\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Nome\" formControlName=\"name\" [errorStateMatcher]=\"matcher\" />\n            <mat-icon matPrefix>supervised_user_circle</mat-icon>\n            <mat-hint *ngIf=\"!form.controls['ibgeId'].pristine && form.controls['name'].pristine\">Digite o nome da cidade</mat-hint>\n            <mat-error *ngIf=\"form.controls['name'].hasError('minlength') && !form.controls['name'].hasError('required')\">\n              O nome precisa de no mínimo 3 dígitos\n            </mat-error>\n            <mat-error *ngIf=\"form.controls['name'].hasError('required')\">\n              Você precisa preencher o nome\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Nome sem Acento\" formControlName=\"nameWithOutAccent\" [errorStateMatcher]=\"matcher\" />\n            <mat-hint *ngIf=\"!form.controls['name'].pristine && form.controls['nameWithOutAccent'].pristine\">Digite o\n              nome sem acento</mat-hint>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Nome Alternativo\" formControlName=\"alternativaName\" [errorStateMatcher]=\"matcher\" />\n            <mat-hint *ngIf=\"!form.controls['nameWithOutAccent'].pristine && form.controls['alternativaName'].pristine\">Digite o nome alternativo</mat-hint>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Longitude\" formControlName=\"longitude\" type=\"number\" [errorStateMatcher]=\"matcher\" />\n            <mat-hint *ngIf=\"!form.controls['alternativaName'].pristine && form.controls['longitude'].pristine\">Digite a Longitude</mat-hint>\n            <mat-error *ngIf=\"form.controls['longitude'].hasError('required')\">\n              Você precisa preencher a Longitude\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Latitude\" formControlName=\"latitude\" type=\"number\" [errorStateMatcher]=\"matcher\" />\n            <mat-hint *ngIf=\"!form.controls['longitude'].pristine && form.controls['latitude'].pristine\">Digite a Latitude</mat-hint>\n            <mat-error *ngIf=\"form.controls['latitude'].hasError('required')\">\n              Você precisa preencher a Latitude\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Micro Região\" formControlName=\"microRegion\" [errorStateMatcher]=\"matcher\" />\n            <mat-hint *ngIf=\"!form.controls['latitude'].pristine && form.controls['microRegion'].pristine\">Digite a Micro Região</mat-hint>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Meso Região\" formControlName=\"mesoRegion\" [errorStateMatcher]=\"matcher\" />\n            <mat-hint *ngIf=\"!form.controls['microRegion'].pristine && form.controls['mesoRegion'].pristine\">Digite a Meso Região</mat-hint>\n          </mat-form-field>\n\n          <mat-checkbox formControlName=\"capital\">Capital</mat-checkbox>\n\n          <mat-form-field>\n            <mat-select placeholder=\"Selecione um Estado\" formControlName='stateId'>\n              <mat-option *ngFor=\"let state of states\" [value]=\"state.id\">\n                {{ state.uf }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-raised-button type=\"submit\" [disabled]=\"form.invalid\">ADICIONAR</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </form>\n</div>\n<div class=\"main\" *ngIf=\"pageError\">\n  <h2 class=\"mat-display-1\">Ah Não!</h2>\n  <p>Algo deu errado. Verifique se existem estados já preenchidos.</p>\n</div>"

/***/ }),

/***/ "./src/app/add-city/add-city.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-city/add-city.component.ts ***!
  \************************************************/
/*! exports provided: AddCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCityComponent", function() { return AddCityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_service_city_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/service/city.service */ "./src/app/core/service/city.service.ts");
/* harmony import */ var _core_models_custom_error_state_matcher_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/models/custom-error-state-matcher.model */ "./src/app/core/models/custom-error-state-matcher.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_service_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/service/state.service */ "./src/app/core/service/state.service.ts");
/* harmony import */ var _core_endpoints_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/endpoints.enum */ "./src/app/core/endpoints.enum.ts");
/* harmony import */ var _core_models_city_dto_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/models/city-dto.model */ "./src/app/core/models/city-dto.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddCityComponent = /** @class */ (function () {
    function AddCityComponent(router, cityService, snackBar, stateService) {
        var _this = this;
        this.router = router;
        this.cityService = cityService;
        this.snackBar = snackBar;
        this.stateService = stateService;
        this.matcher = new _core_models_custom_error_state_matcher_model__WEBPACK_IMPORTED_MODULE_5__["CustomErrorStateMatcher"]();
        this.pageError = false;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(this.stateService.getAll(), cityService.getAnyList(_core_endpoints_enum__WEBPACK_IMPORTED_MODULE_8__["Endpoints"].ORDER_BY_NAME))
            .subscribe(function (result) {
            if (!!result[0] && !result[0].message && !!result[0].payload) {
                _this.states = result[0].payload;
            }
            else {
                _this.pageError = true;
            }
            if (!!result[1]) {
                if (!!result[1].message) {
                    _this.openSnackBar(result[1].message.toString());
                }
                else {
                    _this.cities = result[1].payload;
                }
            }
        });
    }
    AddCityComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ibgeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[1-9][0-9]*$')
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)
            ]),
            nameWithOutAccent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            capital: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            alternativaName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            microRegion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            mesoRegion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            stateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
        });
    };
    AddCityComponent.prototype.sendForm = function () {
        var _this = this;
        if (this.form.valid) {
            var idError = this.cities.filter(function (city) { return city.ibgeId === +_this.form.value.id; }).length > 0;
            if (!idError) {
                var city = new _core_models_city_dto_model__WEBPACK_IMPORTED_MODULE_9__["CityDto"](Object.assign({}, this.form.value));
                this.cityService.add(city).subscribe(function (res) {
                    if (!!res.message) {
                        _this.openSnackBar(res.message.toString());
                    }
                });
            }
            else {
                if (idError) {
                    this.form.controls['id'].setErrors({ alreadyExists: true });
                }
            }
        }
    };
    AddCityComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 1500,
        });
    };
    AddCityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-city',
            template: __webpack_require__(/*! ./add-city.component.html */ "./src/app/add-city/add-city.component.html"),
            styles: [__webpack_require__(/*! ./add-city.component.css */ "./src/app/add-city/add-city.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _core_service_city_service__WEBPACK_IMPORTED_MODULE_4__["CityService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _core_service_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"]])
    ], AddCityComponent);
    return AddCityComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _curiosities_curiosities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curiosities/curiosities.component */ "./src/app/curiosities/curiosities.component.ts");
/* harmony import */ var _add_city_add_city_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-city/add-city.component */ "./src/app/add-city/add-city.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'curiosities',
        component: _curiosities_curiosities_component__WEBPACK_IMPORTED_MODULE_3__["CuriositiesComponent"]
    },
    {
        path: 'add',
        component: _add_city_add_city_component__WEBPACK_IMPORTED_MODULE_4__["AddCityComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_service_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/service/loading.service */ "./src/app/core/service/loading.service.ts");
/* harmony import */ var _loading_dialog_loading_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading-dialog/loading-dialog.component */ "./src/app/loading-dialog/loading-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(dialog, loadingService) {
        var _this = this;
        this.dialog = dialog;
        this.loadingService = loadingService;
        /**
         * Detect loading changes and call or dismiss the service
         */
        this.loadingService.isLoading()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(function (isLoading) {
            if (isLoading) {
                _this.dialog.open(_loading_dialog_loading_dialog_component__WEBPACK_IMPORTED_MODULE_4__["LoadingDialogComponent"], {
                    minHeight: "200px",
                    disableClose: true
                });
            }
            else {
                _this.dialog.closeAll();
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _core_service_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _loading_dialog_loading_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./loading-dialog/loading-dialog.component */ "./src/app/loading-dialog/loading-dialog.component.ts");
/* harmony import */ var _cities_table_cities_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cities-table/cities-table.component */ "./src/app/cities-table/cities-table.component.ts");
/* harmony import */ var _curiosities_curiosities_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./curiosities/curiosities.component */ "./src/app/curiosities/curiosities.component.ts");
/* harmony import */ var _add_city_add_city_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./add-city/add-city.component */ "./src/app/add-city/add-city.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/** Material Design Modules */
















/** Add Fort-Awesome icons into the library */
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSearch"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCheckCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTrashAlt"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["ToolbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                _loading_dialog_loading_dialog_component__WEBPACK_IMPORTED_MODULE_21__["LoadingDialogComponent"],
                _cities_table_cities_table_component__WEBPACK_IMPORTED_MODULE_22__["CitiesTableComponent"],
                _curiosities_curiosities_component__WEBPACK_IMPORTED_MODULE_23__["CuriositiesComponent"],
                _add_city_add_city_component__WEBPACK_IMPORTED_MODULE_24__["AddCityComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"]
            ],
            entryComponents: [_loading_dialog_loading_dialog_component__WEBPACK_IMPORTED_MODULE_21__["LoadingDialogComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cities-table/cities-table.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cities-table/cities-table.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cities-table/cities-table.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cities-table/cities-table.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8 tabela\">\n  <mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n\n    <!-- The IbgeId Column -->\n    <ng-container matColumnDef=\"ibgeId\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder='Num. IBGE' (input)=\"search$.next({search: $event.target.value, prop: 'ibgeId'})\" />\n        </mat-form-field>\n        <span mat-sort-header></span>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.ibgeId}}</mat-cell>\n    </ng-container>\n\n    <!-- The state Column -->\n    <ng-container matColumnDef=\"state\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder='Estado' (input)=\"search$.next({search: $event.target.value, prop: 'state'})\" />\n        </mat-form-field>\n        <span mat-sort-header></span>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.state.uf}}</mat-cell>\n    </ng-container>\n\n    <!-- The name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder='Nome' (input)=\"search$.next({search: $event.target.value, prop: 'name'})\" />\n        </mat-form-field>\n        <span mat-sort-header></span>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.name}}</mat-cell>\n    </ng-container>\n\n    <!-- The nameWithOutAccent Column -->\n    <ng-container matColumnDef=\"nameWithOutAccent\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder='Nome Sem Ac.' (input)=\"search$.next({search: $event.target.value, prop: 'nameWithOutAccent'})\" />\n        </mat-form-field>\n        <span mat-sort-header></span>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.nameWithOutAccent}}</mat-cell>\n    </ng-container>\n\n    <!-- The alternativaName Column -->\n    <ng-container matColumnDef=\"alternativaName\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder='Nome Alt.' (input)=\"search$.next({search: $event.target.value, prop: 'alternativaName'})\" />\n        </mat-form-field>\n        <span mat-sort-header></span>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.alternativaName}}</mat-cell>\n    </ng-container> \n\n    <!-- The capital Column -->\n    <ng-container matColumnDef=\"capital\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-form-field>\n            <mat-select placeholder=\"Capital\" (selectionChange)=\"onCapitalChange($event)\">\n              <mat-option [value]=\"true\">\n                Sim\n              </mat-option>\n              <mat-option [value]=\"false\">\n                Não\n              </mat-option>\n              <mat-option [value]=\"\">\n                Todos\n              </mat-option>\n            </mat-select>\n        </mat-form-field>\n        <span mat-sort-header></span>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"><fa-icon [style.color]=\"'#4caf50'\" *ngIf=\"!!row.capital\" [icon]=\"['fas', 'check-circle']\"></fa-icon></mat-cell>\n    </ng-container>\n\n    <!-- The longitude Column -->\n    <ng-container matColumnDef=\"longitude\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder='Longitude' (input)=\"search$.next({search: $event.target.value, prop: 'longitude'})\" />\n        </mat-form-field>\n        <span mat-sort-header></span>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.longitude |  number:'1.3-3'}}</mat-cell>\n    </ng-container>\n\n    <!-- The longitude Column -->\n    <ng-container matColumnDef=\"latitude\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder='Latitude' (input)=\"search$.next({search: $event.target.value, prop: 'latitude'})\" />\n        </mat-form-field>\n        <span mat-sort-header></span>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.latitude |  number:'1.3-3'}}</mat-cell>\n    </ng-container>\n\n    <!-- The microRegion Column -->\n    <ng-container matColumnDef=\"microRegion\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder='Micro Região' (input)=\"search$.next({search: $event.target.value, prop: 'microRegion'})\" />\n        </mat-form-field>\n        <span mat-sort-header></span>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.microRegion}}</mat-cell>\n    </ng-container>\n\n    <!-- The mesoRegion Column -->\n    <ng-container matColumnDef=\"mesoRegion\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder='Meso Região' (input)=\"search$.next({search: $event.target.value, prop: 'mesoRegion'})\" />\n        </mat-form-field>\n        <span mat-sort-header></span>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.mesoRegion}}</mat-cell>\n    </ng-container>\n\n    <!-- The actions Column -->\n    <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef>\n          Ações\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n            <button mat-raised-button class=\"remove-btn\" color=\"accent\" (click)=\"onRemove(row.ibgeId)\">\n                <fa-icon [icon]=\"['fas', 'trash-alt']\"></fa-icon>\n              </button>\n        </mat-cell>\n      </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n\n  <mat-paginator #paginator\n    [length]=\"dataSource.data.length\"\n    [pageIndex]=\"0\"\n    [pageSize]=\"defaultPageSize\"\n    [pageSizeOptions]=\"pageSizes\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/cities-table/cities-table.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cities-table/cities-table.component.ts ***!
  \********************************************************/
/*! exports provided: CitiesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesTableComponent", function() { return CitiesTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/constants */ "./src/app/core/constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CitiesTableComponent = /** @class */ (function () {
    function CitiesTableComponent() {
        var _this = this;
        this.removeCity = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.search$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.filters = {};
        this.defaultPageSize = _core_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PAGE_SIZE_OPTION"];
        this.pageSizes = _core_constants__WEBPACK_IMPORTED_MODULE_3__["PAGE_SIZE_OPTIONS"];
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['ibgeId', 'state', 'name', 'nameWithOutAccent', 'alternativaName',
            'capital', 'longitude', 'latitude', 'microRegion', 'mesoRegion', 'actions'];
        this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (query) { return query || ''; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (column) { return Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(_this.filters, column.prop, column.search); }))
            .subscribe(function (filters) { return _this.dataSource.filter = JSON.stringify(filters); });
    }
    Object.defineProperty(CitiesTableComponent.prototype, "cities", {
        get: function () {
            // transform value for display
            return this._cities;
        },
        set: function (cities) {
            this._cities = cities;
            this.fullfillCities();
        },
        enumerable: true,
        configurable: true
    });
    CitiesTableComponent.prototype.ngOnInit = function () {
        this.fullfillCities();
    };
    CitiesTableComponent.prototype.fullfillCities = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.cities);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = this.createFilter();
    };
    CitiesTableComponent.prototype.createFilter = function () {
        var filterFunction = function (data, filter) {
            var searchTerms = JSON.parse(filter);
            return Object(_core_constants__WEBPACK_IMPORTED_MODULE_3__["CityFilter"])(data, searchTerms);
        };
        return filterFunction;
    };
    CitiesTableComponent.prototype.onCapitalChange = function ($event) {
        this.search$.next({ search: $event.value, prop: 'capital' });
    };
    CitiesTableComponent.prototype.onRemove = function (id) {
        if (!!id) {
            this.removeCity.emit(id);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CitiesTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], CitiesTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], CitiesTableComponent.prototype, "cities", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CitiesTableComponent.prototype, "removeCity", void 0);
    CitiesTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cities-table',
            template: __webpack_require__(/*! ./cities-table.component.html */ "./src/app/cities-table/cities-table.component.html"),
            styles: [__webpack_require__(/*! ./cities-table.component.css */ "./src/app/cities-table/cities-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CitiesTableComponent);
    return CitiesTableComponent;
}());



/***/ }),

/***/ "./src/app/core/constants.ts":
/*!***********************************!*\
  !*** ./src/app/core/constants.ts ***!
  \***********************************/
/*! exports provided: PAGE_SIZE_OPTIONS, DEFAULT_PAGE_SIZE_OPTION, CityFilter, CustomPaginatorLabels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_SIZE_OPTIONS", function() { return PAGE_SIZE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PAGE_SIZE_OPTION", function() { return DEFAULT_PAGE_SIZE_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityFilter", function() { return CityFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPaginatorLabels", function() { return CustomPaginatorLabels; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PAGE_SIZE_OPTIONS = [5, 10, 15, 20];
var DEFAULT_PAGE_SIZE_OPTION = 10;
function CityFilter(city, filters) {
    if ((!filters.name || city.name &&
        city.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.ibgeId || city.ibgeId.toString().includes(filters.ibgeId)) &&
        (!filters.state || city.state && city.state.uf &&
            city.state.uf.toLowerCase().includes(filters.state.toLowerCase())) &&
        (!filters.nameWithOutAccent ||
            city.nameWithOutAccent && city.nameWithOutAccent.toLowerCase()
                .includes(filters.nameWithOutAccent.toLowerCase())) &&
        (!filters.alternativaName || city.alternativaName && city.alternativaName.toLowerCase()
            .includes(filters.alternativaName.toLowerCase())) &&
        (!filters.capital || city.capital == !!filters.capital) &&
        (!filters.longitude || city.longitude.toString().includes(filters.longitude)) &&
        (!filters.latitude || city.latitude.toString().includes(filters.latitude)) &&
        (!filters.microRegion || city.microRegion.toLowerCase()
            .includes(filters.toLowerCase().microRegion)) &&
        (!filters.mesoRegion || city.mesoRegion.toLowerCase()
            .includes(filters.toLowerCase().mesoRegion))) {
        return true;
    }
    return false;
}
var CustomPaginatorLabels = /** @class */ (function (_super) {
    __extends(CustomPaginatorLabels, _super);
    function CustomPaginatorLabels() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemsPerPageLabel = 'Itens por Página';
        _this.nextPageLabel = 'Próxima Página';
        _this.previousPageLabel = 'Página Anterior';
        return _this;
    }
    return CustomPaginatorLabels;
}(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorIntl"]));



/***/ }),

/***/ "./src/app/core/endpoints.enum.ts":
/*!****************************************!*\
  !*** ./src/app/core/endpoints.enum.ts ***!
  \****************************************/
/*! exports provided: Endpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Endpoints", function() { return Endpoints; });
var Endpoints;
(function (Endpoints) {
    Endpoints["FOOBAR"] = "/api/foo";
    Endpoints["UPLOAD"] = "/api/upload";
    Endpoints["ORDER_BY_NAME"] = "/api/cities/orderedByName";
    Endpoints["CITIES_NUMBER"] = "/api/cities/count";
    Endpoints["ADD_CITY"] = "/api/cities/add";
    Endpoints["SELECTED_CITY"] = "/api/cities/getId";
    Endpoints["REMOVE_CITY_ID"] = "/api/cities/removeId";
    Endpoints["FILTER_BY_STATE"] = "/api/cities/stateFilter";
    Endpoints["ORDER_BY_NAME_ONLY_CAPITALS"] = "/api/cities/orderedByNameOnlyCapitals";
    Endpoints["MOST_DISTANCE"] = "/api/cities/mostDistance";
    Endpoints["HIGHEST_AND_LOWEST_STATE"] = "/api/state/hightestAndLowest";
    Endpoints["ALL_STATES"] = "/api/state/findAll";
})(Endpoints || (Endpoints = {}));


/***/ }),

/***/ "./src/app/core/models/city-dto.model.ts":
/*!***********************************************!*\
  !*** ./src/app/core/models/city-dto.model.ts ***!
  \***********************************************/
/*! exports provided: CityDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDto", function() { return CityDto; });
var CityDto = /** @class */ (function () {
    function CityDto(obj) {
        this.ibgeId = obj && obj.ibgeId || new Number(0);
        this.stateId = obj && obj.stateId || new Number(0);
        this.name = obj && obj.name || new String();
        this.nameWithOutAccent = obj && obj.nameWithOutAccent || new String();
        this.alternativaName = obj && obj.alternativaName || new String();
        this.capital = obj && obj.capital || new Boolean(false);
        this.longitude = obj && obj.longitude || new Number(0);
        this.latitude = obj && obj.latitude || new Number(0);
        this.microRegion = obj && obj.microRegion || new String();
        this.mesoRegion = obj && obj.mesoRegion || new String();
    }
    return CityDto;
}());



/***/ }),

/***/ "./src/app/core/models/curiosities-dto.model.ts":
/*!******************************************************!*\
  !*** ./src/app/core/models/curiosities-dto.model.ts ***!
  \******************************************************/
/*! exports provided: CuriositiesDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuriositiesDto", function() { return CuriositiesDto; });
var CuriositiesDto = /** @class */ (function () {
    function CuriositiesDto(obj) {
        this.stateCounterDto = obj && obj.stateCounterDto || {};
        this.numberOfCities = obj && obj.numberOfCities || new Number(0);
        this.mostDistancedCities = obj && obj.mostDistancedCities || [];
    }
    return CuriositiesDto;
}());



/***/ }),

/***/ "./src/app/core/models/custom-error-state-matcher.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/models/custom-error-state-matcher.model.ts ***!
  \*****************************************************************/
/*! exports provided: CustomErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomErrorStateMatcher", function() { return CustomErrorStateMatcher; });
var CustomErrorStateMatcher = /** @class */ (function () {
    function CustomErrorStateMatcher() {
    }
    CustomErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return CustomErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/core/models/message-encapsuling.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/models/message-encapsuling.model.ts ***!
  \**********************************************************/
/*! exports provided: MessageEncapsuling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEncapsuling", function() { return MessageEncapsuling; });
var MessageEncapsuling = /** @class */ (function () {
    function MessageEncapsuling(obj) {
        this.message = obj && obj.message || '';
        this.payload = obj && obj.payload || {};
    }
    return MessageEncapsuling;
}());



/***/ }),

/***/ "./src/app/core/models/option.model.ts":
/*!*********************************************!*\
  !*** ./src/app/core/models/option.model.ts ***!
  \*********************************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
var Option = /** @class */ (function () {
    function Option(obj) {
        this.name = obj && obj.name || '';
        this.value = obj && obj.value || {};
    }
    return Option;
}());



/***/ }),

/***/ "./src/app/core/service/city.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/service/city.service.ts ***!
  \**********************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _endpoints_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../endpoints.enum */ "./src/app/core/endpoints.enum.ts");
/* harmony import */ var _models_message_encapsuling_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/message-encapsuling.model */ "./src/app/core/models/message-encapsuling.model.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loading.service */ "./src/app/core/service/loading.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CityService = /** @class */ (function () {
    function CityService(router, http, snackBar, loadingService) {
        this.router = router;
        this.http = http;
        this.snackBar = snackBar;
        this.loadingService = loadingService;
    }
    /**
     * Go to any endpoint that returns a list os cities
     * @param endpoint the endpoint to make request
     * @param params any aditionalparams
     * @return the MessageEncapsuling containing the list of cities
     */
    CityService.prototype.getAnyList = function (endpoint, params) {
        var _this = this;
        this.loadingService.setLoading();
        return this.http.get(endpoint, params || {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return new _models_message_encapsuling_model__WEBPACK_IMPORTED_MODULE_7__["MessageEncapsuling"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.snackBar.open(error.error.message.toString());
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.loadingService.unLoad(); }));
    };
    /**
     * Get the number of cities
     * @return the MessageEncapsuling containing the number of cities
     */
    CityService.prototype.getCount = function () {
        var _this = this;
        this.loadingService.setLoading();
        return this.http.get(_endpoints_enum__WEBPACK_IMPORTED_MODULE_6__["Endpoints"].CITIES_NUMBER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return new _models_message_encapsuling_model__WEBPACK_IMPORTED_MODULE_7__["MessageEncapsuling"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.snackBar.open(error.error.message.toString());
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.loadingService.unLoad(); }));
    };
    /**
     * Get a specific city
     * @return the MessageEncapsuling containing the selected city
     */
    CityService.prototype.getCity = function (ibgeId) {
        var _this = this;
        this.loadingService.setLoading();
        return this.http.get(_endpoints_enum__WEBPACK_IMPORTED_MODULE_6__["Endpoints"].SELECTED_CITY, { params: { "ibgeId": ibgeId.toString() } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return new _models_message_encapsuling_model__WEBPACK_IMPORTED_MODULE_7__["MessageEncapsuling"](res); }, ibgeId), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.snackBar.open(error.error.message.toString());
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.loadingService.unLoad(); }));
    };
    /**
     * Send a CityDto to back add the city, returning just the system message
     * @param dto the city Dto
     */
    CityService.prototype.add = function (dto) {
        var _this = this;
        this.loadingService.setLoading();
        return this.http.post(_endpoints_enum__WEBPACK_IMPORTED_MODULE_6__["Endpoints"].ADD_CITY.toString(), dto)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return new _models_message_encapsuling_model__WEBPACK_IMPORTED_MODULE_7__["MessageEncapsuling"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.snackBar.open(error.error.message.toString());
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.loadingService.unLoad(); }));
    };
    /**
     * remove selectedCity by id returning just the system message
     * @param ibgeId the city id
     */
    CityService.prototype.remove = function (ibgeId) {
        var _this = this;
        this.loadingService.setLoading();
        return this.http.delete(_endpoints_enum__WEBPACK_IMPORTED_MODULE_6__["Endpoints"].REMOVE_CITY_ID.toString(), {
            params: { "ibgeId": ibgeId.toString() }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return new _models_message_encapsuling_model__WEBPACK_IMPORTED_MODULE_7__["MessageEncapsuling"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.snackBar.open(error.error.message.toString());
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.loadingService.unLoad(); }));
    };
    CityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "./src/app/core/service/csv.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/service/csv.service.ts ***!
  \*********************************************/
/*! exports provided: CsvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvService", function() { return CsvService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _endpoints_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../endpoints.enum */ "./src/app/core/endpoints.enum.ts");
/* harmony import */ var _models_message_encapsuling_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/message-encapsuling.model */ "./src/app/core/models/message-encapsuling.model.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loading.service */ "./src/app/core/service/loading.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CsvService = /** @class */ (function () {
    function CsvService(router, http, snackBar, loadingService) {
        this.router = router;
        this.http = http;
        this.snackBar = snackBar;
        this.loadingService = loadingService;
    }
    /**
     * Send an String-encoded file to the UPLOAD endpoint and expects no payload of return,
     * just the system message
     * @param csvBase64 the String enconded file
     */
    CsvService.prototype.upload = function (csvBase64) {
        var _this = this;
        this.loadingService.setLoading();
        return this.http.post(_endpoints_enum__WEBPACK_IMPORTED_MODULE_6__["Endpoints"].UPLOAD.toString(), csvBase64)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return new _models_message_encapsuling_model__WEBPACK_IMPORTED_MODULE_7__["MessageEncapsuling"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.snackBar.open(error.error.message.toString());
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.loadingService.unLoad(); }));
    };
    CsvService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]])
    ], CsvService);
    return CsvService;
}());



/***/ }),

/***/ "./src/app/core/service/loading.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/service/loading.service.ts ***!
  \*************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loadCounts = 0;
    }
    /**
     * Actives the loading screen
     */
    LoadingService.prototype.setLoading = function () {
        this.loadCounts++;
        this.loading.next(true);
    };
    /**
     * Remove one load item from index
     */
    LoadingService.prototype.unLoad = function () {
        this.loadCounts--;
        if (this.loadCounts <= 0) {
            this.loading.next(false);
        }
    };
    /**
     * Check if is Loading
     */
    LoadingService.prototype.isLoading = function () {
        return this.loading;
    };
    LoadingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/core/service/state.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/service/state.service.ts ***!
  \***********************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _endpoints_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../endpoints.enum */ "./src/app/core/endpoints.enum.ts");
/* harmony import */ var _models_message_encapsuling_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/message-encapsuling.model */ "./src/app/core/models/message-encapsuling.model.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loading.service */ "./src/app/core/service/loading.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var StateService = /** @class */ (function () {
    function StateService(router, http, snackBar, loadingService) {
        this.router = router;
        this.http = http;
        this.snackBar = snackBar;
        this.loadingService = loadingService;
    }
    /**
     * Return the highest and the lowest state ranked by number of cities
     * @returns the MessageEncapsuling containing the highest and lowest
     */
    StateService.prototype.getHightestAndLowest = function () {
        var _this = this;
        this.loadingService.setLoading();
        return this.http.get(_endpoints_enum__WEBPACK_IMPORTED_MODULE_6__["Endpoints"].HIGHEST_AND_LOWEST_STATE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return new _models_message_encapsuling_model__WEBPACK_IMPORTED_MODULE_7__["MessageEncapsuling"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.snackBar.open(error.error.message.toString());
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.loadingService.unLoad(); }));
    };
    /**
     * Return all the states
     * @returns the MessageEncapsuling containing the highest and lowest
     */
    StateService.prototype.getAll = function () {
        var _this = this;
        this.loadingService.setLoading();
        return this.http.get(_endpoints_enum__WEBPACK_IMPORTED_MODULE_6__["Endpoints"].ALL_STATES)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return new _models_message_encapsuling_model__WEBPACK_IMPORTED_MODULE_7__["MessageEncapsuling"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.snackBar.open(error.error.message.toString());
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.loadingService.unLoad(); }));
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/curiosities/curiosities.component.css":
/*!*******************************************************!*\
  !*** ./src/app/curiosities/curiosities.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\n    width: 80%;\n    margin: auto;\n    margin-top: 20px;\n}"

/***/ }),

/***/ "./src/app/curiosities/curiosities.component.html":
/*!********************************************************!*\
  !*** ./src/app/curiosities/curiosities.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div *ngIf=\"!!errorPage\">\n    <h2 class=\"mat-display-1\">Ah Não!</h2>\n    <p>Algo deu errado. Erros: {{errorMessages}}</p>\n\n  </div>\n  <div *ngIf=\"!errorPage\">\n    <div *ngIf=\"curiosities.mostDistancedCities.length > 0\">\n      <h3 class=\"mat-subheading-2\">As Cidades mais distantes uma da outra</h3>\n      <hr />\n      <p class=\"mat-body-1\">\n        As cidades mais distantes uma da outra\n        são {{curiosities.mostDistancedCities[0].name}}\n        e a(o) {{curiosities.mostDistancedCities[1].name}}\n      </p>\n    </div>\n    <div *ngIf=\"curiosities.numberOfCities > 0\">\n      <h3 class=\"mat-subheading-2\">O Total de Cidades</h3>\n      <hr />\n      <p class=\"mat-body-1\">\n        O total de cidades é de {{curiosities.numberOfCities}}\n      </p>\n    </div>\n    <div *ngIf=\"curiosities.stateCounterDto.length > 0\">\n      <h3 class=\"mat-subheading-2\">Os estados com o maior e o menor número de cidades.</h3>\n      <hr />\n      <p class=\"mat-body-1\">\n        O estado com o maior número de cidades é o {{curiosities.stateCounterDto[0].state.uf}}\n        com {{curiosities.stateCounterDto[0].numberOfCities}} cidade(s) e o estado com o menor número de\n        cidades é o {{curiosities.stateCounterDto[1].state.uf}}\n        com {{curiosities.stateCounterDto[1].numberOfCities}} cidade(s)\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/curiosities/curiosities.component.ts":
/*!******************************************************!*\
  !*** ./src/app/curiosities/curiosities.component.ts ***!
  \******************************************************/
/*! exports provided: CuriositiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuriositiesComponent", function() { return CuriositiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_service_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/service/state.service */ "./src/app/core/service/state.service.ts");
/* harmony import */ var _core_service_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/service/city.service */ "./src/app/core/service/city.service.ts");
/* harmony import */ var _core_endpoints_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/endpoints.enum */ "./src/app/core/endpoints.enum.ts");
/* harmony import */ var _core_models_curiosities_dto_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/models/curiosities-dto.model */ "./src/app/core/models/curiosities-dto.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CuriositiesComponent = /** @class */ (function () {
    function CuriositiesComponent(stateService, cityService) {
        var _this = this;
        this.stateService = stateService;
        this.cityService = cityService;
        this.errorPage = false;
        this.errorMessages = "";
        this.curiosities = new _core_models_curiosities_dto_model__WEBPACK_IMPORTED_MODULE_5__["CuriositiesDto"]();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(this.stateService.getHightestAndLowest(), cityService.getCount(), cityService.getAnyList(_core_endpoints_enum__WEBPACK_IMPORTED_MODULE_4__["Endpoints"].MOST_DISTANCE))
            .subscribe(function (result) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var message = result_1[_i];
                if (!!message.message || !message.payload) {
                    _this.errorPage = true;
                    _this.errorMessages += message.message + " / ";
                }
            }
            if (!_this.errorPage) {
                _this.curiosities.stateCounterDto = result[0].payload;
                _this.curiosities.numberOfCities = result[1].payload;
                _this.curiosities.mostDistancedCities = result[2].payload;
            }
        });
    }
    CuriositiesComponent.prototype.ngOnInit = function () {
    };
    CuriositiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-curiosities',
            template: __webpack_require__(/*! ./curiosities.component.html */ "./src/app/curiosities/curiosities.component.html"),
            styles: [__webpack_require__(/*! ./curiosities.component.css */ "./src/app/curiosities/curiosities.component.css")]
        }),
        __metadata("design:paramtypes", [_core_service_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            _core_service_city_service__WEBPACK_IMPORTED_MODULE_3__["CityService"]])
    ], CuriositiesComponent);
    return CuriositiesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\n    width: 80%;\n    margin: auto;\n}\n.spacer{\n    flex: 1 1 auto;\n}\n.form-group{\n    display: flex;\n}\n.mat-display-1, .mat-subheading-2{\n    margin-bottom: 0px;\n    margin-top: 20px;\n}\nbutton{\n    max-height: 36px;\n}\n.search-button{\n    margin-left: 15px;\n}\n.id-search{\n    display: inline;\n    margin-left: 10px;\n}\n.state-search{\n    display: inline-block;\n    max-width: 200px;\n    margin-left: 15px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1 class=\"mat-display-1\">Seja Bem-Vindo ao Contre de Cidades!</h1>\n  <hr />\n  <p class=\"mat-body-1\">\n    Para começar basta inserir a planilha (em formato CSV) no botão indicado.\n  </p>\n  <p [hidden]=\"!fileName\" class=\"mat-body-2\">\n    Último Arquivo Carregado: <span [style.color]=\"'red'\">{{fileName}}</span>.<br />\n    Para você carregar um novo Arquivo você deve clicar em limpar.\n  </p>\n  <form [formGroup]=\"form\">\n    <div class=\"form-group\">\n      <button mat-raised-button color=\"primary\" (click)=\"openInput()\" [disabled]=\"!!fileName\">\n        Selecionar Planilha\n      </button>\n      <span class=\"spacer\"></span>\n      <input type=\"file\" style=\"display: none\" id=\"file\" (change)=\"onFileChange($event)\" #fileInput>\n      <button id=\"clean\" type=\"button\" [disabled]=\"!fileName\" mat-raised-button class=\"btn btn-sm btn-default\" (click)=\"clearFile()\"\n        [disabled]=\"loading\">Limpar</button>\n    </div>\n  </form>\n  <div>\n    <h3 class=\"mat-subheading-2\">Lista de Cidades</h3>\n    <hr />\n    <div class=\"search-fields\">\n      <mat-form-field>\n        <mat-select placeholder=\"Selecione um Filtro\" (selectionChange)=\"onChangeFilter()\" #filter>\n          <mat-option *ngFor=\"let option of options\" [value]=\"option.value\">\n            {{option.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div *ngIf=\"!!searchById\" class=\"id-search\">\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Escolha um Id\" #cityId>\n        </mat-form-field>\n      </div>\n      <div *ngIf=\"!!searchByState\" class=\"state-search\">\n        <mat-select placeholder=\"Selecione um Estado\" #filterState>\n          <mat-option *ngFor=\"let state of states\" [value]=\"state.id\">\n            {{state.uf}}\n          </mat-option>\n        </mat-select>\n      </div>\n      <button mat-raised-button class=\"search-button\" color=\"primary\" (click)=\"onSearch()\">\n        Pesquisar <fa-icon [icon]=\"['fas', 'search']\"></fa-icon>\n      </button>\n    </div>\n    <div [hidden]=\"!cities || !!cities && cities.length <= 0\">\n      <app-cities-table [cities]=\"cities\" (removeCity)=\"onRemove($event)\"></app-cities-table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _core_service_csv_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/service/csv.service */ "./src/app/core/service/csv.service.ts");
/* harmony import */ var _core_service_city_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/service/city.service */ "./src/app/core/service/city.service.ts");
/* harmony import */ var _core_service_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/service/state.service */ "./src/app/core/service/state.service.ts");
/* harmony import */ var _core_models_option_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/models/option.model */ "./src/app/core/models/option.model.ts");
/* harmony import */ var _core_endpoints_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/endpoints.enum */ "./src/app/core/endpoints.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, csvService, cityService, stateService, snackBar) {
        this.fb = fb;
        this.csvService = csvService;
        this.cityService = cityService;
        this.stateService = stateService;
        this.snackBar = snackBar;
        this.fileName = '';
        this.cities = [];
        this.searchById = false;
        this.states = [];
        this.searchByState = false;
        this.options = [new _core_models_option_model__WEBPACK_IMPORTED_MODULE_7__["Option"]({ name: 'Ordernar por Nome', value: 'orderByName' }),
            new _core_models_option_model__WEBPACK_IMPORTED_MODULE_7__["Option"]({ name: 'Ordernar por Nome Somente Capitais', value: 'orderByNameOnlyCaptals' }),
            new _core_models_option_model__WEBPACK_IMPORTED_MODULE_7__["Option"]({ name: 'Selecionar Cidade Específica', value: 'getId' }),
            new _core_models_option_model__WEBPACK_IMPORTED_MODULE_7__["Option"]({ name: 'Selecionar por um Estado', value: 'getByState' })];
        this.createForm();
    }
    /**
     * Creates the FileInput form
     */
    HomeComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    /**
     * Dectect fileInput Changes, and achieves the CSV service when dectect some file.
     * @param event The Event who has fired the action
     */
    HomeComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                var selectedFile = reader.result.split(',');
                _this.fileName = file_1.name;
                var base64File = selectedFile[1];
                if (!!base64File) {
                    _this.csvService.upload(base64File)
                        .subscribe(function (res) {
                        if (!!res.message) {
                            _this.snackBar.open(res.message, '', { duration: 2500 });
                        }
                    });
                }
            };
        }
    };
    /**
     * Actives FileInput action when click in the button.
     */
    HomeComponent.prototype.openInput = function () {
        this.fileInput.nativeElement.click();
    };
    /**
     * Remove Last Selected File
     */
    HomeComponent.prototype.clearFile = function () {
        this.form.get('file').setValue(null);
        this.fileInput.nativeElement.value = '';
        this.fileName = '';
    };
    /**
     * Makes the filter change, checking if need to add more fields
     * @param event The Event who has fired the action
     */
    HomeComponent.prototype.onChangeFilter = function () {
        var _this = this;
        var value = this.filter.value;
        if (!!value) {
            if (value === 'getId') {
                this.searchById = true;
            }
            else {
                this.searchById = false;
            }
            if (value === 'getByState') {
                this.stateService.getAll().subscribe(function (message) {
                    if (!!message.message) {
                        _this.snackBar.open(message.message, '', { duration: 2500 });
                    }
                    else if (!!message.payload) {
                        _this.searchByState = true;
                        _this.states = message.payload;
                    }
                });
            }
        }
    };
    HomeComponent.prototype.onSearch = function () {
        var _this = this;
        var value = this.filter.value;
        var endpoint = null;
        var params = {};
        if (!!value) {
            if (value !== 'getId') {
                switch (value) {
                    case 'orderByName':
                        endpoint = _core_endpoints_enum__WEBPACK_IMPORTED_MODULE_8__["Endpoints"].ORDER_BY_NAME;
                        break;
                    case 'orderByNameOnlyCaptals':
                        endpoint = _core_endpoints_enum__WEBPACK_IMPORTED_MODULE_8__["Endpoints"].ORDER_BY_NAME_ONLY_CAPITALS;
                        break;
                    case 'getByState':
                        var selectState = this.filterState.value;
                        if (!!selectState) {
                            endpoint = _core_endpoints_enum__WEBPACK_IMPORTED_MODULE_8__["Endpoints"].FILTER_BY_STATE;
                            params = { params: { "stateId": selectState } };
                        }
                        break;
                }
                if (!!endpoint) {
                    this.cityService.getAnyList(endpoint, params)
                        .subscribe(function (message) {
                        if (!!message.message) {
                            _this.snackBar.open(message.message, '', { duration: 2500 });
                        }
                        else if (!!message.payload) {
                            _this.cities = message.payload;
                        }
                    });
                }
                else {
                    this.snackBar.open("ERRO: SELECIONE UMA OPÇÃO VÁLIDA");
                }
            }
            else {
                var selectedId = +this.cityIdField.nativeElement.value;
                this.cityService.getCity(selectedId)
                    .subscribe(function (message) {
                    if (!!message.message) {
                        _this.snackBar.open(message.message, '', { duration: 2500 });
                    }
                    else if (!!message.payload) {
                        _this.cities = [message.payload];
                    }
                });
            }
        }
        else {
            this.snackBar.open("ERRO: SELECIONE UMA OPÇÃO VÁLIDA", '', { duration: 2500 });
        }
    };
    HomeComponent.prototype.onRemove = function (id) {
        var _this = this;
        this.cityService.remove(id)
            .subscribe(function (res) {
            if (!!res.message) {
                _this.snackBar.open(res.message, '', { duration: 2500 });
            }
            _this.onSearch();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filter'),
        __metadata("design:type", _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"])
    ], HomeComponent.prototype, "filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filterState'),
        __metadata("design:type", _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"])
    ], HomeComponent.prototype, "filterState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cityId'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "cityIdField", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _core_service_csv_service__WEBPACK_IMPORTED_MODULE_4__["CsvService"],
            _core_service_city_service__WEBPACK_IMPORTED_MODULE_5__["CityService"],
            _core_service_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/loading-dialog/loading-dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/loading-dialog/loading-dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\n    overflow-y: hidden;\n}"

/***/ }),

/***/ "./src/app/loading-dialog/loading-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/loading-dialog/loading-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Carregando...</h1>\n<div mat-dialog-content class=\"content\">\n  <mat-spinner></mat-spinner>\n</div>"

/***/ }),

/***/ "./src/app/loading-dialog/loading-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/loading-dialog/loading-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: LoadingDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingDialogComponent", function() { return LoadingDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingDialogComponent = /** @class */ (function () {
    function LoadingDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    LoadingDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading-dialog',
            template: __webpack_require__(/*! ./loading-dialog.component.html */ "./src/app/loading-dialog/loading-dialog.component.html"),
            styles: [__webpack_require__(/*! ./loading-dialog.component.css */ "./src/app/loading-dialog/loading-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], LoadingDialogComponent);
    return LoadingDialogComponent;
}());



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer{\n    flex: 1 1 auto;\n}\na {\n    color: inherit; /* blue colors for links too */\n    text-decoration: inherit; /* no underline */\n    margin-right: 10px;\n  }"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.html":
/*!************************************************!*\
  !*** ./src/app/toolbar/toolbar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>Projeto Cidades</span>\n    <span class=\"spacer\"></span>\n    <a [routerLink]=\"['/home']\">Início</a>\n    <a [routerLink]=\"['/add']\">Nova Cidade</a>\n    <a [routerLink]=\"['/curiosities']\">Curiosidades</a>\n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
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
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
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

module.exports = __webpack_require__(/*! /home/henrique/Documentos/Projetos/projeto-cidades/projeto-cidades-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map