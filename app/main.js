"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// import { enableProdMode } from '@angular/core';
var app_component_1 = require('./app.component');
var app_routes_1 = require('./routes/app.routes');
//enableProdMode(); //Uncomment for production
platform_browser_dynamic_1.bootstrap(app_component_1.SpotifyComponent, [app_routes_1.APP_ROUTER_PROVIDERS]).then(function (success) { return console.log('SpotifyComponent bootstrapped!'); }, function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map