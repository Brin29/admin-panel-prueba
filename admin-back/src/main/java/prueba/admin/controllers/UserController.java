package prueba.admin.controllers;

import org.springframework.web.bind.annotation.*;
import prueba.admin.exceptions.UserNotFoundException;
import prueba.admin.users.UserEntity;
import prueba.admin.users.UsersRepository;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/v1")
public class UserController {

    private final UsersRepository repository;

    public UserController(UsersRepository repository){
        this.repository = repository;
    }

    @GetMapping("/users")
    List<UserEntity> allUsers(){
        return repository.findAll();
    }

    @GetMapping("/users/{id}")
    UserEntity user(@PathVariable Long id){
        return repository.findById(id).orElseThrow(
                () -> new UserNotFoundException(id));
    }

    @PostMapping("/add-user")
    UserEntity newUser(@RequestBody UserEntity newUser){
        return repository.save(newUser);
    }

    @PutMapping("/users/{id}")
    UserEntity replaceUser(@RequestBody UserEntity newUser, @PathVariable Long id){
        return repository.findById(id)
                .map(user -> {
                    user.setFirstName(newUser.getFirstName());
                    user.setLastName(newUser.getLastName());
                    user.setPassword(newUser.getPassword());
                    user.setCorreo(newUser.getCorreo());
                    user.setTelephone(newUser.getTelephone());
                    return repository.save(newUser);
                })
                .orElseGet(() -> {
                    return repository.save(newUser);
                });
    }

    @DeleteMapping("/users/{id}")
    void deleteUser(@PathVariable Long id){
        repository.deleteById(id);
    }
}
