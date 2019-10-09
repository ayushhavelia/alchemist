import { Component, OnInit } from '@angular/core';
import {Question} from '../question';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addqsn',
  templateUrl: './addqsn.component.html',
  styleUrls: ['./addqsn.component.css']
})

export class AddqsnComponent implements OnInit {
  qsnModel= new Question('','','','','','');
  constructor(private http: HttpClient){}


  ngOnInit() {

  }
   
  onSubmit(){
    this.onAddQuestion(this.qsnModel);
  }
  url='https://localhost:3000/';
  onAddQuestion(qsnModel){
    this.http.post(this.url,qsnModel).subscribe(res => {
      console.log(res);
    });
  }
}
