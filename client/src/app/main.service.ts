import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MainService {

  constructor(private _http: Http) { }

  login(user, cb){
    this._http.post('/login', user).subscribe((res)=>{
      cb(res.json());
    })
  }

  checkSess(cb){
    this._http.get('/sess').subscribe((res)=>{
      cb(res.json());
    })
  }

  addQuote(quote, cb){
    this._http.post('/addQuote', quote).subscribe((res)=>{
      cb(res.json())
    })
  }

  showQuotes(quote, cb){
    this._http.get('/showQuotes', quote).subscribe((res)=>{
      cb(res.json())
    })
  }

  addLike(id, cb){
    console.log(id);
    this._http.get('/addLike/' + id).subscribe((res)=>{
      cb(res.json())
    })
  }
}
