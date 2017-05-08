import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // title = "app works";

  constructor(private _router: Router, private _meta: Meta, private _title: Title) { }

  ngOnInit() {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this._title.setTitle('Home Page');
            this._meta.updateTag({ name: 'description', content: 'Home Page Description' });
            break;
          case '/lazy/lazypage':
            this._title.setTitle('About Page');
            this._meta.updateTag({ name: 'description', content: 'About Page Description' });
            break;
        }
      }
    });
  }
}


// https://github.com/ngx-meta/core
// https://medium.com/@evertonrobertoauler/angular-4-universal-app-with-angular-cli-db8b53bba07d
// http://frogwell.hatenablog.jp/entry/2017/03/31/132315


// https://github.com/evertonrobertoauler/cli-universal-demo