package prueba.admin.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import prueba.admin.exceptions.ProductNotFoundException;
import prueba.admin.products.ProductEntity;
import prueba.admin.products.ProductRepository;
import prueba.admin.service.IS3Service;

import java.io.IOException;
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

        newProduct.setImgPath(is3Service.uploadFile(file));
        newProduct.setImgName(file.getOriginalFilename());
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

    @PutMapping("/products/{prevFileName}/{id}")
    ProductEntity replaceProduct(@RequestParam ProductEntity newProductJSON, @RequestParam("file") MultipartFile file, @PathVariable("id") Long id,  @PathVariable("prevFileName") String prevFileName) throws IOException{


            return repository.findById(id)
                .map(product -> {
                    product.setName(newProductJSON.getName());
                    product.setCategory(newProductJSON.getCategory());
                    product.setDescription(newProductJSON.getDescription());
                    try {
                        product.setImgPath(is3Service.updateFile(file, prevFileName));
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                    product.setPrice(newProductJSON.getPrice());
                    product.setColor(newProductJSON.getColor());
                    product.setDiscount(newProductJSON.isDiscount());
                    product.setImgName(file.getOriginalFilename());
                    product.setSize(newProductJSON.getSize());
                    product.setQuantity(newProductJSON.getQuantity());

                    return repository.save(product);
                })
                .orElseGet(() -> {
                    return repository.save(newProductJSON);
                });
    }



}
