
using Microsoft.EntityFrameworkCore;

namespace Model{
    public class ModelContext : DbContext
    {
        public ModelContext (DbContextOptions<ModelContext> options): base(options)
        {
        }
        public DbSet<AirsoftModel> AirsoftModels { get; set; }
        public DbSet<Brand> Brands { get; set; }
    }
}

