import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ToDoItem } from 'src/app/todo/models/todo-item.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
@Input('toDoItem') toDoItem!: ToDoItem;// = new ToDoItem();
@Output('onDeleteItem') onDeleteItem!: EventEmitter<ToDoItem>;
  constructor() {
    this.onDeleteItem=new EventEmitter<ToDoItem>;
   }

  ngOnInit(): void {
  }
  onStatusChange(chkBox: HTMLInputElement): void {
    this.toDoItem.isCompleted = chkBox.checked;
  }
  onclickDelete(toDoItemDelete:ToDoItem): void {
    //console.log("onDlete",toDoItemDelete);
    this.onDeleteItem.emit(toDoItemDelete);
  }
}
