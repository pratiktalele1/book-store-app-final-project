import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksdataService } from '../booksdata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  /**
   * array is declare to show cart items
   */
  public cart = [];
  constructor(private _service: BooksdataService, private _navigate: Router) {}

  /**
   * getAllCartItem service is used to get all cart items
   */
  ngOnInit(): void {
    this._service.getAllCartItem().subscribe((getData: any) => {
      this.cart = getData.data;
    });
  }

  /**
   * 
   * @param id reomoveItemFromCart service is used to remove item from cart
   */
  removeItem(id) {
    this._service
      .reomoveItemFromCart(id)
      .subscribe((data) => console.log(data));
    window.location.reload();
  }

  /**
   * 
   * @param id id is sending to placeorder page to get purchase item
   */
  placeOrder(id) {
    this._navigate.navigate(['placeorder', id]);
  }
}
