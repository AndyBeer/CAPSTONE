using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Lab1._24ToDoFullStack.Models
{
    public class ToDoItem
    {
        [Key] //all matches the DB
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string AssignedTo { get; set; }
        public int Duration { get; set; }
        public bool IsCompleted { get; set; }

    }
}
