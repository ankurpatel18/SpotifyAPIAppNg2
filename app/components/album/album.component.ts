import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

import { SpotifyService } from '../../services/spotify.service';
import { Album } from '../../model/album.model';


@Component({
    moduleId:module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit {
    private id:string;
    private albums:Album[];
    private album:Album;
    private sub:any;

    constructor(
        private _spotifyService:SpotifyService,
        private _route: ActivatedRoute
    ){

    }
    ngOnInit() {
        // Subscribe to route params
         this.sub = this._route.params.subscribe(params => {

        this.id = params['id'];       

        this._spotifyService.getAlbum(this.id).subscribe(album => {
            this.album = album;
        });
    });
  }

  ngOnDestroy() {
    // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }
}