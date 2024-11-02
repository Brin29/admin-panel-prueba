package prueba.admin.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import prueba.admin.exceptions.ProductNotFoundException;
import prueba.admin.products.ProductEntity;
import prueba.admin.products.ProductRepository;
import prueba.admin.service.IS3Service;

import java.io.IOException;
import java.net.URL;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/v1")
public class ProductController {

    private final ProductRepository repository;

    private final IS3Service is3Service;

    public ProductController(ProductRepository repository, IS3Service is3Service) {
        this.repository = repository;
        this.is3Service = is3Service;
    }


    @GetMapping("/products")
    List<ProductEntity> allProducts() {
        return repository.findAll();
    }

    @PostMapping("/add-product")
    ProductEntity newProduct(@RequestParam String newProductJSON, @RequestParam("file")MultipartFile file) throws IOException{

        ObjectMapper mapper = new ObjectMapper();

        ProductEntity newProduct = mapper.readValue(newProductJSON, ProductEntity.class);

        newProduct.setImg(is3Service.uploadFile(file));
        return repository.save(newProduct);
    }

    /*
    @PostMapping("/upload")
    public URL uploadFile(@RequestParam("file")MultipartFile file) throws IOException{
        return is3Service.uploadFile(file);
    }
     */

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
