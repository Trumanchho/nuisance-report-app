import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TroublemakerComponent } from './troublemaker/troublemaker.component';
import { TmListComponent } from './tm-list/tm-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { TmAddFormComponent } from './tm-add-form/tm-add-form.component';
import { RoutingModule } from './routing.module';
import { ViewTroublemakerComponent } from './view-troublemaker/view-troublemaker.component';
import { MapComponent } from './map/map.component';
import { EditTroublemakerComponent } from './edit-troublemaker/edit-troublemaker.component';

import { HttpClientModule } from '@angular/common/http';
import { PhoneNumberPipe } from './phone-number.pipe';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TroublemakerComponent,
    TmListComponent,
    SearchPipe,
    TmAddFormComponent,
    ViewTroublemakerComponent,
    MapComponent,
    EditTroublemakerComponent,
    PhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
