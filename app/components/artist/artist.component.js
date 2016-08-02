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
var ArtistComponent = (function () {
    function ArtistComponent(_spotifyService, _route, _router) {
        this._spotifyService = _spotifyService;
        this._route = _route;
        this._router = _router;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to route params
        this.sub = this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this._spotifyService.getArtist(_this.id).subscribe(function (artist) {
                _this.artist = artist;
            });
            _this._spotifyService.getAlbums(_this.id).subscribe(function (albums) {
                _this.albums = albums.items;
            });
        });
    };
    ArtistComponent.prototype.ngOnDestroy = function () {
        // Clean sub to avoid memory leak
        this.sub.unsubscribe();
    };
    ArtistComponent.prototype.onClick = function (album) {
        this._router.navigate(['/album', album.id]);
    };
    ArtistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'artist',
            templateUrl: 'artist.component.html'
        }), 
        __metadata('design:paramtypes', [spotify_service_1.SpotifyService, router_1.ActivatedRoute, router_1.Router])
    ], ArtistComponent);
    return ArtistComponent;
}());
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=artist.component.js.map