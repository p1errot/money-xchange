import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyFormatDirective } from './shared/currency-format.directive';


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    CurrencyConverterComponent,
    CurrencyFormatDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
