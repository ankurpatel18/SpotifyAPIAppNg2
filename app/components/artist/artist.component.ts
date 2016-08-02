import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../model/artist.model';
import { Album } from '../../model/album.model';


@Component({
    moduleId:module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html'    
})
export class ArtistComponent implements OnInit {
    private id:string;
    private artist:Artist[];
    private albums:Album[];
    private sub:any;
    constructor(
        private _spotifyService:SpotifyService,
        private _route: ActivatedRoute,
        private _router:Router
    ){

    }

  ngOnInit() {
      // Subscribe to route params
      this.sub = this._route.params.subscribe(params => {

       this.id = params['id'];

       this._spotifyService.getArtist(this.id).subscribe(artist => {
            this.artist = artist;
        });

        this._spotifyService.getAlbums(this.id).subscribe(albums => {
            this.albums = albums.items;
        });
    });
  }

  ngOnDestroy() {
    // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }

  onClick(album:any){
      this._router.navigate(['/album', album.id]);
  }
}