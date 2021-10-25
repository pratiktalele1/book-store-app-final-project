import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { OrdersuccessfulComponent } from './ordersuccessful/ordersuccessful.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';

const routes: Routes = [
  {
    path:"books", component:BooksComponent
  },
  {
    path:"placeorder/:id", component:PlaceorderComponent
  },
  {
    path:"ordersuccessful", component:OrdersuccessfulComponent
  },
  {
    path:"cart", component:CartComponent
  },
  { path:"", redirectTo:"/books", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
