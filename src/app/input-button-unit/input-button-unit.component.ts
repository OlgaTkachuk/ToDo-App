import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  styleUrls: ['./input-button-unit.component.css'],
  template: `
    <input class="todo-input"
           #inputElementRef
           [value]="title"
           (keyup.enter)="submitValue($event.target.value)">

    <button class="btn"
            (click)="submitValue(inputElementRef.value)">
      Save
    </button>`
})
export class InputButtonUnitComponent implements OnInit {
  title: string = 'Hello World';
  @Output() submit: EventEmitter<string> = new EventEmitter();


  constructor() {
    this.title = 'I Love Angular';
  }

  ngOnInit() {
    this.title = 'Angular CLI Rules!';
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
