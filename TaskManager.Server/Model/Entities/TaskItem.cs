namespace TaskManager.Server.Model.Entities
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
#pragma warning disable CS8618
        private TaskItem() { }

        public TaskItem(string name)
        {
            if(string.IsNullOrWhiteSpace(name))
            {
                throw new ArgumentException("El nombre de la tarea no puede estar vacío", nameof(name));
            }
            Name = name;

        }

        public void Update(string name)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                throw new ArgumentException("El nombre de la tarea no puede estar vacío", nameof(name));
            }
            Name = name;
        }
    }
}
