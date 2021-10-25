import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HeaderComponent } from './header/header.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { OrdersuccessfulComponent } from './ordersuccessful/ordersuccessful.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';

import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms'; 

import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BooksdataService } from './booksdata.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    CartComponent,
    PlaceorderComponent,
    OrdersuccessfulComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule   
  ],
  providers: [
    BooksdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
