using Lab1._24ToDoFullStack.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab1._24ToDoFullStack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoController : Controller
    {
        ToDoDAL db = new ToDoDAL();
        
        [HttpGet]
        public List<ToDoItem> GetToDoList()
        {
           return db.GetToDoItems();
        }
        [HttpGet("id={id}")]
        public ToDoItem GetToDoByID(int id)
        {
            return db.GetToDoByID(id);
        }
        [HttpPost("create")]
        public void CreateToDo(ToDoItem t)
        {
            db.CreateToDo(t);
        }
        [HttpDelete("delete/{id}")]
        public void DeleteToDo(int id)
        {
            db.DeleteToDo(id);
        }

        [HttpPut("update/{id}")]
        public void UpdateToDo(int id, ToDoItem t)
        {
            ToDoItem original = db.GetToDoByID(id);
            if(t.Name == null || t.Name == "")
            {
                t.Name = original.Name;
            }
            if(t.Description == null || t.Description == "")
            {
                t.Description = original.Description;
            }
            if(t.AssignedTo == null || t.AssignedTo == "")
            {
                t.AssignedTo = original.AssignedTo;
            }
            if(t.Duration == 0)
            {
                t.Duration = original.Duration;
            }
            //no need to add anything for the bool - either the new value will overwrite a false to true, or the default will be false anyway 
            db.UpdateToDo(id, t);
        }
    }
}
