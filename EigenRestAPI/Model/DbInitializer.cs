
using System.Linq;

namespace Model
{
    public class DBIntitializer
    {
        public static void Initialize(ModelContext context)
        {
            //Create the db if not yet exists
            context.Database.EnsureCreated();
            
            //Are there already books present ?
            if (!context.AirsoftModels.Any())
            {
                var TokyoMarui = new Brand()
                {
                    Name = "Tokyo Marui",
                    specialization = "gas pistols"
                };
                context.Brands.Add(TokyoMarui);
                var GandP = new Brand()
                {
                    Name = "GandP",
                    specialization="aeg"
                };
                context.Brands.Add(GandP);
                var Krytac = new Brand()
                {
                    Name = "Krytac",
                    specialization="aeg"
                };
                context.Brands.Add(Krytac);

                //Create new book
                var mk23 = new AirsoftModel()
                {
                    name = "mk23",
                    type ="pistol",
                    operatingsystem="nbb",
                    propulsion = "gas",
                    BrandId = 1,
                    Brand = TokyoMarui

                };
                //Add the book to the collection of books
                context.AirsoftModels.Add(mk23);
                var ca870 = new AirsoftModel()
                {
                    name = "ca870",
                    type ="shotgun",
                    operatingsystem="spring",
                    propulsion = "spring",
                    BrandId = 2,
                    Brand = GandP
                };
                context.AirsoftModels.Add(ca870);
                //Save all the changes to the DB
                context.SaveChanges();
            }
        }
    }
}


                

                