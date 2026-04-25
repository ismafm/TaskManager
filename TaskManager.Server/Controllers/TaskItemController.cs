using TaskManager.Server.Model.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskManager.Server.Model.Entities;

using TaskManager.Server.Data;
using Microsoft.EntityFrameworkCore;

namespace TaskManager.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskItemController : ControllerBase
    {
        private GestorTareasDbContext _context;

        public TaskItemController(GestorTareasDbContext context) 
        {
            this._context = context;
        }


        [HttpPost]
        public async Task<bool> Create([FromBody]TaskItemDto model)
        {

            var task = new TaskItem()
            {
                Name = model.Name!
            };

            _context.TaskItems.Add(task);
            await _context.SaveChangesAsync();



            return true;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            TaskItem[] tasks = await _context.TaskItems.AsNoTracking().ToArrayAsync();
            return Ok(tasks);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var task = await _context.TaskItems.FindAsync(id);
            if (task == null)
                return NotFound();

            _context.TaskItems.Remove(task);
            await _context.SaveChangesAsync();
            return Ok("Tarea borrada correctamente");
        }
    }
}
