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

    private Date fechaNacimiento;

    private String direccion;

    private String telefono;

    private String documento;

    private String pais;

    private String departamento;

    private String ciudad;
}
