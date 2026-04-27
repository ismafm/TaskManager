using System.ComponentModel.DataAnnotations;
using Azure.Messaging;

namespace TaskManager.Server.Model.Dto
{
    public class TaskItemDto
    {
        [Required(ErrorMessage="La descripción de la tarea es obligatoria")]
        public string? Name { get; set; }
    }
}
