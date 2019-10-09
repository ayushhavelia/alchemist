import { Component, OnInit } from '@angular/core';
import {User} from '../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userModel = new User('','','','','',0,0,0,0);
  ngOnInit() {
    
  }

  onSubmit(){

  }

  register(){
    
  }

}
