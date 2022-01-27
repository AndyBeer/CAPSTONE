import { Component, Input, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDoItem } from '../ToDoItem';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ToDoService]
})
export class DetailComponent implements OnInit {
  @Input() Id:number;
 
  toDo?: ToDoItem;

  constructor(private ToDoService:ToDoService) { }

  ngOnInit() {
    this.ToDoService.GetToDoItem(this.Id).subscribe(
      
      (response:any)=>{console.log(response);
      this.toDo=response;}
    );


  }
  UpdateToDo(){
    let updatePanel = document.getElementById("update"+this.Id);
    let updateButton = document.getElementById("updateButton"+this.Id);
    updatePanel.style.display = "inherit";
    updateButton.style.display = "none";
  }

}
