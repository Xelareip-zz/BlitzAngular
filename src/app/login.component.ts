import { Component, Input } from '@angular/core';

@Component({
  selector: 'loogin',
  template: '<h1>Foo</h1>',
  styles: [`h1 { font-family: Lato; }`],
})

export class LoginComponent {
  @Input() name: string;
}