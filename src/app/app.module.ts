import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import locale from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LocalStorageService, NgxWebstorageModule, SessionStorageService } from 'ngx-webstorage';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';

import { MatTableModule } from '@angular/material/table';
import { GoogleComponent } from './google/google.component';
import { ApplicationConfigService } from './core/config/application-config.service';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, NgxSkeletonLoaderModule,
  MatPaginatorModule,MatChipsModule,MatTableModule,HttpClientModule,

  ],
  providers: [SessionStorageService, LocalStorageService,  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { //constructor(applicationConfigService: ApplicationConfigService, dpConfig:NgbDatepickerConfig) {
 // applicationConfigService.setEndpointPrefix("");
  //registerLocaleData(locale);
//}
}
