"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var spotify_service_1 = require('../../services/spotify.service');
require('rxjs/add/operator/map');
var router_1 = require('@angular/router');
var SearchComponent = (function () {
    function SearchComponent(_spotifyService, _router) {
        this._spotifyService = _spotifyService;
        this._router = _router;
    }
    SearchComponent.prototype.searchMusic = function () {
        var _this = this;
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(function (res) {
            _this.searchRes = res.artists.items;
        });
    };
    SearchComponent.prototype.onClick = function (artist) {
        this._router.navigate(['/artist', artist.id]);
    };
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search',
            templateUrl: 'search.component.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [spotify_service_1.SpotifyService, router_1.Router])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map