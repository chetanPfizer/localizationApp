webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loader_loader__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, loaderProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loaderProvider = loaderProvider;
        this.inputArray = [];
        this.outputArray = {};
        if (localStorage.getItem("outputArray") != undefined) {
            this.outputArray = JSON.parse(localStorage.getItem("outputArray"));
        }
        loaderProvider.getInput().subscribe(function (data) {
            // console.log(data);
            _this.inputArray = data;
        });
    }
    HomePage.prototype.onValueChange = function (key, value) {
        this.outputArray[key] = value;
        console.log(this.outputArray);
        localStorage.setItem("outputArray", JSON.stringify(this.outputArray));
    };
    HomePage.prototype.export = function () {
        this.loaderProvider.setOutput(this.outputArray);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/pramodudakeri/Desktop/Localize/Localize/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Localization APP\n    </ion-title>\n    <ion-buttons end color="danger">\n      <button ion-button outline color="danger" (click)="export()">\n        EXPORT\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let data of inputArray">\n    <ion-card-header>\n      {{data.key}}\n    </ion-card-header>\n    <ion-card-content>\n      <p>{{data.value}}</p>\n      <ion-item>\n          <ion-label style="margin:0px;"></ion-label>\n          <div item-content style="width:100%;">\n            <elastic-textarea placeholder="Type to compose" lineHeight="22" [content]="outputArray[data.key]" (onValueChange)="onValueChange(data.key,$event)"></elastic-textarea>\n          </div>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/pramodudakeri/Desktop/Localize/Localize/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_loader_loader__["a" /* LoaderProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// key AIzaSyCvYNYCL7booWW22Ymxd89el2W4qaIKnOE
/*
  Generated class for the LoaderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LoaderProvider = (function () {
    function LoaderProvider(http) {
        this.http = http;
        this.tempName = "";
        this.langArray = [];
    }
    LoaderProvider.prototype.getInput = function () {
        var _this = this;
        return this.http.get('../../assets/data/input.json')
            .map(function (res) {
            var data = res.json();
            //console.log(data);
            // this.traverse(data,this.process);
            _this.printLang(data, "");
            return _this.langArray;
        });
    };
    LoaderProvider.prototype.setOutput = function (array) {
        this.structuring(array);
    };
    LoaderProvider.prototype.process = function (key, value) {
        console.log(key + " : " + value);
    };
    LoaderProvider.prototype.traverse = function (o, func) {
        for (var i in o) {
            func.apply(this, [i, o[i]]);
            if (o[i] !== null && typeof (o[i]) == "object") {
                //going one step down in the object tree!!
                this.traverse(o[i], func);
            }
        }
    };
    LoaderProvider.prototype.printLang = function (obj, temp) {
        if (this.tempName != "" && this.tempName != undefined) {
            this.tempName = this.tempName + "." + temp;
        }
        else {
            this.tempName = temp;
        }
        for (var i in Object.getOwnPropertyNames(obj)) {
            if (typeof obj[Object.getOwnPropertyNames(obj)[i]] == "string") {
                if (this.tempName != "" && this.tempName != undefined) {
                    //console.log(this.tempName +"."+ Object.getOwnPropertyNames(obj)[i]+": "+obj[Object.getOwnPropertyNames(obj)[i]]);
                    this.langArray.push({
                        key: this.tempName + "." + Object.getOwnPropertyNames(obj)[i],
                        value: obj[Object.getOwnPropertyNames(obj)[i]]
                    });
                }
                else {
                    //console.log(Object.getOwnPropertyNames(obj)[i]+":  "+obj[Object.getOwnPropertyNames(obj)[i]]);
                    this.langArray.push({
                        key: Object.getOwnPropertyNames(obj)[i],
                        value: obj[Object.getOwnPropertyNames(obj)[i]]
                    });
                }
            }
            else {
                this.printLang(obj[Object.getOwnPropertyNames(obj)[i]], Object.getOwnPropertyNames(obj)[i]);
            }
        }
        this.tempName = "";
    };
    LoaderProvider.prototype.structuring = function (uniJson) {
        // console.log(uniJson);
        var mulJson = {};
        var keysArray = [];
        for (var key in uniJson) {
            var keys = key.split(".");
            keysArray.push(keys);
            // console.log(this.getObject(keys,uniJson[key]));
        }
        console.log(this.getObjectFinal(keysArray, "aa"));
    };
    LoaderProvider.prototype.getObject = function (keys, value) {
        var returnValue = {};
        if (keys.length == 1) {
            returnValue[keys[0]] = value;
            return returnValue;
        }
        else {
            returnValue[keys[0]] = this.getObject(keys.slice(1), value);
            return returnValue;
        }
    };
    LoaderProvider.prototype.getObjectFinal = function (keysArray, value) {
        // Getting unique keys at first index of provided keysArray
        if (keysArray[0] == "" || keysArray[0] == null || keysArray[0] == undefined) {
            console.log("eddddddddd");
            var returnValue_1 = {};
            returnValue_1[keysArray[0]] = value;
            return returnValue_1;
        }
        var uniqueKey = [];
        for (var i in keysArray) {
            if (uniqueKey.indexOf(keysArray[i][0]) < 0) {
                uniqueKey.push(keysArray[i][0]);
            }
        }
        // console.log(uniqueKey);
        var returnValue = {};
        var _loop_1 = function (i) {
            var newKeysArray = keysArray.filter(function (e) { return e[0] === uniqueKey[i]; });
            console.log(newKeysArray);
            var keyNow = newKeysArray[0];
            for (var j in newKeysArray) {
                newKeysArray[j] = newKeysArray[j].slice(1);
            }
            returnValue[keyNow] = this_1.getObjectFinal(newKeysArray, "a");
        };
        var this_1 = this;
        for (var i in uniqueKey) {
            _loop_1(i);
        }
        return returnValue;
    };
    return LoaderProvider;
}());
LoaderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LoaderProvider);

var _a;
//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(214);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_loader_loader__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_elastic_textarea_elastic_textarea__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__components_elastic_textarea_elastic_textarea__["a" /* ElasticTextarea */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_loader_loader__["a" /* LoaderProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/pramodudakeri/Desktop/Localize/Localize/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/pramodudakeri/Desktop/Localize/Localize/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticTextarea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElasticTextarea = (function () {
    function ElasticTextarea() {
        this.onValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.content = "";
        this.lineHeight = "22px";
    }
    ElasticTextarea.prototype.ngAfterViewInit = function () {
        this.txtArea = this.ionTxtArea._elementRef.nativeElement.children[0];
        this.txtArea.style.height = this.lineHeight + "px";
    };
    ElasticTextarea.prototype.onChange = function (newValue) {
        this.txtArea.style.height = this.lineHeight + "px";
        this.txtArea.style.height = this.txtArea.scrollHeight + "px";
        this.onValueChange.emit(newValue);
    };
    return ElasticTextarea;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], ElasticTextarea.prototype, "onValueChange", void 0);
ElasticTextarea = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'elastic-textarea',
        inputs: ['placeholder', 'lineHeight', 'content'],
        template: "\n  <ion-textarea #ionTxtArea\n    placeholder='{{placeholder}}'\n    [(ngModel)]=\"content\"\n    (ngModelChange)='onChange($event)'></ion-textarea>\n  ",
        queries: {
            ionTxtArea: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */]('ionTxtArea')
        }
    }),
    __metadata("design:paramtypes", [])
], ElasticTextarea);

//# sourceMappingURL=elastic-textarea.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map