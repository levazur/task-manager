import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  todos = [];
  name = "TodoApp"; 
  editable = false; 
  addButton = "დამატება";
  editableIndex = "";
  
  Add() { 
    const TodosList = { 
      name: this.name,
      editable: this.editable
    };
    this.todos.splice(0, 0, TodosList);
    this.name = "";
  }
  handleClear(){
    this.name = ' ';
  }
  Delete(index) {
    this.todos.splice(index, 1);
    this.name = "";
  }
  Edit(item, index) {
    this.editable = true;
    this.addButton = "UPDATE";
    this.name = item;
    this.editableIndex = index;
  }
}
