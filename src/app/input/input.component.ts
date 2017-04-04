import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <input class="todo-input" [value]="title"
        (keyup.enter)="changeTitle($event.target.value)"
        #inputElement>

  <button class="btn-red" (click)="changeTitle(inputElement.value)">
    Save
  </button>
  <p>The title is: {{ title }}</p>

  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  private title: string = '';

  constructor() { }

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
  this.submit.emit(newTitle);
  }

}