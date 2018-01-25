import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: object

  constructor(private _mainService: MainService, private _router: Router) { 
    this.user = {name: ''}
  }
  login(){
    this._mainService.login(this.user, (data)=>{
      if(data.user.name.length >= 3){
        this._router.navigate(['/home']);
      }
    })
  }
  ngOnInit() {
      
    }
  }


