using ECommerceAPI.Data;
using ECommerceAPI.Models;
using ECommerceAPI.Repository.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceAPI.Repository.Concrete
{
    public class ProductManager : IDataRepository<Product>
    {
        private readonly Context _context;
        public ProductManager(Context context)
        {
            _context = context;
        }
        public void Add(Product entity)
        {
            _context.Products.Add(entity);
            _context.SaveChanges();
        }

        public void Delete(Product entity)
        {
            _context.Products.Remove(entity);
            _context.SaveChanges();
        }

        public Product Get(int id)
        {
            return _context.Products.FirstOrDefault(p => p.ProductId == id);
        }

        public IEnumerable<Product> GetAll()
        {
            return _context.Products.ToList();
        }

        public void Update(Product dbentity, Product entity)
        {
            dbentity.Name = entity.Name;
            dbentity.Image = entity.Image;
            dbentity.Price = entity.Price;
            dbentity.countInStock = entity.countInStock;
            dbentity.brand = entity.brand;
            dbentity.rating = entity.rating;
            dbentity.numReview = entity.numReview;
            dbentity.description = entity.description;
            dbentity.CategoryID = entity.CategoryID;

            _context.SaveChanges();
        }
    }
}
