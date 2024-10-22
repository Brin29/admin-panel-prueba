package prueba.admin.users;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "usuario")
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
