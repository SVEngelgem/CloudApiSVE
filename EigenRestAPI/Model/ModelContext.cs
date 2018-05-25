
using Microsoft.EntityFrameworkCore;

namespace Model{
    public class ModelContext : DbContext
    {
        public ModelContext (DbContextOptions<ModelContext> options): base(options)
        {
        }
        public DbSet<AirsoftModel> AirsoftModel { get; set; }
        public DbSet<Brand> Brand { get; set; }
    }
}

