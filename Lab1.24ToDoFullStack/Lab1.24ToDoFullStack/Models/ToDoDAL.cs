using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab1._24ToDoFullStack.Models
{
    public class ToDoDAL
    {

        public List<ToDoItem> GetToDoItems()
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = "select * from todos";
                connect.Open();
                List<ToDoItem> todos = connect.Query<ToDoItem>(sql).ToList();//almost forgot to install Dapper!
                connect.Close();
                return todos;
            }
        }
        public ToDoItem GetToDoByID(int id)
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                List<ToDoItem> output = GetToDoItems();
                ToDoItem match;
                try
                {
                    match = output.Where(m => m.Id == id).First();
                }
                catch (InvalidOperationException)
                {
                    match = new ToDoItem();
                    match.Name = $"To Do Item at index {id} does not exist - try another ID.";
                }
                return match;
            }
        }
        public void UpdateToDo(int id, ToDoItem newValues)
        {
            string sql = $"update todos set name='{newValues.Name}', description='{newValues.Description}', assignedto='{newValues.AssignedTo}', duration={newValues.Duration}, iscompleted={newValues.IsCompleted} where id={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<ToDoItem>(sql); //we dont need anything extra here, since we arent returning anything
                connect.Close();
            }
        }
        public void CreateToDo(ToDoItem newValues)
        {
            string sql = $"insert into todos values(0, '{newValues.Name}', '{newValues.Description}', '{newValues.AssignedTo}', {newValues.Duration}, {newValues.IsCompleted})";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<ToDoItem>(sql); //we dont need anything extra here, since we arent returning anything
                connect.Close();
            }
        }
        public void DeleteToDo(int id)
        {
            string sql = $"delete from todos where id={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<ToDoItem>(sql); //we dont need anything extra here, since we arent returning anything
                connect.Close();
            }
        }
    }
}
