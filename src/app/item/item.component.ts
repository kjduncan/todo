import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-item">
      {{ todoItem.title }}
      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>
      <p>
        item Works!
      </p>
    </div>
  `,
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {



  @Input() todoItem: any;
  @Output() remove:EventEmitter<any> = new EventEmitter();

  removeItem() {
  this.remove.emit();
  }


  constructor() { }

  ngOnInit() {
  }


}
