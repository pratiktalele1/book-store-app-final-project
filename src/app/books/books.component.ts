import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BooksdataService } from '../booksdata.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  /**
   *
   * @param _service service is imported to call api
   */
  constructor(private _service: BooksdataService) {}

  /**
   * variables
   */
  public clickedByUser: boolean = false;
  public addToBag: boolean = true;
  public wishList: boolean = true;
  public clickBefore: boolean = true;
  public allBooks = [];
  public sort = [];
  public CartData = [];
  public hideBooks = true;

  /**
   * getAllBooks service is called to get all books
   */
  ngOnInit(): void {
    this._service.getAllBooks().subscribe((getData: any) => {
      // this.allBooks = getData.data;
      console.log(getData.data);
      let booksArray: Books[] = getData.data;
      for (let i = 0; i < booksArray.length; i++) {
        let book: Books = new Books(booksArray[i]);
        this.allBooks.push(book);
      }
    });

  }


  /**
   *
   * @param id id is sending to service to add book in cart list using addItemToBag service
   */
  addItem(id, obj) {
    console.log(id);
    this.clickBefore = false;
    this.clickedByUser = true;
    this.wishList = false;
    obj.bookAddedToBag = 1;

    console.log(obj, this.allBooks);

    this._service
      .addItemToBag(obj)
      .subscribe((data) => console.log('book add to cart'));

    window.location.reload();
  }

  /**
   *
   * @param id id is sending to add book in wishlist
   */
  addWish(id) {
    this.clickedByUser = true;
    this.addToBag = false;
  }

  /**
   *
   * @param option option is sending to getLowToHigh service, getHighToLow service to sort books depending upon option
   */
  sortByOption(option) {
    this.allBooks = [];
    if (option.target.value == 'lowtohigh') {
      this._service.getLowToHigh().subscribe((getData: any) => {
        this.allBooks = getData.data;
      });
    }

    if (option.target.value == 'hightolow') {
      this._service.getHighToLow().subscribe((getData: any) => {
        this.allBooks = getData.data;
      });
    }

    if (option.target.value == 'Sortbyrelevance') {
      this._service.getAllBooks().subscribe((getData: any) => {
        this.allBooks = getData.data;
      });
    }
  }
}
