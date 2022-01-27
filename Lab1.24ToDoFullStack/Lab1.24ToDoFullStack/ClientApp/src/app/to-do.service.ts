import { Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoItem } from './ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  url: string = "ToDo";

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url=baseUrl+this.url;
   }

  GetToDoList(){
      return this.http.get(this.url);
    }
  GetToDoItem(id:number):Observable<Object>{
    return this.http.get(this.url+"/id="+id);
  }
  UpdateItem(newToDo:ToDoItem, id: number){
    return this.http.put(this.url+"/update/"+id, newToDo);

  }
  DeleteItem(id: number){
    return this.http.delete(this.url+"/delete/"+id);
  }
  CreateItem(newToDo: ToDoItem){
      
    return this.http.post(this.url+"/create/", newToDo);
  }
}
