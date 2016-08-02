import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { NavTopComponent } from './components/navtop/navtop.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { SpotifyService } from './services/spotify.service';

@Component({
    selector: 'spotify-app',
    templateUrl: './app/app.component.html',
    providers: [HTTP_PROVIDERS, SpotifyService],
    directives: [ROUTER_DIRECTIVES,NavTopComponent,SearchComponent,AboutComponent,ArtistComponent,AlbumComponent],
    precompile:[SearchComponent,AboutComponent,ArtistComponent,AlbumComponent   ]
})

export class SpotifyComponent{}