import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule }      from '@angular/core';

import { AppComponent }  from './app.component';

import { AboutComponent }  from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { SearchComponent }  from './components/search/search.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ 
									BrowserModule,
                  FormsModule,
                  HttpModule,
                  routing,
								],
  declarations: [ 
                  AboutComponent,
                  ArtistComponent,
                  AppComponent,
                  NavbarComponent,
                  SearchComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
