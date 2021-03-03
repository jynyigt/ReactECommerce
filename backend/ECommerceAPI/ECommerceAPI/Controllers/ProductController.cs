using ECommerceAPI.Models;
using ECommerceAPI.Repository.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IDataRepository<Product> _dataRepository;
        public ProductController(IDataRepository<Product> dataRepository)
        {
            _dataRepository = dataRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Product> products = _dataRepository.GetAll();
            return Ok(products);
        }

        [HttpGet("{id}",Name ="Get")]
        public IActionResult Get(int id)
        {
            Product product = _dataRepository.Get(id);
            if (product==null)
            {
                return NotFound("Ürün bulunamadı.");
            }
            return Ok(product);
        }

        [HttpPost]
        public IActionResult Post(Product product)
        {
            if (product==null)
            {
                return BadRequest("Film Bulunamadı.");
            }
            _dataRepository.Add(product);
            return CreatedAtRoute(
                  "Get",
                  new { Id = product.ProductId },
                  product);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id,Product product)
        {
            if (product==null)
            {
                return BadRequest("Ürün bulunamadı.");
            }
            Product productUpdate = _dataRepository.Get(id);
            if (productUpdate==null)
            {
                return NotFound("Ürün kaydedilemedi.");
            }
            _dataRepository.Update(productUpdate, product);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Product product = _dataRepository.Get(id);
            if (product==null)
            {
                return NotFound("Ürün kaydı bulunamadı.");
            }
            _dataRepository.Delete(product);
            return NoContent();
        }
    }
}
