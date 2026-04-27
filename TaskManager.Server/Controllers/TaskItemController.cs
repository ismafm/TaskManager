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
        public async Task<IActionResult> Create([FromBody] TaskItemDto model)
        {

            var task = new TaskItem(model.Name!);

            _context.TaskItems.Add(task);
            await _context.SaveChangesAsync();


            //Retornar 201 created con el objeto
            return CreatedAtAction(
    nameof(Get),          // Acción que devuelve el recurso
    new { id = task.Id },     // Ruta del recurso recién creado
    task                      // Objeto creado
);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id ,[FromBody] TaskItemDto model)
        {

            TaskItem? task = await _context.TaskItems.FindAsync(id);
            if (task == null)
                return NotFound();

            task.Update(model.Name!);
            await _context.SaveChangesAsync();


            //Retornar noContent vacio es el estandar para put
            return NoContent();
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            TaskItem[] tasks = await _context.TaskItems.AsNoTracking().ToArrayAsync();
            return Ok(tasks);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            TaskItemDto? task = await _context.TaskItems.AsNoTracking().Where(t => t.Id == id).Select(t => new TaskItemDto()
            {
                Name = t.Name,
            }).FirstOrDefaultAsync();
            if (task == null)
                return NotFound();

            return Ok(task);
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
