using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/Model")]
public class AirsoftModelListController : Controller
{
    private readonly ModelContext context;

    public AirsoftModelListController(ModelContext context)
    {
        this.context = context;
    }

    [HttpGet]         // api/v1/books
    public List<AirsoftModel> GetAllAirsoftModels(string name, string type, string operationsystem, string propulsion, int? page, string sort, int length= 2, string dir = "asc")
    {
        IQueryable<AirsoftModel> query = context.AirsoftModel;

        if (!string.IsNullOrWhiteSpace(name))
            query = query.Where(d => d.name == name);
        if (!string.IsNullOrWhiteSpace(type))
            query = query.Where(d => d.type == type);
        if (!string.IsNullOrWhiteSpace(operationsystem))
            query = query.Where(d => d.operatingsystem == operationsystem);
        if (!string.IsNullOrWhiteSpace(propulsion))
            query = query.Where(d => d.propulsion == propulsion);
        if (!string.IsNullOrWhiteSpace(sort))
        {
            switch (sort)
            {
                case "name":
                    if (dir == "asc")
                        query = query.OrderBy(d => d.name);
                    else if (dir == "desc")
                        query = query.OrderByDescending(d => d.name);
                    break;
                case "type":
                    if (dir == "asc")
                        query = query.OrderBy(d => d.type);
                    else if (dir == "desc")
                        query = query.OrderByDescending(d => d.type);
                    break;
                case "propulsion":
                    if (dir == "asc")
                        query = query.OrderBy(d => d.propulsion);
                    else if (dir == "desc")
                        query = query.OrderByDescending(d => d.propulsion);
                    break;
            }
        }

        if (page.HasValue)
            query = query.Skip(page.Value * length);
        query = query.Take(length);

        return query.ToList();
    }

    [Route("{id}")]   // api/v1/books/2
    [HttpGet]
    public IActionResult GetAirsoftModel(int id)
    {
        var book = context.AirsoftModel
                    .Include(d => d.Brand)
                    .SingleOrDefault(d => d.Id == id);

        if (book == null)
            return NotFound();

        return Ok(book);
    }

    [Route("{id}/author")]   // api/v1/books/2
    [HttpGet]
    public IActionResult GetBrandFromModel(int id)
    {
        var book = context.AirsoftModel
                    .Include(d => d.Brand)
                    .SingleOrDefault(d => d.Id == id);
        if (book == null)
            return NotFound();

        return Ok(book.Brand);
    }

    [HttpPost]
    public IActionResult CreateAirsoftModel([FromBody] AirsoftModel newAirsoftModel)
    {
        //Book toevoegen in de databank, Id wordt dan ook toegekend
        context.AirsoftModel.Add(newAirsoftModel);
        context.SaveChanges();
        // Stuur een result 201 met het boek als content
        return Created("", newAirsoftModel);
    }

    [HttpPut]
    public IActionResult UpdateAirsoftModel([FromBody] AirsoftModel UpdateAirsoftModel)
    {
        var orgAirsoftmodel = context.AirsoftModel.Find(UpdateAirsoftModel.Id);
        if (orgAirsoftmodel == null)
            return NotFound();

        orgAirsoftmodel.name = UpdateAirsoftModel.name;
        orgAirsoftmodel.type = UpdateAirsoftModel.type;
        orgAirsoftmodel.operatingsystem = UpdateAirsoftModel.operatingsystem;
        orgAirsoftmodel.propulsion = UpdateAirsoftModel.propulsion;

        context.SaveChanges();
        return Ok(orgAirsoftmodel);
    }

    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeleteModel(int id)
    {
        var model = context.AirsoftModel.Find(id);
        if (model == null)
            return NotFound();

        //book verwijderen ..
        context.AirsoftModel.Remove(model);
        context.SaveChanges();
        //Standaard response 204 bij een gelukte delete
        return NoContent();
    }
}