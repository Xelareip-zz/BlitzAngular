import { Component, Input } from '@angular/core';

@Component({
  selector: 'broth',
  template: `<h2>Here we go!</h2><br><h3>{{content}}</h3>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class BrothComponent {
  @Input() content: string;
}
