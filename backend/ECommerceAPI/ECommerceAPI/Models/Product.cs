using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceAPI.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public int Price { get; set; }
        public int countInStock { get; set; }
        public string brand { get; set; }
        public int rating { get; set; }
        public int numReview { get; set; }
        public string description { get; set; }
        public int CategoryID { get; set; }
        public virtual Category Category { get; set; }
    }
}

