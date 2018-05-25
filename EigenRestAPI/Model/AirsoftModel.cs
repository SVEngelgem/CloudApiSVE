using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class AirsoftModel
    {
        public int Id {get; set;}
        public string name {get; set;}
        public string type {get; set;}
        public string operatingsystem {get; set;}
        public string propulsion{get; set;}
        public Brand Brand {get; set;}
    }   
}