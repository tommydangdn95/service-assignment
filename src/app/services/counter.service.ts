import { Injectable } from '@angular/core';

export class CounterService {
  actionActive = 0;
  actionInactive = 0;

  constructor() { }

  countActive(): void {
    this.actionActive++;
    console.log(`Active Count: ${this.actionActive}`);
  }

  countInActive(): void {
    this.actionInactive++;
    console.log(`In Active count: ${this.actionInactive}`);
  }
}
