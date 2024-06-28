import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  
  count = 0;

  constructor() {}

  increment(): void {
    this.count++
  }

  decrement(): void {
    this.count--
  }

  reset(): void {
    this.count = 0;
  }

}
