import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

export interface Question{
  qsnno: string,
  qsn: string,
  ans: string,
  hint1: string,
  hint2: string,
  hint3: string
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  insertQuestion(ques: Question): Observable<Question> {
    return this.http.post<Question>('http://localhost:3000/addques', ques);
  }
}
