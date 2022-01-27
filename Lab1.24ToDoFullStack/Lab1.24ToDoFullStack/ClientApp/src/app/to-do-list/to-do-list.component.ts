import { Component, Input, OnInit } from '@angular/core';
import {ToDoService} from '../to-do.service';
import { Convert, ToDoItem } from '../ToDoItem';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  providers: [ToDoService]
})
export class ToDoListComponent implements OnInit {

  toDos?: ToDoItem[] = [];


  constructor(private toDoService: ToDoService) {    
    this.toDoService.GetToDoList().subscribe(
    (response: any) => {
          let json = Convert.toDoArrayToJson (response);
          this.toDos = Convert.toItemArray(json);
          console.log(this.toDos);
      }
    );
  }

  ngOnInit(): void {


  }
  DetailToDo(id: number){
    let displayPanel= document.getElementById("display"+id);
    let detailPanel = document.getElementById("detail"+id);
    let updatePanel = document.getElementById("update"+id);
    let button = document.getElementById("detailbutton"+id);
    

    if(displayPanel.style.display === "" || displayPanel.style.display ==="inherit"){
      displayPanel.style.display = "none";
      detailPanel.style.display = "inherit";
      updatePanel.style.display = "none";
      button.innerText = "<-Back";

    }
    else if (displayPanel.style.display ==="none"){
      displayPanel.style.display = "inherit";
      detailPanel.style.display = "none";
      button.innerText = "Details";
    }
    

  }

}
