package prueba.admin.exceptions;

public class DirectionNotFoundException extends RuntimeException{

    public DirectionNotFoundException(Long id){
        super("No se pudo encontrar la direction con el id: " + id);
    }
}
