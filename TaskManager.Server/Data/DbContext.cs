using TaskManager.Server.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace TaskManager.Server.Data
{
    public class GestorTareasDbContext : DbContext
    {
        public GestorTareasDbContext(DbContextOptions<GestorTareasDbContext> options)
    : base(options) { }
        public DbSet<TaskItem> TaskItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //modelBuilder.Entity<Task>().;
        }
    }
}
