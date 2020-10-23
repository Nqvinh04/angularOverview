import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { ThucHanhComponent } from './thuc-hanh/thuc-hanh.component';
import { ListPestComponent } from './list-pest/list-pest.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemComponent } from './item/item/item.component';
import { NameCardComponent } from './name-card/name-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeroesComponent,
    ThucHanhComponent,
    ListPestComponent,
    MenuComponent,
    CalculatorComponent,
    ColorPickerComponent,
    HeroDetailComponent,
    ItemDetailComponent,
    ItemComponent,
    NameCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
