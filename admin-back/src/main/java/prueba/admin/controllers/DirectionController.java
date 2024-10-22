package prueba.admin.controllers;

import org.springframework.web.bind.annotation.*;
import prueba.admin.directions.DirectionEntity;
import prueba.admin.directions.DirectionRepository;
import prueba.admin.exceptions.DirectionNotFoundException;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("v1")
public class DirectionController {

    private final DirectionRepository repository;

    public DirectionController(DirectionRepository repository){
        this.repository = repository;

    }

    @GetMapping("/directions")
    List<DirectionEntity> allDirections(){
        return repository.findAll();
    }

    @GetMapping("/directions/{id}")
    DirectionEntity direction(@PathVariable Long id){
        return repository.findById(id)
                .orElseThrow(() -> new DirectionNotFoundException(id));
    }

    @PostMapping("/add-direction")
    DirectionEntity newDirection(@RequestBody DirectionEntity newDirection){
      return repository.save(newDirection);
    }

    @PutMapping("/directions/{id}")
    DirectionEntity replaceDirection(@RequestBody DirectionEntity newDirection, @PathVariable Long id){
      return repository.findById(id)
        .map(direction -> {
          direction.setCity(newDirection.getCity());
          direction.setProvince(newDirection.getDirection());
          direction.setCountry(newDirection.getCountry());
          direction.setZipCode(newDirection.getZipCode());
          direction.setDirection(newDirection.getDirection());
          return repository.save(newDirection);
      }).orElseGet(() -> {
        return repository.save(newDirection);
      });
    }

    @DeleteMapping("/directions/{id}")
    void deleteDirection(@PathVariable Long id){
        repository.deleteById(id);
    }

}
