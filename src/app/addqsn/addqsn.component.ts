import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QuestionService} from 'services/question.service'
@Component({
  selector: 'app-addqsn',
  templateUrl: './addqsn.component.html',
  styleUrls: ['./addqsn.component.css']
})

export class AddqsnComponent implements OnInit {
  constructor(private qsnService: QuestionService){}

  
  ngOnInit() {

  }
   
  onSubmit(qsnForm){
    // this.onAddQuestion(qsnForm);
    this.qsnService.insertQuestion({
      'qsnno':qsnForm.qsnno,
      'qsn': qsnForm.qsn,
      'ans': qsnForm.ans,
      'hint1': qsnForm.hint1,
      'hint2': qsnForm.hint2,
      'hint3':qsnForm.hint3}).subscribe();

  }
  // url='https://localhost:3000/addques';
  // onAddQuestion(qsnForm){
  //   this.http.post(this.url,{'qsnno':qsnForm.qsnno,'qsn':qsnForm.qsn,'ans':qsnForm.ans,'hint1':qsnForm.hint1,'hint2':qsnForm.hint2,'hint3':qsnForm.hint3}).subscribe(res =>
  //     console.log(res.json()));
  // }
}
