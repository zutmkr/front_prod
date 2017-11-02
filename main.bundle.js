webpackJsonp([6,9],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryOption; });
var DeliveryOption = (function () {
    function DeliveryOption() {
    }
    DeliveryOption.prototype.updateFrom = function (src) {
        this.id = src.id;
        this.name = src.name;
        this.description = src.description;
        this.price = src.price;
    };
    return DeliveryOption;
}());

//# sourceMappingURL=delivery-option.model.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = (function () {
    function Ingredient() {
    }
    Ingredient.prototype.updateFrom = function (src) {
        this.name = src.name;
        this.percentage = src.percentage;
    };
    return Ingredient;
}());

//# sourceMappingURL=ingredient.model.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    REST_API_URL: 'http://10.0.0.108:8080/api'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layout/layout.module": [
		449,
		0
	],
	"./login/login.module": [
		451,
		3
	],
	"./not-found/not-found.module": [
		452,
		2
	],
	"./shop/shop.module": [
		450,
		4
	],
	"./signup/signup.module": [
		453,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 175;


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(115);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared__["a" /* AuthGuard */]]
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(translate) {
        this.translate = translate;
        translate.addLangs(['pl', 'en']);
        translate.setDefaultLang('pl');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/pl|en/) ? browserLang : 'pl');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(382)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared__ = __webpack_require__(69);
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, '/assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]]
                }
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__shared__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookElementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookElementComponent = (function () {
    function BookElementComponent() {
    }
    BookElementComponent.prototype.ngOnInit = function () {
    };
    return BookElementComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])("book"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1____["c" /* Book */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1____["c" /* Book */]) === "function" && _a || Object)
], BookElementComponent.prototype, "bookElement", void 0);
BookElementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "book-element",
        styles: [__webpack_require__(371)],
        template: __webpack_require__(383)
    }),
    __metadata("design:paramtypes", [])
], BookElementComponent);

var _a;
//# sourceMappingURL=book-element.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services__ = __webpack_require__(44);
/* unused harmony export CheckoutComponent */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutComponent = (function () {
    function CheckoutComponent(productsService, deliveryOptionService, shoppingCartService) {
        this.productsService = productsService;
        this.deliveryOptionService = deliveryOptionService;
        this.shoppingCartService = shoppingCartService;
    }
    CheckoutComponent.prototype.emptyCart = function () {
        this.shoppingCartService.empty();
    };
    CheckoutComponent.prototype.setDeliveryOption = function (option) {
        this.shoppingCartService.setDeliveryOption(option);
    };
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deliveryOptions = this.deliveryOptionService.all();
        this.cart = this.shoppingCartService.get();
        this.cartSubscription = this.cart.subscribe(function (cart) {
            _this.itemCount = cart.items.map(function (x) { return x.quantity; }).reduce(function (p, n) { return p + n; }, 0);
            _this.productsService.all().subscribe(function (products) {
                _this.products = products;
                _this.cartItems = cart.items
                    .map(function (item) {
                    var product = _this.products.find(function (p) { return p.id === item.productId; });
                    return __assign({}, item, { product: product, totalCost: product.price * item.quantity });
                });
            });
        });
    };
    CheckoutComponent.prototype.ngOnDestroy = function () {
        if (this.cartSubscription) {
            this.cartSubscription.unsubscribe();
        }
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "app-checkout",
        styles: [__webpack_require__(372)],
        template: __webpack_require__(384)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services__["a" /* ProductsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services__["a" /* ProductsDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services__["d" /* DeliveryOptionsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services__["d" /* DeliveryOptionsDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services__["b" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services__["b" /* ShoppingCartService */]) === "function" && _c || Object])
], CheckoutComponent);

