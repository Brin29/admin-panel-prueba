package prueba.admin.User;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Date;

public class UserEntity {

    @GeneratedValue @Id
    private Long id;

    private String firstName;

    private String lastName;

    private String password;

    private String correo;

    private String telefono;

    private String documento;


}
