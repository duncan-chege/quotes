import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes= [
    new Quote(1,"Sometimes I cry so much that I feel like I'll finna turn into drops", "Ashton Sanders", "Robin", new Date()),
    new Quote (2,"If I could fall asleep, I would have slept by now", "Billie Eilish", "Duncan",new Date()),
  ];


          completeQuote(isComplete,index){
            if (isComplete){
             this.quotes.splice(index,1);
             }
             }

  addmodel(quote){
    let quoteLength= this.quotes.length;
    quote.id=quoteLength+1;
    quote.time = new Date(quote.time)
    this.quotes.push(quote);
  }
  constructor() { }

  ngOnInit() {
  }

}
