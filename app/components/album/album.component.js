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
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
var spotify_service_1 = require('../../services/spotify.service');
var AlbumComponent = (function () {
    function AlbumComponent(_spotifyService, _route) {
        this._spotifyService = _spotifyService;
        this._route = _route;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to route params
        this.sub = this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this._spotifyService.getAlbum(_this.id).subscribe(function (album) {
                _this.album = album;
            });
        });
    };
    AlbumComponent.prototype.ngOnDestroy = function () {
        // Clean sub to avoid memory leak
        this.sub.unsubscribe();
    };
    AlbumComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'album',
            templateUrl: 'album.component.html'
        }), 
        __metadata('design:paramtypes', [spotify_service_1.SpotifyService, router_1.ActivatedRoute])
    ], AlbumComponent);
    return AlbumComponent;
}());
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map