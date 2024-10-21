package prueba.admin.Usuario;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

public class UserEntity {

    @GeneratedValue @Id
    private Long id;

    @Column(nullable = false, name = "nombre")
    private String firstName;

    @Column(nullable = false, name = "apellido")
    private String lastName;

    @Column(nullable = false, name = "contraseña")
    private String password;

    @Column(nullable = false, name = "correo")
    private String correo;

    @Column(nullable = false, name = "telefono")
    private String telephone;
}
