import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MainService {
  quotes;
  quotesChange: BehaviorSubject<object[]>

  constructor(private _http: Http) { 
    this.quotes = [];
    this.quotesChange = new BehaviorSubject([])
  }

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
      console.log(res.json(), 'Callback');
      this.quotes = res.json()
      this.quotesChange.next(this.quotes)
      // cb(res.json())  // this is not needed cause I used the subscriber obj
    })
  }

  addLike(id, cb){
    this._http.get('/addLike/' + id).subscribe((res)=>{
      cb(res.json())
    })
  }

  onDelete(id, cb){
    console.log(id);
    this._http.get('/onDelete/' + id).subscribe(()=>{
      this.showQuotes(id, cb)

    })    
  }
}
