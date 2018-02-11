webpackJsonp(["guides.module"],{

/***/ "../../../../../src/app/guides/guides.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GuidesComponent = (function () {
    function GuidesComponent(route) {
        this.route = route;
        this.contents = {
            'getting-started': __webpack_require__("../../../../raw-loader/index.js!../../../../prism-hightlight-loader/index.js!../../../../markdown-loader/index.js!../../../../../../../README.md"),
        };
    }
    GuidesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-guides',
            template: "\n    <mat-card class=\"container\">\n      <div *ngIf=\"route.params | async as params\" [innerHtml]=\"contents[params.id]\"></div>\n    </mat-card>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], GuidesComponent);
    return GuidesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guides/guides.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidesModule", function() { return GuidesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guides_component__ = __webpack_require__("../../../../../src/app/guides/guides.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GuidesModule = (function () {
    function GuidesModule() {
    }
    GuidesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', pathMatch: 'full', redirectTo: 'getting-started' },
                    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__guides_component__["a" /* GuidesComponent */] },
                ]),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__guides_component__["a" /* GuidesComponent */],
            ],
        })
    ], GuidesModule);
    return GuidesModule;
}());



/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../prism-hightlight-loader/index.js!../../../../markdown-loader/index.js!../../../../../../../README.md":
/***/ (function(module, exports) {

module.exports = "<html><head></head><body><h1 id=\"ngx-rapid\">ngx-rapid</h1>\n<p>Core: <a href=\"https://badge.fury.io/js/%40ngx-rapid%2Fcore\"><img src=\"https://badge.fury.io/js/%40ngx-rapid%2Fcore.svg\" alt=\"npm version\"></a> \n Form: <a href=\"https://badge.fury.io/js/%40ngx-rapid%2Fform\"><img src=\"https://badge.fury.io/js/%40ngx-rapid%2Fform.svg\" alt=\"npm version\"></a> \n Crud: <a href=\"https://badge.fury.io/js/%40ngx-rapid%2Fcrud\"><img src=\"https://badge.fury.io/js/%40ngx-rapid%2Fcrud.svg\" alt=\"npm version\"></a> \n CI: <a href=\"https://circleci.com/gh/ngx-rapid/ngx-rapid\"><img src=\"https://circleci.com/gh/ngx-rapid/ngx-rapid.svg?style=svg\" alt=\"CircleCI\"></a></p>\n<h1 id=\"documentation\">Documentation</h1>\n<ul>\n<li><p>Latest</p>\n<ul>\n<li>Site and demos: <a href=\"https://ngx-rapid.github.io\">https://ngx-rapid.github.io</a></li>\n<li>Latest api: <ul>\n<li><a href=\"https://ngx-rapid.github.io/api/form\">https://ngx-rapid.github.io/api/form</a></li>\n<li><a href=\"https://ngx-rapid.github.io/api/crud\">https://ngx-rapid.github.io/api/crud</a></li>\n</ul>\n</li>\n</ul>\n</li>\n<li><p>Archived</p>\n<ul>\n<li>Site and demos: <a href=\"https://rawgit.com/ngx-rapid/ngx-rapid.github.io/VERSION/index.html\">https://rawgit.com/ngx-rapid/ngx-rapid.github.io/VERSION/index.html</a></li>\n<li>Latest api: <ul>\n<li><a href=\"https://rawgit.com/ngx-rapid/ngx-rapid.github.io/VERSION/api/form/index.html\">https://rawgit.com/ngx-rapid/ngx-rapid.github.io/VERSION/api/form/index.html</a></li>\n<li><a href=\"https://rawgit.com/ngx-rapid/ngx-rapid.github.io/VERSION/api/crud/index.html\">https://rawgit.com/ngx-rapid/ngx-rapid.github.io/VERSION/api/crud/index.html</a></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h1 id=\"development\">Development</h1>\n<h2 id=\"prerequisites\">Prerequisites</h2>\n<ul>\n<li>GIT</li>\n<li>Node</li>\n<li>NPM</li>\n</ul>\n<h2 id=\"initialize\">Initialize</h2>\n<ul>\n<li>Check out the code:<ul>\n<li>via ssh: <code class=\"language-js\">git clone git@github<span class=\"token punctuation\">.</span>com<span class=\"token punctuation\">:</span>ngx<span class=\"token operator\">-</span>rapid<span class=\"token operator\">/</span>ngx<span class=\"token operator\">-</span>rapid<span class=\"token punctuation\">.</span>git</code></li>\n<li>via https: <code class=\"language-js\">git clone https<span class=\"token punctuation\">:</span><span class=\"token operator\">/</span><span class=\"token operator\">/</span>github<span class=\"token punctuation\">.</span>com<span class=\"token operator\">/</span>ngx<span class=\"token operator\">-</span>rapid<span class=\"token operator\">/</span>ngx<span class=\"token operator\">-</span>rapid<span class=\"token punctuation\">.</span>git</code></li>\n</ul>\n</li>\n<li>Init dependencies: <code class=\"language-js\">npm install</code></li>\n</ul>\n<h2 id=\"develop\">Develop</h2>\n<ul>\n<li>Run development mode: <code class=\"language-js\">npm run dev</code></li>\n<li>Visit: <code class=\"language-js\">http<span class=\"token punctuation\">:</span><span class=\"token operator\">/</span><span class=\"token operator\">/</span>localhost<span class=\"token punctuation\">:</span><span class=\"token number\">4200</span></code></li>\n<li>Make changes that reloads in the browser</li>\n</ul>\n<h2 id=\"release\">Release</h2>\n<p>Release process phases and goals::</p>\n<ul>\n<li>publish [ <code class=\"language-js\">lerna publish</code> ] <ul>\n<li>bump version, see below sections for details</li>\n<li>commit changes to GIT master</li>\n<li>creates GIT tag with given version</li>\n<li>build libraries (core, form, crud)</li>\n<li>push libraries to NPM</li>\n</ul>\n</li>\n<li>site [ <code class=\"language-js\">lerna run site</code> ]<ul>\n<li>build libraries API documentation</li>\n<li>build site including libraries API documentation</li>\n</ul>\n</li>\n<li>deploy [ <code class=\"language-js\">lerna run deploy</code> ]<ul>\n<li>deploy site</li>\n</ul>\n</li>\n</ul>\n<h3 id=\"prerelease\">Prerelease</h3>\n<ul>\n<li>execute: <code class=\"language-js\">npm run publish<span class=\"token punctuation\">:</span>prerelease</code></li>\n<li>bumps version from: <code class=\"language-js\"><span class=\"token number\">0.0</span><span class=\"token punctuation\">.</span><span class=\"token number\">1</span><span class=\"token operator\">-</span><span class=\"token number\">1</span></code> to <code class=\"language-js\"><span class=\"token number\">0.0</span><span class=\"token punctuation\">.</span><span class=\"token number\">1</span><span class=\"token operator\">-</span><span class=\"token number\">2</span></code></li>\n</ul>\n<h3 id=\"patch\">Patch</h3>\n<ul>\n<li>execute: <code class=\"language-js\">npm run publish<span class=\"token punctuation\">:</span>patch</code></li>\n<li>bumps version from: <code class=\"language-js\"><span class=\"token number\">0.0</span><span class=\"token punctuation\">.</span><span class=\"token number\">1</span></code> to <code class=\"language-js\"><span class=\"token number\">0.0</span><span class=\"token punctuation\">.</span><span class=\"token number\">2</span></code></li>\n</ul>\n<h3 id=\"minor\">Minor</h3>\n<ul>\n<li>execute: <code class=\"language-js\">npm run publish<span class=\"token punctuation\">:</span>minor</code></li>\n<li>bumps version from: <code class=\"language-js\"><span class=\"token number\">0.1</span><span class=\"token punctuation\">.</span><span class=\"token number\">0</span></code> to <code class=\"language-js\"><span class=\"token number\">0.2</span><span class=\"token punctuation\">.</span><span class=\"token number\">0</span></code></li>\n</ul>\n<h3 id=\"major\">Major</h3>\n<ul>\n<li>execute: <code class=\"language-js\">npm run publish<span class=\"token punctuation\">:</span>major</code></li>\n<li>bumps version from: <code class=\"language-js\"><span class=\"token number\">1.0</span><span class=\"token punctuation\">.</span><span class=\"token number\">0</span></code> to <code class=\"language-js\"><span class=\"token number\">2.0</span><span class=\"token punctuation\">.</span><span class=\"token number\">0</span></code></li>\n</ul>\n<h1 id=\"credits\">Credits</h1>\n<p>Using lerna: <a href=\"https://lernajs.io/\"><img src=\"https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg\" alt=\"lerna\"></a></p>\n</body></html>"

/***/ })

});
//# sourceMappingURL=guides.module.chunk.js.map