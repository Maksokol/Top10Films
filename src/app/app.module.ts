import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import {CardComponent} from "./card/card.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";
import {MainComponent} from './main/main.component';
import {CardeditComponent} from './cardedit/cardedit.component';
import {CardService} from "./card.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainComponent,
    CardeditComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
