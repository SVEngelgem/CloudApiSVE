using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/Models")]
public class AirsoftModelsListController : Controller
{
    private readonly ModelContext context;

    public AirsoftModelsListController(ModelContext context)
    {
        this.context = context;
    }
    [HttpGet]         // api/v1/Models
    public List<AirsoftModel> GetAllAirsoftModels() {
        return context.AirsoftModels.ToList();
    }

    [Route("{id}")]   // api/v1/Models/2
    [HttpGet]
    public IActionResult GetAirsoftModels(int id)
    {
        var Model = context.AirsoftModels
                    .Include(d => d.Brand)
                    .SingleOrDefault(d => d.Id == id);

        if (Model == null)
            return NotFound();

        return Ok(Model);
    }

    [Route("{id}/Brand")]   // api/v1/Models/2
    [HttpGet]
    public IActionResult GetBrandFromModels(int id)
    {
        var Model = context.AirsoftModels
                    .Include(d => d.Brand)
                    .SingleOrDefault(d => d.Id == id);
        if (Model == null)
            return NotFound();

        return Ok(Model.Brand);
    }

    [HttpPost]
    public IActionResult CreateAirsoftModels([FromBody] AirsoftModel newAirsoftModel)
    {
        //Book toevoegen in de databank, Id wordt dan ook toegekend
        context.AirsoftModels.Add(newAirsoftModel);
        context.SaveChanges();
        // Stuur een result 201 met het boek als content
        return Created("a new airsoftmodel", newAirsoftModel);
    }

    [HttpPut]
    public IActionResult UpdateAirsoftModels([FromBody] AirsoftModel UpdateAirsoftModel)
    {
        var orgAirsoftmodel = context.AirsoftModels.Find(UpdateAirsoftModel.Id);
        if (orgAirsoftmodel == null)
            return NotFound();

        orgAirsoftmodel.name = UpdateAirsoftModel.name;
        orgAirsoftmodel.type = UpdateAirsoftModel.type;
        orgAirsoftmodel.operatingsystem = UpdateAirsoftModel.operatingsystem;
        orgAirsoftmodel.propulsion = UpdateAirsoftModel.propulsion;
        orgAirsoftmodel.BrandId = UpdateAirsoftModel.BrandId;

        context.SaveChanges();
        return Ok(orgAirsoftmodel);
    }

    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeleteModels(int id)
    {
        var model = context.AirsoftModels.Find(id);
        if (model == null)
            return NotFound();

        //book verwijderen ..
        context.AirsoftModels.Remove(model);
        context.SaveChanges();
        //Standaard response 204 bij een gelukte delete
        return NoContent();
    }
}