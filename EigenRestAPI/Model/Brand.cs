using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Brand
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string specialization {get; set;}
        public ICollection<AirsoftModel> AirsoftModels {get;set;}
    }   
}