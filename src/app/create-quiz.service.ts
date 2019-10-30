import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreateQuizService {

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  baseurl = 'http://localhost:5006/'
  constructor(private http: HttpClient) { }

  createQuize(quiz){
    return this.http.post(this.baseurl+'newquiz', quiz).subscribe()
  }
  createOutCome(outcome){
    return this.http.post(this.baseurl+'outcome', outcome).subscribe();
  }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
 

}
