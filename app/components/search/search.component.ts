import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import 'rxjs/add/operator/map';
import { ROUTER_DIRECTIVES,Router } from '@angular/router';

import { Artist } from '../../model/artist.model';
import { Album } from '../../model/album.model';

@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    directives: [ROUTER_DIRECTIVES] 
})
export class SearchComponent{
    searchStr:string;
    searchRes:Artist[];

    constructor(
        private _spotifyService:SpotifyService,
        private _router: Router
    ) { 
        
    }

    searchMusic(){
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe( res => {
                this.searchRes = res.artists.items
            });
    }

    onClick(artist:any) {
        this._router.navigate(['/artist', artist.id]);
    }
}