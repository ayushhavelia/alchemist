import { Component, OnInit } from '@angular/core';
//import {User} from '../user'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  //userModel = new User('','','','','','',0,0,0,0);
  ngOnInit() {
    
  }
  logS = true;
  email='';
  pass='';
  onSubmit(){
    //  if(this.userModel.email==this.email && this.userModel.pass==this.pass){
       
    //  }
    //  else{
    //    this.logS = false;
    //  }
  }

  register(){
  }

}
