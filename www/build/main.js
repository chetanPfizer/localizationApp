webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loader_loader__ = __webpack_require__(196);
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
        this.progess = 0;
        this.languages = [
            {
                code: "en",
                text: "English"
            },
            {
                code: "es",
                text: "Spanish"
            },
            {
                code: "nl",
                text: "Dutch"
            },
            {
                code: "fr",
                text: "French"
            },
            {
                code: "de",
                text: "German"
            },
            {
                code: "it",
                text: "Italian"
            },
            {
                code: "pt",
                text: "Portuguese"
            },
            {
                code: "ja",
                text: "Japanese"
            },
            {
                code: "ko",
                text: "Korean"
            },
            {
                code: "zh-CN",
                text: "Simple Chinese"
            },
            {
                code: "zh-CN",
                text: "Traditional Chinese"
            },
        ];
        this.subscription = this.loaderProvider.getInput$.subscribe(function (data) {
            // console.log(data);
            if (localStorage.getItem("outputArray") != undefined) {
                _this.outputArray = JSON.parse(localStorage.getItem("outputArray"));
            }
            if (data == undefined) {
                if (localStorage.getItem("inputArray") != undefined) {
                    _this.inputArray = JSON.parse(localStorage.getItem("inputArray"));
                }
            }
            else {
                _this.inputArray = data;
                _this.inputArray = _this.inputArray.map(function (d) {
                    d["isDone"] = false;
                    return d;
                });
                localStorage.setItem("inputArray", JSON.stringify(_this.inputArray));
            }
        });
    }
    HomePage.prototype.onValueChange = function (key, value) {
        this.outputArray[key] = value;
        localStorage.setItem("outputArray", JSON.stringify(this.outputArray));
    };
    HomePage.prototype.download = function () {
        var val = JSON.parse(localStorage.getItem("outputArray"));
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(val));
        var dlAnchorElem = document.getElementById('downloadAnchorElem');
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", this.outputLang + ".json");
        dlAnchorElem.click();
    };
    HomePage.prototype.markAsDone = function (i) {
        this.inputArray[i].isDone = !this.inputArray[i].isDone;
        localStorage.setItem("inputArray", JSON.stringify(this.inputArray));
        this.calculateProgress();
    };
    HomePage.prototype.calculateProgress = function () {
        var completed = this.inputArray.filter(function (ele) {
            return ele.isDone;
        });
        this.progess = Math.round((100 * completed.length / this.inputArray.length + 0.00001) * 100) / 100;
        console.log(100 * completed.length / this.inputArray.length);
    };
    HomePage.prototype.fileUploaded = function (event) {
        this.loaderProvider.fileUploaded(event);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Chetan\Documents\GitHub\localizationApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Localization APP\n\n    </ion-title>\n\n    <ion-buttons end color="danger">\n\n      <button ion-button outline color="danger" (click)="download()">\n\n        EXPORT\n\n      </button>\n\n    </ion-buttons>\n\n    <a id="downloadAnchorElem" style="display:none"></a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-sm-4 >\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label>Input Language</ion-label>\n\n              <ion-select [(ngModel)]="inputLang">\n\n              <ion-option *ngFor="let lang of languages" [value]="lang.code">{{lang.text}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-list>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label>Output Language</ion-label>\n\n              <ion-select [(ngModel)]="outputLang">\n\n              <ion-option *ngFor="let lang of languages" [value]="lang.code">{{lang.text}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-list>\n\n        <ion-item>\n\n          <ion-label>Progress</ion-label>\n\n          <ion-badge item-end [color]="(progess==100)?\'secondary\':\'primary\'">{{progess}} %</ion-badge>\n\n        </ion-item>\n\n        <ion-item>\n\n          <input type=\'file\'  (change)="fileUploaded($event)" />\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-sm-8>\n\n        <section>\n\n          <ion-card *ngFor="let data of inputArray; let i = index">\n\n            <ion-item>\n\n             {{i}} {{data.key}}\n\n              <button item-end ion-button outline="{{!data.isDone}}" color="secondary" (click)="markAsDone(i)" >{{data.isDone?"Varified":"Mark as varified"}}</button>\n\n            </ion-item>\n\n            <ion-card-content>\n\n              <p class="selectable">{{data.value}}</p>\n\n              <ion-item>\n\n                  <ion-label style="margin:0px;"></ion-label>\n\n                  <div item-content style="width:100%;">\n\n                    <elastic-textarea placeholder="Type to compose" lineHeight="22" [content]="outputArray[data.key]" (onValueChange)="onValueChange(data.key,$event)"></elastic-textarea>\n\n                  </div>\n\n              </ion-item>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </section>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Chetan\Documents\GitHub\localizationApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_loader_loader__["a" /* LoaderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_loader_loader__["a" /* LoaderProvider */]) === "function" && _b || Object])
], HomePage);

var _a, _b;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import { Observable } from 'rxjs/Observable';

// key AIzaSyCvYNYCL7booWW22Ymxd89el2W4qaIKnOE
/*
  Generated class for the LoaderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LoaderProvider = (function () {
    function LoaderProvider(http) {
        this.http = http;
        this.langArray = [];
        // Observable getInput source
        this._inputSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](undefined);
        // Observable getInput stream
        this.getInput$ = this._inputSource.asObservable();
        this._destructuringKey = [];
    }
    LoaderProvider.prototype.fileUploaded = function (event) {
        var _this = this;
        var files = event.srcElement.files;
        console.log(files);
        var reader = new FileReader();
        reader.onload = function (event) {
            // console.log(event.target.result);
            var obj = JSON.parse(event.target.result);
            console.log(obj);
            _this.langArray = [];
            var tempObject = {};
            localStorage.setItem("outputArray", JSON.stringify(tempObject));
            _this.destructuring(obj, []);
            console.log(_this.langArray);
            _this.changeInput(_this.langArray);
        };
        reader.readAsText(event.target.files[0]);
    };
    // service command
    LoaderProvider.prototype.changeInput = function (array) {
        this._inputSource.next(array);
    };
    LoaderProvider.prototype.setOutput = function (array) {
        return this.structuring(array);
    };
    LoaderProvider.prototype.destructuring = function (obj, key) {
        this._destructuringKey = key;
        for (var i in Object.getOwnPropertyNames(obj)) {
            if (typeof obj[Object.getOwnPropertyNames(obj)[i]] == "string") {
                if (this._destructuringKey.length == 0) {
                    this.langArray.push({
                        key: Object.getOwnPropertyNames(obj)[i],
                        value: obj[Object.getOwnPropertyNames(obj)[i]]
                    });
                }
                else {
                    this.langArray.push({
                        key: this._destructuringKey.join(".") + "." + Object.getOwnPropertyNames(obj)[i],
                        value: obj[Object.getOwnPropertyNames(obj)[i]]
                    });
                }
            }
            else {
                this._destructuringKey.push(Object.getOwnPropertyNames(obj)[i]);
                this.destructuring(obj[Object.getOwnPropertyNames(obj)[i]], this._destructuringKey);
            }
        }
        this._destructuringKey.pop();
    };
    LoaderProvider.prototype.structuring = function (uniJson) {
        // console.log(uniJson);
        this._uniJson = uniJson;
        var keysArray = [];
        for (var key in uniJson) {
            var keys = key.split(".");
            keysArray.push(keys);
        }
        return this.getObjectFinal(keysArray, "");
    };
    LoaderProvider.prototype.getObjectFinal = function (keysArray, value) {
        // Getting unique keys at first index of provided keysArray
        if (keysArray[0] == "") {
            //Recursion termination case
            return this._uniJson[value];
        }
        //Getting uniqueKey
        var uniqueKey = [];
        for (var i in keysArray) {
            if (uniqueKey.indexOf(keysArray[i][0]) < 0) {
                uniqueKey.push(keysArray[i][0]);
            }
        }
        var returnValue = {};
        var _loop_1 = function (i) {
            var newKeysArray = keysArray.filter(function (e) { return e[0] === uniqueKey[i]; });
            // console.log(newKeysArray);
            var keyNow = newKeysArray[0];
            for (var j in newKeysArray) {
                newKeysArray[j] = newKeysArray[j].slice(1);
            }
            // console.log(keyNow[0]);   
            returnValue[keyNow[0]] = this_1.getObjectFinal(newKeysArray, value + ((value == "") ? "" : ".") + keyNow[0]);
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_loader_loader__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_elastic_textarea_elastic_textarea__ = __webpack_require__(267);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Chetan\Documents\GitHub\localizationApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Chetan\Documents\GitHub\localizationApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 267:
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

},[197]);
//# sourceMappingURL=main.js.map