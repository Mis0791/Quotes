import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user 
  quote
  quotes;

  constructor(private _mainService: MainService, private _router: Router) {
    this.user = {name: ''},
    this.quote = {quote: '', created_by: ''},
    this.quotes = [];
   }

   checkSess(){
     this._mainService.checkSess( (data)=> {
       this.user = data.user;
       if(!this.user){
         this._router.navigate(['/']);
       }
     })
   }

   addQuote(){
     this.quote.created_by = this.user.name;
      console.log(this.quote);
     this._mainService.addQuote(this.quote, (data)=>{
       this.quotes = data;
     })
   }

   addLike(id, idx){
     this._mainService.addLike(id, (data)=>{
      this.quotes[idx] = data;
     })
   }


  ngOnInit() {
    this.checkSess();

    this._mainService.showQuotes(this.quotes, (data)=>{
      console.log(data);
      this.quotes = data;
    })
  }

}
