import { Component, OnInit , Input} from '@angular/core';
import {CreateQuizService} from './../create-quiz.service';
@Component({
  selector: 'app-livepreview2',
  templateUrl: './livepreview2.component.html',
  styleUrls: ['./livepreview2.component.css']
})
export class Livepreview2Component implements OnInit {
 
  url=''
  constructor(private data: CreateQuizService) { }
 
 
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.url = message)
  }
  

 
}
  


