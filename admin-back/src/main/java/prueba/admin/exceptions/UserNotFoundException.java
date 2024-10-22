package prueba.admin.exceptions;

public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException(Long id){
        super("No se pudo encontrar el usuario con el id: " + id );
    }
}
