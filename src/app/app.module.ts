import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './searches/search.service'


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule

  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
