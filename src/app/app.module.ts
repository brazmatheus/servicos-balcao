import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { CardComponentsComponent } from './components/card-components/card-components.component';
import { CardItemsComponent } from './components/card-items/card-items.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { PainelPedidosComponent } from './components/painel-pedidos/painel-pedidos.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    CardComponentsComponent,
    CardItemsComponent,
    LoginComponent,
    PainelPedidosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
