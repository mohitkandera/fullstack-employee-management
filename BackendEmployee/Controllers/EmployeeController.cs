using BackendEmployee.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendEmployee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeContext context;

        public EmployeeController(EmployeeContext context)
        {
            this.context = context;
        }
        // GET: api/<EmployeeController>
        [HttpGet]
        public async Task<ActionResult<List<EmployeeNew>>> GetEmployee()
        {
            var data = await context.EmployeeNews.ToListAsync();
            return Ok(data);
        }

        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeNew>> GetEmployeeByID(int id)
        {
            var Employee = await context.EmployeeNews.FindAsync(id);
            if (Employee == null)
            {
                return NotFound();
            }
            else
            {
                return Employee;
            }

        }
        [HttpPost]
        public async Task<ActionResult<EmployeeNew>>CreateEmployee(EmployeeNew std)
        {
            await context.EmployeeNews.AddAsync(std);
            await context.SaveChangesAsync();
            return Ok(std);
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<EmployeeNew>> UpdateEmployee(int id, EmployeeNew std)
        {
            if (id != std.Id)
            {
                return BadRequest();
            }
            context.Entry(std).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return Ok(std);
        }


        [HttpDelete("{id}")]

        public async Task<ActionResult<EmployeeNew>> DeleteEmployee(int id)
        {
            var std = await context.EmployeeNews.FindAsync(id);
            if (std == null)
            {
                return NotFound();
            }
            context.EmployeeNews.Remove(std);
            await context.SaveChangesAsync();
            return Ok();
        }

    }
}
