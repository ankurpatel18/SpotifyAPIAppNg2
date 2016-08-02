import { bootstrap } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';

import { SpotifyComponent } from './app.component'
import { APP_ROUTER_PROVIDERS } from './routes/app.routes';


//enableProdMode(); //Uncomment for production

bootstrap(SpotifyComponent, [APP_ROUTER_PROVIDERS]).then(
    success => console.log('SpotifyComponent bootstrapped!'),
    error => console.log(error)
);