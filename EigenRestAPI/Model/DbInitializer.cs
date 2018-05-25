
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
            if (!context.AirsoftModel.Any())
            {
                var TokyoMarui = new Brand()
                {
                    Name = "Tokyo Marui",
                    specialization = "gas pistols"
                };
                context.Brand.Add(TokyoMarui);
                var GandP = new Brand()
                {
                    Name = "Orwell",
                    specialization="aeg"
                };
                context.Brand.Add(GandP);

                //Create new book
                var mk23 = new AirsoftModel()
                {
                    name = "mk23",
                    type ="pistol",
                    operatingsystem="nbb",
                    propulsion = "gas",
                    Brand = TokyoMarui

                };
                //Add the book to the collection of books
                context.AirsoftModel.Add(mk23);
                var ca870 = new AirsoftModel()
                {
                    name = "m4",
                    type ="shotgun",
                    operatingsystem="spring",
                    propulsion = "spring",
                    Brand = GandP
                };
                context.AirsoftModel.Add(ca870);
                //Save all the changes to the DB
                context.SaveChanges();
            }
        }
    }
}


                

                