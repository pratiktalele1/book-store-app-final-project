import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './books';
@Injectable({
  providedIn: 'root'
})
export class BooksdataService {

  public link:string="http://localhost:8080/books";
  constructor(private _http:HttpClient) { }

  getAllBooks():Observable<Books[]>{
    return this._http.get<Books[]>(this.link);
  }

  addItemToBag(obj:any):Observable<Books[]>{
    return this._http.post<Books[]>(this.link+"/addItem",obj);
  }

  getAllCartItem():Observable<Books[]>{
    return this._http.get<Books[]>(this.link+"/cart");
  }

  reomoveItemFromCart(id:number):Observable<Books[]>{
    return this._http.delete<Books[]>(this.link+"/cart/"+id);
  }

  getCartItemById(id:any):Observable<Books[]>{
    return this._http.get<Books[]>(this.link+"/getonebook/"+id);
  }

  getLowToHigh():Observable<Books[]>{
    return this._http.get<Books[]>(this.link+"/lowtohigh");
  }

  getHighToLow():Observable<Books[]>{
    return this._http.get<Books[]>(this.link+"/hightolow");
  }

  
}
