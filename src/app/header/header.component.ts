import { Component, OnInit } from '@angular/core';
import { BooksdataService } from '../booksdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  /**
   * array is declare to get count of data
   */
  public cart = [];
  constructor(private _service: BooksdataService) {}

  /**
   * getAllCartItem service is used to get count of data
   */
  ngOnInit(): void {
    this._service.getAllCartItem().subscribe((getData: any) => {
      this.cart = getData.data;
    });
  }
}
