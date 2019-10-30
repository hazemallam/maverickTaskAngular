import { Component, OnInit } from '@angular/core';
import {CreateQuizService} from './../create-quiz.service';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css']
})
export class OutcomeComponent implements OnInit {

  url=''
  cont=''
  isColored = true;
  isC = false;
  constructor(private outcome: CreateQuizService) { }

  ngOnInit() {
    this.outcome.currentMessage.subscribe(message => this.url = message)
  }
  changeColor(){
    this.isColored = true
    this.isC = false;
  }
  changeC(){
    this.isColored = false
    this.isC= true
  }

  addOutcomeUser(values){
    return this.outcome.createOutCome(values);
  }
  write(value){
    this.url= value
    console.log(this.url)
    
      this.outcome.changeMessage(this.url)
    
  }
  writetext(value){
    this.cont= value
    console.log(this.cont)
    
      this.outcome.changeMessage(this.cont)

  }
}
