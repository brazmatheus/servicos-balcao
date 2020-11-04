import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './components/HeaderMenu/header-menu.component';
import { CardComponentsComponent } from './components/CardComponents/card-components.component';
import { CardItemsComponent } from './components/CardItems/card-items.component';
import { LoginComponent } from './components/Login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    CardComponentsComponent,
    CardItemsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
