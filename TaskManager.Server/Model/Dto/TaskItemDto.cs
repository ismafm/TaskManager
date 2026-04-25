using System.ComponentModel.DataAnnotations;

namespace TaskManager.Server.Model.Dto
{
    public class TaskItemDto
    {
        [Required]
        public string? Name { get; set; }
    }
}
