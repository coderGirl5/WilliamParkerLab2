import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { routes } from './router';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { externalModules } from './build-specific';
import { declarations } from './core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { ResearchComponent } from './components/research/research.component';
import { FooterComponent } from './components/footer/footer.component';
import { InprogressComponent } from './components/inprogress/inprogress.component';
import { AboutComponent } from './components/about/about.component';
import { Research2015Component } from './components/research2015/research2015.component';
import { Research2017Component } from './components/research2017/research2017.component';
import { Research2018Component } from './components/research2018/research2018.component';
import { Research2020Component } from './components/research2020/research2020.component';
import { Research2021Component } from './components/research2021/research2021.component';
import { ResearchHistoricalComponent } from './components/research-historical/research-historical.component';

import {
  HttpClientInMemoryWebApiModule,
  InMemoryDbService,
} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent, 
    AboutComponent, 
    declarations,
    NavbarComponent,
    IntroComponent,
    ResearchComponent,
    FooterComponent,
    InprogressComponent,
    Research2015Component,
    Research2017Component,
    Research2018Component,
    Research2020Component,
    Research2021Component,
    ResearchHistoricalComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppStoreModule,
    externalModules,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true,
    }),
  ],
  providers: [{ provide: InMemoryDataService, useExisting: InMemoryDbService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
