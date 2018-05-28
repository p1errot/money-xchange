import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyFormatDirective } from './shared/currency-format.directive';
import { ApiService } from './shared/api.service';


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    CurrencyConverterComponent,
    CurrencyFormatDirective
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
