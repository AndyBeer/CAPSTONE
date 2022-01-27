import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDoItem } from '../ToDoItem';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor(private toDoService: ToDoService) { }
  todo?: ToDoItem;

  ngOnInit() {
  }
  CreateToDo(){
    let name: string = (<HTMLInputElement> document.getElementById("name")).value;
    let description: string = (<HTMLInputElement> document.getElementById("description")).value;
    let assignedTo: string = (<HTMLInputElement> document.getElementById("assignedTo")).value;
    let duration: number = parseInt((<HTMLInputElement> document.getElementById("duration")).value);
    
    let isCompleted : boolean = false;

    let newToDo : ToDoItem = {id: 0, name:name, description:description, assignedTo:assignedTo, duration:duration, isCompleted:isCompleted};

    this.toDoService.CreateItem(newToDo).subscribe(
      (response:any)=> {
        console.log(response);
        location.reload();
      }
    )
  
  }
}
