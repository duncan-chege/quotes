import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes= [ new Quote ("If I could fall asleep, I would have slept by now",
       "Billie Eilish", "Duncan",0,0,new Date())
          ]

  completeGoal(isComplete,index){
    if(isComplete){
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