var _a, _b, _c;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.pushRightClass = 'push-right';
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */] && window.innerWidth <= 992 && _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    Object.defineProperty(HeaderComponent.prototype, "itemsInBasket", {
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(385),
        styles: [__webpack_require__(373)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__(194);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__(198);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_checkout_component__ = __webpack_require__(193);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_confirmation_order_confirmation_component__ = __webpack_require__(196);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shopping_cart_shopping_cart_component__ = __webpack_require__(197);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_element_book_element_component__ = __webpack_require__(192);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__book_element_book_element_component__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services__ = __webpack_require__(44);
/* unused harmony export OrderConfirmationComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderConfirmationComponent = (function () {
    function OrderConfirmationComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    OrderConfirmationComponent.prototype.ngOnInit = function () {
        this.shoppingCartService.empty();
    };
    return OrderConfirmationComponent;
}());
OrderConfirmationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: "app-order-confirmation",
        template: __webpack_require__(386)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services__["b" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services__["b" /* ShoppingCartService */]) === "function" && _a || Object])
], OrderConfirmationComponent);

var _a;
//# sourceMappingURL=order-confirmation.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services__ = __webpack_require__(44);
/* unused harmony export ShoppingCartComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(productsService, shoppingCartService) {
        this.productsService = productsService;
        this.shoppingCartService = shoppingCartService;
    }
    ShoppingCartComponent.prototype.emptyCart = function () {
        this.shoppingCartService.empty();
    };
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = this.productsService.all();
        this.cart = this.shoppingCartService.get();
        this.cartSubscription = this.cart.subscribe(function (cart) {
            _this.itemCount = cart.items.map(function (x) { return x.quantity; }).reduce(function (p, n) { return p + n; }, 0);
        });
    };
    ShoppingCartComponent.prototype.ngOnDestroy = function () {
        if (this.cartSubscription) {
            this.cartSubscription.unsubscribe();
        }
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ChangeDetectionStrategy */].OnPush,
        selector: "app-shopping-cart",
        template: __webpack_require__(387)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services__["a" /* ProductsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services__["a" /* ProductsDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_services__["b" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_services__["b" /* ShoppingCartService */]) === "function" && _b || Object])
], ShoppingCartComponent);

var _a, _b;
//# sourceMappingURL=shopping-cart.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__(388),
        styles: [__webpack_require__(374)]
    })
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }
        console.log('is not logged redirecting to login!');
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book() {
    }
    Book.prototype.updateFrom = function (src) {
        this.id = src.id;
        this.author = src.author;
        this.country = src.country;
        this.language = src.language;
        this.link = src.link;
        this.title = src.title;
        this.pages = src.pages;
        this.year = src.year;
        this.price = src.price;
    };
    return Book;
}());

//# sourceMappingURL=book.model.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItem; });
var CartItem = (function () {
    function CartItem() {
        this.quantity = 0;
    }
    return CartItem;
}());

//# sourceMappingURL=cart-item.model.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ingredient_model__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });

var Product = (function () {
    function Product() {
    }
    Product.prototype.updateFrom = function (src) {
        this.id = src.id;
        this.name = src.name;
        this.description = src.description;
        this.price = src.price;
        this.ingredients =
            src.ingredients
                .map(function (i) {
                var ingredient = new __WEBPACK_IMPORTED_MODULE_0__ingredient_model__["a" /* Ingredient */]();
                ingredient.updateFrom(i);
                return ingredient;
            });
    };
    return Product;
}());

//# sourceMappingURL=product.model.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCart; });
var ShoppingCart = (function () {
    function ShoppingCart() {
        this.items = new Array();
        this.grossTotal = 0;
        this.deliveryTotal = 0;
        this.itemsTotal = 0;
    }
    ShoppingCart.prototype.updateFrom = function (src) {
        this.items = src.items;
        this.deliveryOptionId = src.deliveryOptionId;
        this.grossTotal = src.grossTotal;
        this.deliveryTotal = src.deliveryTotal;
        this.itemsTotal = src.itemsTotal;
    };
    return ShoppingCart;
}());

//# sourceMappingURL=shopping-cart.model.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_stat_module__ = __webpack_require__(208);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_header_page_header_module__ = __webpack_require__(206);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderComponent = (function () {
    function PageHeaderComponent() {
    }
    return PageHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "heading", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "icon", void 0);
PageHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-page-header',
        template: __webpack_require__(389),
        styles: [__webpack_require__(375)]
    })
], PageHeaderComponent);

//# sourceMappingURL=page-header.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_header_component__ = __webpack_require__(205);
/* unused harmony export PageHeaderModule */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageHeaderModule = (function () {
    function PageHeaderModule() {
    }
    return PageHeaderModule;
}());
PageHeaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */]]
    })
], PageHeaderModule);

//# sourceMappingURL=page-header.module.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatComponent = (function () {
    function StatComponent() {
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    StatComponent.prototype.ngOnInit = function () { };
    return StatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", String)
], StatComponent.prototype, "bgClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", String)
], StatComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", Number)
], StatComponent.prototype, "count", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", String)
], StatComponent.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", Number)
], StatComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], StatComponent.prototype, "event", void 0);
StatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-stat',
        template: __webpack_require__(390),
        styles: [__webpack_require__(376)]
    }),
    __metadata("design:paramtypes", [])
], StatComponent);

var _a;
//# sourceMappingURL=stat.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat_component__ = __webpack_require__(207);
/* unused harmony export StatModule */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatModule = (function () {
    function StatModule() {
    }
    return StatModule;
}());
StatModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]]
    })
], StatModule);

//# sourceMappingURL=stat.module.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* unused harmony export SharedPipesModule */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedPipesModule = (function () {
    function SharedPipesModule() {
    }
    return SharedPipesModule;
}());
SharedPipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */]
        ],
        declarations: []
    })
], SharedPipesModule);

//# sourceMappingURL=shared-pipes.module.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* unused harmony export BuildHeader */
/* unused harmony export SERVICE_URI */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function BuildHeader(authorizationKey) {
    var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
    if (authorizationKey) {
        headers.set('Authorization', 'Bearer ' + authorizationKey);
    }
    return headers;
}
var SERVICE_URI = {
    AUTH: __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].REST_API_URL + "/auth",
    BOOK: __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].REST_API_URL + "/book",
    USER: __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].REST_API_URL + "/user"
};
var AbstractService = (function () {
    function AbstractService(http) {
        this.http = http;
    }
    AbstractService.prototype.GET = function (id) {
        this.validateHttp();
        var url = this.RS_URI + "/" + id;
        return this.http
            .get(url, { headers: BuildHeader() })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    AbstractService.prototype.PUT = function (ob, id) {
        this.validateHttp();
        var url = this.RS_URI + "/" + id;
        return this.http
            .put(url, JSON.stringify(ob), { headers: BuildHeader() })
            .toPromise()
            .then(function () { return ob; })
            .catch(this.handleError);
    };
    AbstractService.prototype.POST = function (ob) {
        this.validateHttp();
        return this.http
            .post(this.RS_URI, JSON.stringify(ob), { headers: BuildHeader() })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    AbstractService.prototype.DELETE = function (id) {
        this.validateHttp();
        var url = this.RS_URI + "/" + id;
        return this.http
            .delete(url, { headers: BuildHeader() })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    AbstractService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    AbstractService.prototype.validateHttp = function () {
        if (this.http == null || this.RS_URI == null) {
            throw new Error('Http object or RS_URI is null');
        }
    };
    return AbstractService;
}());
AbstractService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AbstractService);

var _a;
//# sourceMappingURL=abstract.service.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookService = (function (_super) {
    __extends(BookService, _super);
    function BookService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    // jesli jakis term znajduje sie w jsonie, to pobierana jest lista ksiazek
    BookService.prototype.search = function (term) {
        return this.http
            .get('assets/book.json')
            .map(function (response) { return response.json()
            .filter(function (book) {
            return book.title
                .toLowerCase()
                .indexOf(term.toLowerCase()) >= 0;
        }); });
    };
    BookService.prototype.getAll = function () {
        return this.http
            .get('assets/books.json')
            .map(function (response) { return response.json(); });
    };
    return BookService;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_service__["a" /* AbstractService */]));
BookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BookService);

var _a;
//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_delivery_option_model__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__caching_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryOptionsDataService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeliveryOptionsDataService = (function (_super) {
    __extends(DeliveryOptionsDataService, _super);
    function DeliveryOptionsDataService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    DeliveryOptionsDataService.prototype.all = function () {
        var _this = this;
        return this.cache(function () { return _this.deliveryOptions; }, function (val) { return _this.deliveryOptions = val; }, function () { return _this.http
            .get("./assets/delivery-options.json")
            .map(function (response) { return response.json()
            .map(function (item) {
            var model = new __WEBPACK_IMPORTED_MODULE_3__models_delivery_option_model__["a" /* DeliveryOption */]();
            model.updateFrom(item);
            return model;
        }); }); });
    };
    return DeliveryOptionsDataService;
}(__WEBPACK_IMPORTED_MODULE_4__caching_service__["a" /* CachcingServiceBase */]));
DeliveryOptionsDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DeliveryOptionsDataService);

var _a;
//# sourceMappingURL=delivery-options.service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_models__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__caching_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsDataService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var count = 0;
var ProductsDataService = (function (_super) {
    __extends(ProductsDataService, _super);
    function ProductsDataService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    ProductsDataService.prototype.all = function () {
        var _this = this;
        return this.cache(function () { return _this.products; }, function (val) { return _this.products = val; }, function () { return _this.http
            .get("./assets/products.json")
            .map(function (response) { return response.json()
            .map(function (item) {
            var model = new __WEBPACK_IMPORTED_MODULE_2_app_shared_models__["b" /* Product */]();
            model.updateFrom(item);
            return model;
        }); }); });
    };
    return ProductsDataService;
}(__WEBPACK_IMPORTED_MODULE_4__caching_service__["a" /* CachcingServiceBase */]));
ProductsDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductsDataService);

var _a;
//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_models__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CART_KEY = "cart";
var ShoppingCartService = (function () {
    function ShoppingCartService(storageService, productService, deliveryOptionsService) {
        var _this = this;
        this.storageService = storageService;
        this.productService = productService;
        this.deliveryOptionsService = deliveryOptionsService;
        this.subscribers = new Array();
        this.storage = this.storageService.get();
        this.productService.all().subscribe(function (products) { return _this.products = products; });
        this.deliveryOptionsService.all().subscribe(function (options) { return _this.deliveryOptions = options; });
        this.subscriptionObservable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.subscribers.push(observer);
            observer.next(_this.retrieve());
            return function () {
                _this.subscribers = _this.subscribers.filter(function (obs) { return obs !== observer; });
            };
        });
    }
    ShoppingCartService.prototype.get = function () {
        return this.subscriptionObservable;
    };
    ShoppingCartService.prototype.addItem = function (product, quantity) {
        var cart = this.retrieve();
        var item = cart.items.find(function (p) { return p.productId === product.id; });
        if (item === undefined) {
            item = new __WEBPACK_IMPORTED_MODULE_2_app_shared_models__["c" /* CartItem */]();
            item.productId = product.id;
            cart.items.push(item);
        }
        item.quantity += quantity;
        cart.items = cart.items.filter(function (cartItem) { return cartItem.quantity > 0; });
        if (cart.items.length === 0) {
            cart.deliveryOptionId = undefined;
        }
        this.calculateCart(cart);
        this.save(cart);
        this.dispatch(cart);
    };
    ShoppingCartService.prototype.empty = function () {
        var newCart = new __WEBPACK_IMPORTED_MODULE_2_app_shared_models__["d" /* ShoppingCart */]();
        this.save(newCart);
        this.dispatch(newCart);
    };
    ShoppingCartService.prototype.setDeliveryOption = function (deliveryOption) {
        var cart = this.retrieve();
        cart.deliveryOptionId = deliveryOption.id;
        this.calculateCart(cart);
        this.save(cart);
        this.dispatch(cart);
    };
    ShoppingCartService.prototype.calculateCart = function (cart) {
        var _this = this;
        cart.itemsTotal = cart.items
            .map(function (item) { return item.quantity * _this.products.find(function (p) { return p.id === item.productId; }).price; })
            .reduce(function (previous, current) { return previous + current; }, 0);
        cart.deliveryTotal = cart.deliveryOptionId ?
            this.deliveryOptions.find(function (x) { return x.id === cart.deliveryOptionId; }).price :
            0;
        cart.grossTotal = cart.itemsTotal + cart.deliveryTotal;
    };
    ShoppingCartService.prototype.retrieve = function () {
        var cart = new __WEBPACK_IMPORTED_MODULE_2_app_shared_models__["d" /* ShoppingCart */]();
        var storedCart = this.storage.getItem(CART_KEY);
        if (storedCart) {
            cart.updateFrom(JSON.parse(storedCart));
        }
        return cart;
    };
    ShoppingCartService.prototype.save = function (cart) {
        this.storage.setItem(CART_KEY, JSON.stringify(cart));
    };
    ShoppingCartService.prototype.dispatch = function (cart) {
        this.subscribers
            .forEach(function (sub) {
            try {
                sub.next(cart);
            }
            catch (e) {
                // we want all subscribers to get the update even if one errors.
            }
        });
    };
    return ShoppingCartService;
}());
ShoppingCartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1____["c" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1____["c" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1____["a" /* ProductsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1____["a" /* ProductsDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1____["d" /* DeliveryOptionsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1____["d" /* DeliveryOptionsDataService */]) === "function" && _c || Object])
], ShoppingCartService);

