import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  likes=0;
  dislikes=0;

  addlike(){
    this.likes= this.likes + 1;
  }
  addislike(){
    this.dislikes= this.dislikes + 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
