import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // separate template file for clean code
  // template: `<h1>{{title}}</h1>`, // in-line template
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conFusion';
}
