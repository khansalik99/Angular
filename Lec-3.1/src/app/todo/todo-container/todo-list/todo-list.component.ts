import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToDoItem } from '../../models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnChanges {
@Input('toDoItems') toDoItems!: Array<ToDoItem>;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log('toDoItems on changes', this.toDoItems);
  }
  onDeleteItemHandler(todoItem: ToDoItem){
    const deleteIndex=this.toDoItems.indexOf(todoItem);
    this.toDoItems.splice(deleteIndex,1)
    // console.log("from parent Item Delete:",todoItem);
    // console.log("index to be deleted",deleteIndex);
  }

}
