import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

export { AppComponent };

import { HomeComponent } from './home/home.component';
import { routing, appRoutingProviders } from './app.routes';
// import { MetaModule } from '@nglibs/meta';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    // BrowserModule,
    BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
    FormsModule,
    HttpModule,
    routing,
    // MetaModule.forRoot()
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