var _a, _b, _c;
//# sourceMappingURL=shopping-cart.service.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_share__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_share__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* unused harmony export LocalStorageServie */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StorageService = (function () {
    function StorageService() {
    }
    return StorageService;
}());

var LocalStorageServie = (function (_super) {
    __extends(LocalStorageServie, _super);
    function LocalStorageServie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalStorageServie.prototype.get = function () {
        return localStorage;
    };
    return LocalStorageServie;
}(StorageService));
LocalStorageServie = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], LocalStorageServie);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".product-list {\n  list-style-type: none;\n  margin: 0; }\n\n.product-container {\n  padding: 2rem 3rem 0 0;\n  position: relative;\n  border: 1px solid #EFEFEF;\n  margin: 10px 0; }\n  .product-container:hover {\n    box-shadow: 0 0 5px rgba(50, 50, 50, 0.3); }\n  .product-container .product_image {\n    max-height: 250px; }\n  .product-container .product_price {\n    float: right;\n    margin-top: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".checkout_row .product_image {\n  max-height: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".topnav {\n  border-radius: 0;\n  background-color: #9e312d;\n  padding: 6px;\n  z-index: 2; }\n  .topnav .text-center {\n    text-align: center;\n    padding-left: 0;\n    cursor: pointer; }\n  .topnav .top-right-nav .buy-now a {\n    color: #999; }\n  .topnav .top-right-nav .dropdown-menu {\n    top: 40px;\n    right: -5px;\n    left: auto; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body .media-heading {\n      font-size: 14px;\n      font-weight: bold;\n      margin-bottom: 0; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p {\n      margin: 0; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p.last {\n      font-size: 13px;\n      margin-bottom: 0; }\n    .topnav .top-right-nav .dropdown-menu hr {\n      margin-top: 1px;\n      margin-bottom: 4px; }\n\n.messages {\n  width: 300px; }\n  .messages .media {\n    border-bottom: 1px solid #DDD;\n    padding: 5px 10px; }\n    .messages .media:last-child {\n      border-bottom: none; }\n  .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  .messages .media-body .small {\n    margin: 0; }\n  .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n\n.header .navbar {\n  background: #9e312d !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 55px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #672625;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #672625;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n    .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #541f1e;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #541f1e;\n    color: #fff; }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n    .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #672625; }\n      .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: .75rem 1.5rem;\n        padding-top: 1rem; }\n    .sidebar .sidebar-dropdown .panel-title a:hover, .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #541f1e; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #672625;\n      border: 0 solid transparent; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #FFF; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #541f1e; }\n\n.nested-menu .list-group-item {\n  cursor: pointer; }\n\n.nested-menu .nested {\n  list-style-type: none; }\n\n.nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n\n.nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #FFF;\n    padding: 10px;\n    display: block; }\n\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<!--  <div class=\"medium-3 columns text-center\">\n    <img src=\"./assets/{{product.id}}.jpg\"\n                   class=\"product_image\"/> \n\n            </div>-->\n  <div class=\"medium-9 columns\">\n\n    <h4>\n\n      <span class=\"text--bold js-product-name\" [innerHtml]=\"'BOOK_ELEMENT.TITLE' | translate: {val:bookElement.title}\"></span>\n      <small class=\"product_price js-product-price\" [innerHtml]=\"'BOOK_ELEMENT.PRICE' | translate:{val: bookElement.price | currency:'GBP':true }\"></small> \n\n    </h4>\n\n    <p class=\"js-product-desc\" [innerHtml]=\" 'BOOK_ELEMENT.AUTHOR' | translate:{ val: bookElement.author } \"></p>\n    \n    <p class=\"js-product-desc\" [innerHtml]=\" 'BOOK_ELEMENT.COUNTRY' | translate:{ val: bookElement.country } \"></p>\n\n    <p class=\"js-product-desc\" [innerHtml]=\" 'BOOK_ELEMENT.LANG' | translate:{ val: bookElement.language } \"></p>\n\n    <p class=\"js-product-desc\" [innerHtml]=\" 'BOOK_ELEMENT.PAGES' | translate:{ val: bookElement.pages } \"></p>\n\n    <p class=\"js-product-desc\" [innerHtml]=\" 'BOOK_ELEMENT.YEAR' | translate:{ val: bookElement.year } \"></p>\n\n    <p class=\"js-product-desc\" [innerHtml]=\" 'BOOK_ELEMENT.LINK' | translate:{ val:bookElement.link }\"></p>\n              \n              <!--\n              <p>\n\n                public author: string;\n    public country:  string;\n    public language: string;\n    public link:   string;\n    public title:    string;\n\n    public pages:  number;\n    public year:   number;\n\n    public price:    string;\n                <button type=\"button\"\n                        class=\"button success large js-btn-add\"\n                        (click)=\"addProductToCart(product, 1)\">Add To Cart</button>\n                <button type=\"button\"\n                        class=\"button small js-btn-remove\"\n                        *ngIf=\"productInCart(product) | async\"\n                        (click)=\"removeProductFromCart(product, 1)\">Remove item from cart</button>\n              </p>\n              -->\n\n  </div>\n\n</div>"

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"medium-4 columns\">\n    <h2>\n      <i class=\"material-icons\">shopping_basket</i>\n      <span>Checkout</span>\n    </h2>\n  </div>\n  <div class=\"medium-4 columns text-right\">\n    <h4>\n      Order Total\n      <span class=\"text--red text--bold js-gross-total\">{{(cart | async).grossTotal | currency:'GBP':true}}</span>\n    </h4>\n  </div>\n  <div class=\"medium-4 columns text-right\">\n    <h5 class=\"text--red\"\n       *ngIf=\"(cart | async).deliveryOptionId === undefined\">Please select a delivery option...</h5>\n    <a class=\"success button large\"\n       *ngIf=\"(cart | async).deliveryOptionId !== undefined\"\n       routerLink=\"/confirmed\">Purchase Order</a>\n  </div>\n  <hr/>\n</div>\n<div class=\"row\">\n  <div class=\"medium-8 columns\">\n    <h4>Delivery 1 of 1</h4>\n    <small>Dispatching to the UK....</small>\n    <div class=\"row checkout_row\"\n        *ngFor=\"let item of cartItems\">\n      <div class=\"medium-2 columns text-center\">\n          <img src=\"./assets/{{item.product.id}}.jpg\"\n                class=\"product_image\"/>\n      </div>\n      <div class=\"medium-5 columns\">\n          <span class=\"text--bold js-product-name\">{{item.product.name}}</span>\n          <p class=\"js-product-desc\">{{item.product.description}}</p>\n      </div>\n      <div class=\"medium-2 columns text-right\">\n          <p class=\"text--red js-product-costs\">{{item.quantity}} x {{item.product.price | currency:'GBP':true}}</p>\n      </div>\n      <div class=\"medium-3 columns text-right\">\n          <p class=\"text--bold text--red js-product-total\">{{item.totalCost | currency:'GBP':true}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"medium-4 columns\">\n    <h4>Delivery Options</h4>\n\n    <div class=\"row delivery-option\"\n        *ngFor=\"let option of deliveryOptions | async\">\n        <div class=\"small-1 columns\">\n          <input type=\"radio\"\n                 name=\"delivery_option\"\n                 id=\"{{option.name}}\"\n                 [checked]=\"option.id === (cart | async).deliveryOptionId\"\n                 (click)=\"setDeliveryOption(option)\">\n        </div>\n        <div class=\"small-9 columns\">\n          <label class=\"text--bold js-option-name\" for=\"{{option.name}}\" (click)=\"setDeliveryOption(option)\">{{option.name}}</label>\n        </div>\n        <div class=\"small-2 columns\">\n          <p class=\"text--bold text--red js-option-price\">{{option.price | currency:'GBP':true}}</p>\n        </div>\n        <div class=\"small-12 columns\">\n          <p>{{option.description}}</p>\n        </div>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"small-10 columns small-centered\">\n      <a class=\"warning button expanded\"\n        routerLink=\"/\">Continue Shopping</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

module.exports = "<div class=\"pos-f-t fixed-top header\">\n    \n    <nav class=\"navbar navbar-inverse bg-inverse navbar-toggleable-md\">\n\n        <button class=\"navbar-toggler navbar-toggler-right\" (click)=\"toggleSidebar()\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{ 'BOOK_SHOP' | translate}}</a>\n        \n        <div class=\"collapse navbar-collapse\">\n\n            <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"{{ 'SEARCH' | translate }}\" >\n            </form>\n\n            <ul class=\"navbar-nav ml-auto mt-2 mt-md-0\">\n                \n                <li class=\"nav-item\" >\n                \n                    <a href=\"javascript:void(0)\" class=\"nav-link\" >\n                        <i class=\"fa fa-shopping-cart\"></i> {{ 'CART' | translate }} <b class=\"caret\">{{itemsInBasket}}</b>  <b class=\"caret\"> </b>\n                    </a>\n                </li>\n                \n                <li class=\"nav-item dropdown\" ngbDropdown>\n                 \n                    <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                        <i class=\"fa fa-language\"></i> {{ 'LANGUAGE' | translate }} <b class=\"caret\"></b>\n                    </a>\n                 \n                    <div class=\"dropdown-menu dropdown-menu-right\">\n\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('pl')\">{{ 'POLISH' | translate }}</a>\n\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('en')\">{{ 'ENGLISH' | translate }}</a>\n\n                    </div>\n                </li>\n\n                <li class=\"nav-item dropdown\" ngbDropdown>\n                    \n                    <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                        <i class=\"fa fa-user\"></i> Kacper Sobisz <b class=\"caret\"></b>\n                    </a>\n\n                    <div class=\"dropdown-menu dropdown-menu-right\">\n\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i class=\"fa fa-fw fa-user\"></i> {{ 'PROFILE' | translate }}</a>\n\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i class=\"fa fa-fw fa-gear\"></i> {{ 'SETTINGS' | translate }}</a>\n\n                        <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\"><i class=\"fa fa-fw fa-power-off\"></i> {{ 'LOG_OUT' | translate }} </a>\n                    </div>\n\n                </li>\n\n            </ul>\n\n        </div>\n\n    </nav>\n\n</div>"

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"medium-12 columns\">\n    <h1>Thank you for your order, it will be dispatched shortly!</h1>\n  </div>\n</div>\n<br/>\n<br/>\n<div class=\"row\">\n  <div class=\"medium-8 small-12 columns small-centered text-center\">\n    <a routerLink=\"/\" class=\"button success large expanded\">Continue Shopping!</a>\n  </div>\n</div>\n"

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"small-12 columns\">\n    <h3>\n      <i class=\"material-icons\">shopping_basket</i>\n      Your Shopping Basket\n    </h3>\n  </div>\n</div>\n<br/>\n<div class=\"row\">\n  <div class=\"small-12 columns\">\n    <h5>\n      Sub Total ({{itemCount}} items):\n      <span class=\"text--red text--bold js-cart-total\">{{(cart | async).grossTotal | currency:'GBP':true}}</span>\n    </h5>\n  </div>\n</div>\n<br/>\n<div class=\"row\">\n  <div class=\"small-12 columns\">\n    <a class=\"success button large expanded\"\n       [attr.disabled]=\"itemCount === 0 ? true : null\"\n       routerLink=\"/checkout\">Proceed To Checkout</a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"small-12 columns text-center\">\n    or\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"small-12 columns\">\n    <button type=\"button\"\n            class=\"secondary button small expanded js-btn-empty-cart\"\n            (click)=\"emptyCart()\"\n            [attr.disabled]=\"itemCount === 0 ? true : null\">\n      Empty shopping basket\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\n    \n    <ul class=\"list-group\">\n\n        <a routerLink=\"/shop\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-archive\"></i>&nbsp;{{ 'MAIN_WEB' | translate }}\n        </a>\n\n        <a routerLink=\"/cart\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-shopping-cart\"></i>&nbsp;{{ 'CART' | translate }}\n        </a>\n\n        <a routerLink=\"/contact\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-comment\"></i>&nbsp;{{ 'CONTACT' | translate }}\n        </a>\n\n    </ul>\n\n</nav>"

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <h2 class=\"page-header\">\n            {{heading}}\n        </h2>\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            </li>\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{icon}}\"></i> {{heading}}</li>\n        </ol>\n    </div>\n</div>"

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-inverse {{bgClass}}\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col col-xs-3\">\n                <i class=\"fa {{icon}} fa-5x\"></i>\n            </div>\n            <div class=\"col col-xs-9 text-right\">\n                <div class=\"d-block huge\">{{count}}</div>\n                <div class=\"d-block\">{{label}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <span class=\"float-left\">View Details {{data}}</span>\n        <a href=\"javascript:void(0)\" class=\"float-right card-inverse\">\n            <span ><i class=\"fa fa-arrow-circle-right\"></i></span>\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_service__ = __webpack_require__(211);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__book_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__caching_service__ = __webpack_require__(71);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(215);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__storage_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_cart_service__ = __webpack_require__(214);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__shopping_cart_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_service__ = __webpack_require__(213);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__products_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delivery_options_service__ = __webpack_require__(212);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__delivery_options_service__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(176);


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_shared_pipes_module__ = __webpack_require__(209);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(195);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules__ = __webpack_require__(204);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guard_auth_guard__ = __webpack_require__(199);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__guard_auth_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(44);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__services__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models__ = __webpack_require__(70);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__models__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_model__ = __webpack_require__(200);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__book_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_cart_model__ = __webpack_require__(203);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__shopping_cart_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_item_model__ = __webpack_require__(201);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__cart_item_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delivery_option_model__ = __webpack_require__(113);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ingredient_model__ = __webpack_require__(114);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_model__ = __webpack_require__(202);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__product_model__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CachcingServiceBase; });

var CachcingServiceBase = (function () {
    function CachcingServiceBase() {
    }
    CachcingServiceBase.prototype.cache = function (getter, setter, retreive) {
        var cached = getter();
        if (cached !== undefined) {
            return cached;
        }
        else {
            var val = retreive().share();
            setter(val);
            return val;
        }
    };
    return CachcingServiceBase;
}());

//# sourceMappingURL=caching.service.js.map

/***/ })

},[447]);
//# sourceMappingURL=main.bundle.js.map