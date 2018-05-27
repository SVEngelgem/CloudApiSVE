using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/Brands")]
public class BrandsController : Controller
{
    private readonly ModelContext context;

    public BrandsController(ModelContext context)
    {
        this.context = context;
    }

    [HttpGet]         // api/v1/books
    public List<Brand> GetAllBrands()
    {
        return context.Brands.ToList();
    }

    [Route("{id}")]   // api/v1/books/2
    [HttpGet]
    public IActionResult GetBrand(int id)
    {
        var Brand = context.Brands.Find(id);
        if (Brand == null)
            return NotFound();

        return Ok(Brand);
    }

    [Route("{id}/Models")]   // api/v1/books/2
    [HttpGet]
    public IActionResult GetModelsForBrands(int id)
    {
        var Brand = context.Brands
                .Include(d => d.AirsoftModels)
                .SingleOrDefault(d => d.Id == id);

        if (Brand == null)
            return NotFound();

        return Ok(Brand.AirsoftModels);
    }

    [HttpPost]
    public IActionResult CreateBrands([FromBody] Brand newBrand)
    {
        //Book toevoegen in de databank, Id wordt dan ook toegekend
        context.Brands.Add(newBrand);
        context.SaveChanges();
        // Stuur een result 201 met het boek als content
        return Created("", newBrand);
    }

    [HttpPut]
    public IActionResult UpdateBrands([FromBody] Brand UpdateBrand)
    {
        var orgBrand = context.Brands.Find(UpdateBrand.Id);
        if (orgBrand == null)
            return NotFound();

        orgBrand.Name = UpdateBrand.Name;
        orgBrand.specialization = UpdateBrand.specialization;
        
        context.SaveChanges();
        return Ok(orgBrand);
    }

    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeleteBrands(int id)
    {
        var Brand = context.Brands.Find(id);
        if (Brand == null)
            return NotFound();

        //book verwijderen ..
        context.Brands.Remove(Brand);
        context.SaveChanges();
        //Standaard response 204 bij een gelukte delete
        return NoContent();
    }
}