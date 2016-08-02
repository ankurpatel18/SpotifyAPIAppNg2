import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'nav-top',
    templateUrl: 'navtop.component.html',
    directives: [ROUTER_DIRECTIVES]  
})
export class NavTopComponent{ }