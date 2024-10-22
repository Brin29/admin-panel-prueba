package prueba.admin.controllers;

import org.springframework.web.bind.annotation.*;
import prueba.admin.exceptions.ProductNotFoundException;
import prueba.admin.products.ProductEntity;
import prueba.admin.products.ProductRepository;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/v1")
public class ProductController {

    private final ProductRepository repository;

    public ProductController(ProductRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/products")
    List<ProductEntity> allProducts() {
        return repository.findAll();
    }

    @PostMapping("/add-product")
    ProductEntity newProduct(@RequestBody ProductEntity newProduct) {
        return repository.save(newProduct);
    }

    @GetMapping("/products/{id}")
    ProductEntity product(@PathVariable Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }

    @PutMapping("/products/{id}")
    ProductEntity replaceProduct(@RequestBody ProductEntity newProduct, @PathVariable Long id) {
        return repository.findById(id)
                .map(product -> {
                    product.setName(newProduct.getName());
                    product.setCategory(newProduct.getCategory());
                    product.setDescription(newProduct.getDescription());
                    product.setImg(newProduct.getImg());
                    product.setPrice(newProduct.getPrice());
                    product.setColor(newProduct.getColor());
                    product.setDiscount(newProduct.isDiscount());
                    product.setSize(newProduct.getSize());
                    product.setQuantity(newProduct.getQuantity());

                    return repository.save(product);
                })
                .orElseGet(() -> {
                    return repository.save(newProduct);
                });
    }

    @DeleteMapping("/products/{id}")
    void deleteProducts(@PathVariable Long id){
        repository.deleteById(id);
    }


}
