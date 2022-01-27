import { Component, Input, OnInit } from '@angular/core';

import { ToDoService } from '../to-do.service';
import { ToDoItem } from '../ToDoItem';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css'],
  providers: [ToDoService]
})
export class UpdateItemComponent implements OnInit {
@Input() Id: number;
toDo?: ToDoItem;

  constructor(private toDoService: ToDoService) { 

  }

  ngOnInit() {
    this.toDoService.GetToDoItem(this.Id).subscribe(
      (response:any)=> {this.toDo=response}
    );

  }
  UpdateItem(){
    let name: string = (<HTMLInputElement> document.getElementById("name"+this.Id)).value;
    let description: string = (<HTMLInputElement> document.getElementById("description"+this.Id)).value;
    let assignedTo: string = (<HTMLInputElement> document.getElementById("assignedTo"+this.Id)).value;
    let duration: number = parseInt((<HTMLInputElement> document.getElementById("duration"+this.Id)).value);
    let checked = (<HTMLInputElement>document.getElementById("isCompleted"+this.Id));
    let isCompleted : boolean = checked.checked;
    


    

    let updatedToDo : ToDoItem = {id: this.Id, name:name, description:description, assignedTo:assignedTo, duration:duration, isCompleted:isCompleted};

    this.toDoService.UpdateItem(updatedToDo, this.Id).subscribe(
      (response:any)=> {
        console.log(response);
        location.reload();
      }
    )
  }

}
