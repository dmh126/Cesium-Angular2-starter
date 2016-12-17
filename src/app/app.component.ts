/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {RouterActive} from './router-active';
import {Viewer} from './viewer';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive ],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    body {
      margin: 0;
    }
    md-toolbar ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    md-toolbar li {
      display: inline;
    }
    md-toolbar li.active {
      background-color: lightgray;
    }
  `],
  template: `
    <header>
      <h3>Angular2 + Cesium</h3>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Viewer, useAsDefault: true },
  { path: '/viewer', name: 'Viewer', component: Viewer },
])
export class App {}
