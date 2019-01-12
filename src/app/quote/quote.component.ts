import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes= [ new Quote ("If I could fall asleep, I would have slept by now",
       "Billie Eilish", "Duncan")
          ]

  constructor() { }

  ngOnInit() {
  }

}
