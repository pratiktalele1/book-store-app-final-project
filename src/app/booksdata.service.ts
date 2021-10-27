import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookDTO } from './BookDTO';
@Injectable({
  providedIn: 'root'
})
export class BooksdataService {

  public link:string="http://localhost:8080/books";
  constructor(private _http:HttpClient) { }

  getAllBooks():Observable<BookDTO[]>{
    return this._http.get<BookDTO[]>(this.link);
  }

  addItemToBag(obj:any):Observable<BookDTO[]>{
    return this._http.post<BookDTO[]>(this.link+"/addItem",obj);
  }

  getAllCartItem():Observable<BookDTO[]>{
    return this._http.get<BookDTO[]>(this.link+"/cart");
  }

  reomoveItemFromCart(id:number):Observable<BookDTO[]>{
    return this._http.delete<BookDTO[]>(this.link+"/cart/"+id);
  }

  getCartItemById(id:any):Observable<BookDTO[]>{
    return this._http.get<BookDTO[]>(this.link+"/getonebook/"+id);
  }

  getLowToHigh():Observable<BookDTO[]>{
    return this._http.get<BookDTO[]>(this.link+"/lowtohigh");
  }

  getHighToLow():Observable<BookDTO[]>{
    return this._http.get<BookDTO[]>(this.link+"/hightolow");
  }

  
}
