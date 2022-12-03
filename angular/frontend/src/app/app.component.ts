import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  ideas : string[] = [];
  addIdea(idea : string) {
    this.ideas.push(idea);
  }

  removeIdea(idea : string) {
    let index = this.ideas.indexOf(idea);
    this.ideas.splice(index, 1);
  }
}