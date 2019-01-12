import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
    model= new Quote("","","",new Date());
    @Output() addQuote=new EventEmitter<Quote>();

    onSubmit(){
      this.addQuote.emit(this.model);
    }

  constructor() { }

  ngOnInit() {
  }
   get currentBook() { return JSON.stringify(this.model); }
}
