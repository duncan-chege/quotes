import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes= [ new Quote ("If I could fall asleep, I would have slept by now",
       "Billie Eilish", "Duncan")
          ]
    }
