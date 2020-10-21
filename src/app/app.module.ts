import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { ThucHanhComponent } from './thuc-hanh/thuc-hanh.component';
import { ListPestComponent } from './list-pest/list-pest.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeroesComponent,
    ThucHanhComponent,
    ListPestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
