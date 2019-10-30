import { Component, OnInit } from '@angular/core';
import {CreateQuizService} from './../create-quiz.service';
@Component({
  selector: 'app-creatquiz',
  templateUrl: './creatquiz.component.html',
  styleUrls: ['./creatquiz.component.css']
})
export class CreatquizComponent implements OnInit {

  constructor(private quiz: CreateQuizService) { }

  ngOnInit() {
  }

  cQuiz(values){
    return this.quiz.createQuize(values);
  }

}
